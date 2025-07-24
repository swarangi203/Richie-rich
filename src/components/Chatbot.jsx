import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const openAIConfig = {
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  endpoint: 'https://api.openai.com/v1/chat/completions',
};

function Chatbot() {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const [userDetails, setUserDetails] = useState({});

  const qts = [
    "What is your name?",
    "What is your age?",
    "What is your expense range?"
  ];

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const botResponse = { text: `You asked: "${input}". Here's a tip: Save 10% of your income monthly!`, sender: 'bot' };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error calling Open AI API:', error);
      const errorResponse = { text: 'Sorry, something went wrong. Try again!', sender: 'bot' };
      setMessages(prev => [...prev, errorResponse]);
    }
  };

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg shadow-lg p-4 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex-1 overflow-y-auto mb-4">
         {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-500 mt-20">
            <img
              src="/empty_chat.svg"
              alt="No messages yet"
              className="w-40 h-40 opacity-40"
            />
            <p className="mt-3">How may I help you?</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`mb-2 w-full ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                {msg.text}
              </span>
            </div>
          ))
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('chatPlaceholder')}
          className="flex-1 p-2 border rounded-l-lg"
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-r-lg">Send</button>
      </div>
    </motion.div>
  );
}

export default Chatbot;
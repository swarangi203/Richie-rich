import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiSend } from 'react-icons/fi';

const openAIConfig = {
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  endpoint: 'https://api.openai.com/v1/chat/completions',
};

const Chatbot = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const [started, setStarted] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const qts = [
    "What is your name?",
    "What is your age?",
    "What is your expense range?"
  ];

  const handleOptionClick = (option) => {
    setStarted(true);
    setSelectedOption(option);

    if (option === 'Investments') {
      setMessages([{ text: "Great! Let's get started with your investment journey.", sender: 'bot' }]);
    } else {
      setMessages([{ text: `You selected: ${option}. Please wait while we connect you...`, sender: 'bot' }]);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const botResponse = {
        text: `You asked: "${input}". Here's a tip: Save 10% of your income monthly!`,
        sender: 'bot',
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error calling Open AI API:', error);
      const errorResponse = { text: 'Sorry, something went wrong. Try again!', sender: 'bot' };
      setMessages(prev => [...prev, errorResponse]);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setInput('');
    setStarted(false);
    setUserDetails({});
    setSelectedOption('');
  };

  return (
    <motion.div
      className="relative bg-grey/10 backdrop-blur-md border border-grey/30 rounded-lg shadow-lg p-4 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{height:'100%'}}
    >
      {/* Reset Button */}
      {started && (
        <div className="absolute top-2 right-2 z-10">
          <button
            onClick={resetChat}
            className="text-sm text-white border border-white/30 px-3 py-1 rounded backdrop-blur-md bg-white/10 hover:bg-white/20 transition flex items-center gap-1 shadow-md"
          >
            &#x21bb; <span>Try Again</span>
          </button>
        </div>
      )}

      <div className="flex-1 overflow-y-auto mb-4 pt-10">
        {messages.length === 0 && !started ? (
          <div className="flex flex-col items-center justify-center text-gray-500 mt-20">
            <img
              src="/empty_chat.svg"
              alt="No messages yet"
              className="w-40 h-40 opacity-50"
            />
            <p className="mt-3 mb-5">How may I help you?</p>
            <div className="flex gap-3">
              {['CA Listings', 'Investments', 'ITR Filing'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="border border-white-500 text-white-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 w-full ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Show input only for "Investments" */}
      {started && selectedOption === 'Investments' && (
        <div className="flex mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('chatPlaceholder') || "Type your message..."}
            className="flex-1 p-2 rounded-l-lg bg-white/10 text-white placeholder-white/70 border border-white/30 backdrop-blur-md focus:outline-none"
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-white/10 text-white border border-white/30 backdrop-blur-md p-2 rounded-r-lg hover:bg-white/20 transition"
          >
            <FiSend size={18} />
          </button>
        </div>
      )}

    </motion.div>
  );
};

export default Chatbot;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiSend } from 'react-icons/fi';
import axios from 'axios';

const Chatbot = ({ setModel }) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const [started, setStarted] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [loading, setLoading] = useState(false);


  const qts = [
    "Can I know your name to personalize our conversation?",
    "Thanks! Just to tailor advice better—how old are you?",
    "Got it. What’s your estimated monthly income?",
    "And roughly how much do you spend each month?"
  ];

  const handleOptionClick = (option) => {
    setStarted(true);
    setSelectedOption(option);

    if (option === 'CA Listings') {
      setModel(2); // 👈 This sets the model in App.js
      setMessages([{ text: `${t("caListText")}`, sender: 'bot' }]);
    } else if (option === 'Investments') {
      setMessages([
        { text: "Great! Let's get started with your investment journey.", sender: 'bot' },
      ]);
      setTimeout(() => {
        setMessages(prev => [...prev, { text: qts[0], sender: 'bot' }]);
        setCurrentQuestionIndex(0);
      }, 1100);
    } else if (option == 'Home') {
      setModel(1);
      resetChat
    } else {
      setModel(3); // 👈 This sets the model in App.js
      setMessages([{ text: ` Showing available ITR resources for your asistance.`, sender: 'bot' }]);
    }
  };


  const fetchAiResponse = async () => {
    setLoading(true);
    const res = await axios.post('https://6c97406bc81d.ngrok-free.app/onboarding', {
      "name": userDetails.q1 || "User",
      "age": userDetails.q2 || "25",
      "monthly_income": userDetails.q3 || "5000",
      "monthly_expense": userDetails.q4 || "2000"
    });

    setMessages(prev => [...prev, { text: "Based on your inputs, here are some investment options I'd recommend for you:", sender: 'bot' }]);

    // const res = {
    //   "data": {
    //     "message": "Choose your preferred investments from any risk category",
    //     "low_risk": [
    //       {
    //         "instrument": "Fixed Deposit",
    //         "investments": [
    //           {
    //             "name": "HDFC Bank FD",
    //             "amount": 3000,
    //             "predicted_return_5y": "6.5%"
    //           },
    //           {
    //             "name": "SBI Bank FD",
    //             "amount": 2000,
    //             "predicted_return_5y": "6.7%"
    //           }
    //         ]
    //       },
    //       {
    //         "instrument": "Gold Bonds",
    //         "investments": [
    //           {
    //             "name": "Sovereign Gold Bond Scheme",
    //             "amount": 3000,
    //             "predicted_return_5y": "2.5% (plus gold price appreciation)"
    //           }
    //         ]
    //       }
    //     ],
    //     "medium_risk": [
    //       {
    //         "instrument": "Mutual Funds",
    //         "investments": [
    //           {
    //             "name": "SBI Bluechip Fund",
    //             "amount": 8000,
    //             "predicted_return_5y": "12%"
    //           },
    //           {
    //             "name": "Axis Growth Opportunities Fund",
    //             "amount": 5000,
    //             "predicted_return_5y": "14%"
    //           }
    //         ]
    //       },
    //       {
    //         "instrument": "REITs",
    //         "investments": [
    //           {
    //             "name": "Embassy Office Parks REIT",
    //             "amount": 4000,
    //             "predicted_return_5y": "8%"
    //           }
    //         ]
    //       }
    //     ],
    //     "high_risk": [
    //       {
    //         "instrument": "Stocks",
    //         "investments": [
    //           {
    //             "name": "Reliance Industries Ltd.",
    //             "amount": 7000,
    //             "predicted_return_5y": "15%"
    //           },
    //           {
    //             "name": "Tata Motors Ltd.",
    //             "amount": 4000,
    //             "predicted_return_5y": "18%"
    //           }
    //         ]
    //       },
    //       {
    //         "instrument": "Crypto",
    //         "investments": [
    //           {
    //             "name": "Bitcoin",
    //             "amount": 6000,
    //             "predicted_return_5y": "25%"
    //           },
    //           {
    //             "name": "Ethereum",
    //             "amount": 3000,
    //             "predicted_return_5y": "30%"
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // }

    const lowRiskInvestments = res.data.low_risk.map(item => {
      const investments = item.investments.map(inv => `${inv.name} - ₹${inv.amount} (${inv.predicted_return_5y})`).join(', ');
      return `• ${item.instrument}: ${investments}`;
    }).join('<br/><br/>');

    setMessages(prev => [...prev, { text: "Here are some low-risk investment options: <br/><br /> " + lowRiskInvestments, sender: 'bot' }]);

    const mediumRiskInvestments = res.data.medium_risk.map(item => {
      const investments = item.investments.map(inv => `${inv.name} - ₹${inv.amount} (${inv.predicted_return_5y})`).join(', ');
      return `• ${item.instrument}: ${investments}`;
    }).join('<br/><br/>');

    setMessages(prev => [...prev, { text: "Here are some medium-risk investment options: <br/><br /> " + mediumRiskInvestments, sender: 'bot' }]);

    const highRiskInvestments = res.data.high_risk.map(item => {
      const investments = item.investments.map(inv => `${inv.name} - ₹${inv.amount} (${inv.predicted_return_5y})`).join(', ');
      return `• ${item.instrument}: ${investments}`;
    }).join('<br/><br/>');

    setMessages(prev => [...prev, { text: "Here are some high-risk investment options: <br/><br /> " + highRiskInvestments, sender: 'bot' }]);

    setLoading(false);

  }

  const sendMessage = async () => {
    if (!input.trim()) return;

    const trimmedInput = input.trim();
    const userMessage = { text: trimmedInput, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    if (selectedOption === 'Investments' && currentQuestionIndex >= 0 && currentQuestionIndex < qts.length) {
      const key = `q${currentQuestionIndex + 1}`;
      setUserDetails(prev => ({ ...prev, [key]: trimmedInput }));

      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < qts.length) {
        setTimeout(() => {
          setMessages(prev => [...prev, { text: qts[nextIndex], sender: 'bot' }]);
          setCurrentQuestionIndex(nextIndex);
        }, 500);
      } else {
        setCurrentQuestionIndex(-1);
        await fetchAiResponse();
      }
      return;
    }
  };


  const resetChat = () => {
    setMessages([]);
    setInput('');
    setStarted(false);
    setUserDetails({});
    setSelectedOption('');
  };
  const resetChatHome = () => {
    setMessages([]);
    setInput('');
    setStarted(false);
    setUserDetails({});
    setSelectedOption('');
    setModel(1);
  };

  return (
    <motion.div
      className="relative bg-blue-50 border border-blue-200 rounded-lg shadow-lg p-4 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ height: '100%' }}
    >
      {/* Reset Button */}
      {started && (
        <div className="top-2 right-2 z-10 flex" style={{
          width: "100%",
          justifyContent: "space-between",
        }}>
          <button
            onClick={resetChatHome}
            className="text-sm text-white border border-blue-800 px-3 py-1 rounded bg-blue-700 hover:bg-blue-600 transition flex items-center gap-1 shadow-md"
          >
            &#x21bb; <span>Home</span>
          </button>
          <button
            onClick={resetChat}
            className="text-sm text-blue-500 border border-blue-500 px-3 py-1 rounded backdrop-blur-md bg-white/10 hover:bg-white/20 transition flex items-center gap-1 shadow-md"
          >
            &#x21bb; <span>Go back</span>
          </button>
        </div>
      )}

      <div className="flex-1 overflow-y-auto mb-4 pt-10 min-h-0 max-h-[400px]">
        {messages.length === 0 && !started ? (
          <div className="flex flex-col items-center justify-center text-gray-500 mt-16">
            <img
              src="/empty_chat.svg"
              alt="No messages yet"
              className="w-40 h-40 opacity-80"
            />
            <p className="mt-3 mb-5">How may I help you?</p>
            <div className="flex gap-3">
              {['Home', 'CA Listings', 'Investments', 'ITR Filing'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
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
                <span
                  className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  {...(msg.sender === 'bot'
                    ? { dangerouslySetInnerHTML: { __html: msg.text } }
                    : {})}
                >
                  {msg.sender === 'user' ? msg.text : null}
                </span>
              </div>

            ))}
            {loading && (
              <div className="mb-2 w-full text-left">
                <span className="inline-block p-2 rounded-lg bg-gray-200 animate-pulse text-gray-500">
                  Thinking...
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Box */}
      {started && selectedOption === 'Investments' && (
        <div className="flex mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('chatPlaceholder') || "Type your message..."}
            className="flex-1 p-2 rounded-l-lg bg-white/10 text-blue-500 placeholder-blue/70 border border-blue-500 backdrop-blur-md focus:outline-none"
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-white/10 text-blue-500 border border-blue-500 backdrop-blur-md p-2 rounded-r-lg hover:bg-white/20 transition min-w-[50px] flex items-center justify-center">
            <FiSend size={18} />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Chatbot;

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Chatbot from './components/chatbot';
import BudgetCard from './components/BudgetCard';
import ChallengeCard from './components/ChallengeCard';
import Header from './components/Header/header';

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 p-4">
      <div className="max-w-4xl mx-auto">
              
        <motion.h1
          className="text-3xl font-bold text-center mb-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {t('welcome')}
        </motion.h1>
        {/* <div className="flex justify-start mb-4">
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="p-2 rounded border"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
          <button className="ml-2 p-2 bg-gray-200 rounded">{t('accessibility')}</button>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="space-y-4">
            <BudgetCard />
            <ChallengeCard />
          </div>
          <div>
            <Chatbot />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
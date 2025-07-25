import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Chatbot from './components/chatbot';
import GameCard from './components/GameCard';
import Header from './components/Header/header';
import NewsCard from './components/NewsCard';
import CaList from './components/Header/CaCard';
import { blue } from '@mui/material/colors';


function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const [model, setModel] = useState(1);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const showModel = (id) =>{
    switch(id){
      case 1:
        return (<div className="space-y-4"> 
        <NewsCard/>
        <GameCard/>
      </div>)
      case 2:
        return <CaList/>;
      default:
      break;
    }

  }

  return (
    <>
    <Header/>
    <div className="h-screen bg-white p-4">
      <div className="mx-auto">
        <motion.h1
          className="text-3xl font-bold text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{color:''}}
        >
          {t('welcome')}
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          
            {showModel(model)}
          <div className="shadow-2xl rounded-xl p-4 bg-white">
            <Chatbot />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
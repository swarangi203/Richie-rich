import React ,{useState} from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GameCard from './components/GameCard';
import Chatbot from './components/Chatbot';
import Header from './components/Header/header';
import NewsCard from './components/NewsCard';
import CaList from './components/Header/CaCard';


function App() {
  const { t } = useTranslation();
  const [model, setModel] = useState(1);

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
    <div className='flex flex-col h-screen'>
    <Header/>
    <div className="flex-1 bg-gradient-to-b from-white-900 via-white-800 to-white-900 p-4 overflow-auto">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
              
        <motion.h1
          className="text-3xl font-bold text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{color:''}}
        >
          {t('welcome')}
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          <div className="space-y-4">
           {showModel(model)}
          </div>
          <div>
            <Chatbot />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
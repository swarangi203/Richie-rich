import { Card } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import axios from 'axios';

function NewsCard() {
  const { t } = useTranslation();

  const newsItems = [
    "The curious fox jumped over the lazy dog, then ran swiftly through the forest.",
    "Scientists discover a new species of bird in the Amazon.",
    "City council proposes a new sustainable transport system.",
    "A local bakery gains popularity for turning leftover bread into croutons.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [search, setSearch] = useState('');
  const [news , setNews] = useState(newsItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  useEffect(()=>{
    handleSearch();
  },[]);

  const handleSearch = async () => {
    // alert(`You searched for: ${search}`);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/tts',
        { search },
        { responseType: 'blob' }
      );
        setNews(response.data);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <motion.div
      className="p-4 rounded-lg shadow"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      style={{ backgroundColor: '#C7DFEF' }}
    >
      <h2 className="text-lg font-bold mb-2">{t('news')}</h2>

      {/* Search Bar and Button */}
      <div className="flex mb-4 w-full" style={{ maxWidth: '100%' }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('searchNews')}
          className="flex-grow p-2 border border-gray-300 rounded-l-md"
          style={{ height: '40px' }}
        />
        <button
          onClick={handleSearch}
          style={{
            backgroundColor: '#0963D1',
            height: '40px',
            padding: '0 16px'
          }}
          className="text-white rounded-r-md hover:bg-blue-600 transition"
        >
          {t('search')}
        </button>
      </div>

      {/* Animated Card */}
      <div style={{ width: '100%', height: '100px', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ x: direction * 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'absolute', width: '100%' }}
          >
            <Card
              style={{
                height: '100px',
                padding: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'justify',
                whiteSpace: 'normal',
                wordWrap:'break-word',
                overflowWrap: 'break-word'
              }}
            >
              <p
                style={{
                  margin: 0,
                  width: '100%',
                  wordWrap:'break-word',
                  wordBreak: 'break-word',
                }}
              >
                {news[currentIndex]}
              </p>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default NewsCard;

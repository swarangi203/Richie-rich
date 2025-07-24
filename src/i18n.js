import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to your Financial Coach!',
      chatPlaceholder: 'Ask me anything about your finances...',
      budgetTitle: 'Your Budget',
      challengeTitle: 'Savings Challenge',
      learnTitle: 'Learn',
      settings: 'Settings',
      accessibility: 'Accessibility',
      save: 'Save ₹500 in 5 days',
      quiz: 'Take a quick quiz!',
    },
  },
  hi: {
    translation: {
      welcome: 'आपके वित्तीय कोच में आपका स्वागत है!',
      chatPlaceholder: 'अपने वित्त के बारे में कुछ भी पूछें...',
      budgetTitle: 'आपका बजट',
      challengeTitle: 'बचत चुनौती',
      learnTitle: 'सीखें',
      settings: 'सेटिंग्स',
      accessibility: 'पहुंच',
      save: '5 दिनों में ₹500 बचाएं',
      quiz: 'एक त्वरित क्विज़ लें!',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to your Financial Coach!',
      chatPlaceholder: 'Ask me anything about your finances...',
      budgetTitle: 'Your Budget',
      challengeTitle: 'Quiz Time!!',
      learnTitle: 'Learn',
      settings: 'Settings',
      accessibility: 'Accessibility',
      question: 'Save ₹500 in 5 days',
      quiz: 'Take a quick quiz!',
      news: 'NEWS',
      searchNews:'Search News...',
      send: 'Send',
      search: 'Search',
      send:'Send',
      testYourKnowledge: 'Lets Test your knowledge',
      previous: 'Previous',
      next: 'Next',
      profile:'Profile',
      setting: 'Setting',
      logout:'Logout'
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
      question: '5 दिनों में ₹500 बचाएं',
      news:'समाचार',
      searchNews:'समाचार खोजें...',
      quiz: 'एक त्वरित क्विज़ लें!',
      search: 'खोजें',
      send: 'भेजें',
      testYourKnowledge:'चलिए आपके ज्ञान की परीक्षा लेते हैं',
      previous:'पिछला',
      next:'अगला',
      porfile:'प्रोफ़ाइल',
      setting: 'सेटिंग',
      logout: 'लॉगआउट' 
    },
  },
  de: {
    translation: {
      welcome: 'Willkommen bei deinem Finanzcoach!',
      chatPlaceholder: 'Frag mich alles über deine Finanzen...',
      budgetTitle: 'Dein Budget',
      challengeTitle: 'Quizzeit!!',
      learnTitle: 'Lernen',
      settings: 'Einstellungen',
      accessibility: 'Barrierefreiheit',
      question: 'Spare ₹500 in 5 Tagen',
      quiz: 'Mach ein schnelles Quiz!',
      news: 'NACHRICHTEN',
      searchNews: 'Nachrichten suchen...',
      send: 'Senden',
      search: 'Suchen',
      testYourKnowledge: 'Testen wir dein Wissen',
      previous: 'Zurück',
      next: 'Weiter',
      profile:'Profil',
      setting: 'Einstellung',
      logout: 'Abmelden'

    }
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
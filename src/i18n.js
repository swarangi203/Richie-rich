import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to your Financial Coach!',
      chatPlaceholder: '  Ask me anything about your finances...',
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
      logout:'Logout',
      caListText:'Showing available Chartered Accountants near you.',

    },
  },
  mr: {
    translation: {
      welcome: 'तुमच्या आर्थिक मार्गदर्शकाचे स्वागत आहे!',
      chatPlaceholder: 'तुमच्या आर्थिक बाबतीत काहीही विचारा...',
      budgetTitle: 'तुमचा बजेट',
      challengeTitle: 'प्रश्नमंजुषा वेळ!!',
      learnTitle: 'शिका',
      settings: 'सेटिंग्ज',
      accessibility: 'सुलभता',
      question: '५ दिवसांत ₹५०० वाचवा',
      quiz: 'एक जलद क्विझ घ्या!',
      news: 'बातम्या',
      searchNews: 'बातम्या शोधा...',
      send: 'पाठवा',
      search: 'शोधा',
      testYourKnowledge: 'तुमच्या ज्ञानाची चाचणी घेऊया',
      previous: 'मागील',
      next: 'पुढील',
      profile: 'प्रोफाईल',
      setting: 'सेटिंग',
      logout: 'बाहेर पडा',
      caListText: 'आपल्या जवळील उपलब्ध चार्टर्ड अकाउंटंट्स दाखवत आहोत.'

    }
  },

  gu: {
    translation: {
      welcome: 'તમારું ફાઈનાન્સિયલ કોચમાં સ્વાગત છે!',
      chatPlaceholder: 'તમારા નાણાં અંગે કંઈ પણ પૂછો...',
      budgetTitle: 'તમારું બજેટ',
      challengeTitle: 'પ્રશ્નોત્તરી સમય!!',
      learnTitle: 'શીખો',
      settings: 'સેટિંગ્સ',
      accessibility: 'અક્ષમતા સહાયકતા',
      question: '૫ દિવસમાં ₹૫૦૦ બચાવો',
      quiz: 'ઝડપી ક્વિઝ લો!',
      news: 'સમાચાર',
      searchNews: 'સમાચાર શોધો...',
      send: 'મોકલો',
      search: 'શોધો',
      testYourKnowledge: 'ચાલો તમારું જ્ઞાન તપાસીએ',
      previous: 'પાછળનું',
      next: 'આગળનું',
      profile: 'પ્રોફાઇલ',
      setting: 'સેટિંગ',
      logout: 'લૉગઆઉટ કરો',
      caListText: 'આસપાસ ઉપલબ્ધ ચાર્ટર્ડ એકાઉન્ટન્ટ્સ બતાવવામાં આવી રહ્યા છે.'

    }
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
      logout: 'लॉगआउट' ,
      caListText: 'आपके पास उपलब्ध चार्टर्ड अकाउंटेंट्स दिखाए जा रहे हैं।'

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
      logout: 'Abmelden',
      caListText: 'Verfügbare Wirtschaftsprüfer in Ihrer Nähe werden angezeigt.'

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
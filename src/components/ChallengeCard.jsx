import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function ChallengeCard() {
  const { t } = useTranslation();
  return (
    <motion.div
      className="bg-purple-100 p-4 rounded-lg shadow"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
    >
      <h2 className="text-lg font-bold">{t('challengeTitle')}</h2>
      <p>{t('save')}</p>
      <button className="mt-2 bg-purple-500 text-white p-2 rounded">Join Challenge</button>
    </motion.div>
  );
}

export default ChallengeCard;
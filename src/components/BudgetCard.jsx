import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function BudgetCard() {
  const { t } = useTranslation();
  return (
    <motion.div
      className="bg-green-100 p-4 rounded-lg shadow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-lg font-bold">{t('budgetTitle')}</h2>
      <p>Income: ₹50,000</p>
      <p>Expenses: ₹30,000</p>
      <p>Savings: ₹20,000</p>
    </motion.div>
  );
}

export default BudgetCard;
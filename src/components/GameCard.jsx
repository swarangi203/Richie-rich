import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const questions = [
  {
    question: "What is the primary benefit of investing in a diversified portfolio?",
    options: [
      "Higher tax savings",
      "Increased risk exposure",
      "Minimized risk by spreading investments",
      "Guaranteed returns"
    ],
    answer: "Minimized risk by spreading investments"
  },
  {
    question: "Which investment option is generally considered the safest?",
    options: [
      "Fixed Deposits",
      "Stocks",
      "Mutual Funds",
      "Cryptocurrency"
    ],
    answer: "Fixed Deposits"
  },
  {
    question: "What does 'compound interest' mean?",
    options: [
      "Interest paid only on the principal amount",
      "Interest calculated on interest earned as well as principal",
      "Interest rate that changes daily",
      "Penalty for early withdrawal"
    ],
    answer: "Interest calculated on interest earned as well as principal"
  },
  {
    question: "What is a common reason for investing in a Public Provident Fund (PPF)?",
    options: [
      "Short-term capital gains",
      "High liquidity",
      "Tax benefits and long-term savings",
      "Daily trading"
    ],
    answer: "Tax benefits and long-term savings"
  },
  {
    question: "Which of the following best describes a mutual fund?",
    options: [
      "A single company’s stock",
      "A government-issued bond",
      "A personal loan scheme",
      "A pool of investments managed by professionals",
    ],
    answer: "A pool of investments managed by professionals"
  }
];


function GameCard() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [direction, setDirection] = useState("next"); // to control animation direction
  const [startQuiz, setStartQuiz] = useState(false);

  const handleSelectOption = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setDirection("next");
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection("prev");
      setCurrentIndex((prev) => prev - 1);
      setSelectedOption(null);
    }
  };

  return (
    <div style={{ backgroundColor: "#C7DFEF", padding: "20px" }}>
      {!startQuiz ? (
        // 👇 Intro Message
        <div className="text-center">
          <h2 style={{marginTop:30, marginBottom:30}} className="text-xl font-bold mb-4">{t("testYourKnowledge")}</h2>
          <button
          style={{marginBottom:50}}
            onClick={() => setStartQuiz(true)}
            className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900"
          >
             {t("quiz")}
          </button>
        </div>
      ) : (
        // 👇 Quiz Section
        <>
          <h2 style={{ marginLeft: 20 }} className="text-lg font-bold mb-2">
            {t("challengeTitle")}
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              style={{ marginLeft: 20, marginRight: 20 }}
              key={questions[currentIndex].question}
              className="bg-white p-4 rounded-lg shadow h-[180px] transition-all duration-300 ease-in-out"
              initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === "next" ? -300 : 300, opacity: 0 }}
            >
              <h2 className="text-md font-semibold mb-2">
                {questions[currentIndex].question}
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {questions[currentIndex].options.map((opt, idx) => {
                  const isCorrect = opt === questions[currentIndex].answer;
                  const isSelected = selectedOption === idx;

                  let bgColor = "white";

                  if (selectedOption !== null) {
                    if (isCorrect) {
                      bgColor = "rgba(0, 128, 0, 0.5)";
                    } else if (isSelected) {
                      bgColor = "rgba(255, 0, 0, 0.5)";
                    }
                  }

                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        if (selectedOption === null) handleSelectOption(idx);
                      }}
                      style={{ backgroundColor: bgColor }}
                      className={`p-2 border rounded text-center cursor-pointer transition ${
                        isSelected
                          ? "border-purple-600 text-white"
                          : "border-purple-300 hover:bg-purple-100"
                      }`}
                    >
                      {opt}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-[15px]">
            <button
              onClick={handlePrev}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              {t("previous")}
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900"
              disabled={currentIndex === questions.length - 1}
            >
              {t("next")}
            </button>
          </div>
        </>
      )}
    </div>
  );
};


export default GameCard;

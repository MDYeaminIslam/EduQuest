import React, { useState } from 'react';
import FAQItem from './FAQItem';
import { faqsQuestions } from './FAQItem_questions';

const Money_management = () => {
  const [monthlyBudget, setMonthlyBudget] = useState<number | null>(null);

  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numberValue = value === '' ? null : parseFloat(value);

    setMonthlyBudget(numberValue);
  };

  // Calculate budget breakdowns only when monthlyBudget is available
  const calculateBudgetBreakdown = () => {
    if (monthlyBudget === null) return null;

    const essentials = monthlyBudget * 0.5;
    const wants = monthlyBudget * 0.3;
    const savings = monthlyBudget * 0.2;

    return { essentials, wants, savings };
  };

  const budgetBreakdown = calculateBudgetBreakdown();

  return (
    <div className="container mx-auto p-4 overflow-scroll py-10 px-5 md:p-14 custom-scrollbar">
      <div className="mb-4">
        <label
          htmlFor="monthlyBudget"
          className="block text-green-300 font-bold mb-2 text-5xl text-center mt-4 p-4"
        >
          Enter your monthly budget in BDT
        </label>
        <input
          type="number"
          id="monthlyBudget"
          placeholder='Amount in BDT'
          value={monthlyBudget === null ? '' : monthlyBudget.toString()} // Convert number to string
          onChange={handleBudgetChange}
          className="shadow appearance-none border rounded w-full h-20 text-lg py-6 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {monthlyBudget && budgetBreakdown && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-green-400 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-4">
              <h3 className="text-2xl text-black font-bold mb-2">
                Essentials (50%)
              </h3>
              <p className="text-black">
                {budgetBreakdown.essentials.toFixed(2)} BDT <br />
                Covers rent, food, utilities, transportation, etc.
              </p>
            </div>
          </div>
          <div className="bg-green-400 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-4">
              <h3 className="text-2xl text-black font-bold mb-2">
                Wants (30%)
              </h3>
              <p className="text-black">
                {budgetBreakdown.wants.toFixed(2)} BDT <br />
                Includes dining out, entertainment, shopping, etc.
              </p>
            </div>
          </div>
          <div className="bg-green-400 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-4">
              <h3 className="text-2xl text-black font-bold mb-2">
                Savings (20%)
              </h3>
              <p className="text-black">
                {budgetBreakdown.savings.toFixed(2)} BDT <br />
                For future goals, emergencies, or investments.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 mt-10">
        <h2 className="text-4xl font-bold mb-4 text-green-300">FAQ :</h2>
        <div className="flex flex-1 flex-col sm:grid-cols-2 md:grid-cols-3 gap-4">
          {faqsQuestions.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Money_management;

// FAQItem.tsx
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-primary-300 rounded-lg shadow-md w-full p-4 mb-4 flex flex-col">
      <h3 className="text-lg font-bold text-black">{question}</h3>
      <div className="flex items-center justify-between mt-2">
        <button
          className="text-sm text-blue-700 hover:text-black font-medium"
          type="button"
          onClick={handleToggle}
        >
          {isOpen ? 'Hide Answer' : 'Show Answer'}
        </button>
      </div>
      {isOpen && (
        <div className="mt-2">
          <p className="text-base text-black">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;

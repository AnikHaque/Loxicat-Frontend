import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Q: What happens during Freshers' Week?",
      answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
    },
    {
      question: "Q: What is the transfer application process?",
      answer: "Information about the transfer application process goes here."
    },
    {
      question: "Q: What is the transfer application process?",
      answer: "Information about the transfer application process goes here."
    },
    {
      question: "Q: What is the transfer application process?",
      answer: "Information about the transfer application process goes here."
    },
    {
      question: "Q: What is the transfer application process?",
      answer: "Information about the transfer application process goes here."
    },
    {
      question: "Q: What is the transfer application process?",
      answer: "Information about the transfer application process goes here."
    },
    // Additional FAQs...
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setFocusedIndex(focusedIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-5">
      {faqs.map((faq, index) => {
        // Determine the styles based on states
        const isOpen = openIndex === index;
        const isFocused = focusedIndex === index;

        return (
          <div
            key={index}
            className={`mb-5 shadow transition-colors duration-300 ${
              isOpen ? 'bg-[#00A1E6] text-white' : isFocused ? 'bg-orange-200 text-orange-700' : 'bg-[#f1f1d4]'
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex items-center w-full p-4 text-left focus:outline-none ${
                isOpen ? 'text-white' : isFocused ? 'text-orange-700' : 'text-[#333]'
              }`}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
            >
              <span
                className={`flex-shrink-0 w-8 h-7 flex items-center justify-center mr-3 ${
                  isOpen ? 'bg-white text-orange-500' : 'bg-[#00A1E6] text-white'
                }`}
              >
                {isOpen ? '-' : '+'}
              </span>
              <span className="text-lg tracking-tighter font-semibold">{faq.question}</span>
            </button>
            {isOpen && (
              <div className="mt-2 p-4 bg-white text-gray-700 rounded-b-lg ">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQSection;
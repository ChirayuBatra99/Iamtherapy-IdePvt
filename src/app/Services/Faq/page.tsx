"use client";
import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";

interface InputProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: InputProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-gray-900'>
      <button
        className='flex justify-between w-full py-5 text-left text-black items-center'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-lg font-medium text-black'>{question}</span>
        <FaChevronDown
          className={`w-5 h-5 text-black transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
            } `}
        />
      </button>
     
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <div className='overflow-hidden'>
          <p className='text-base text-gray-900 pb-5 pr-12'>{answer}</p>
        </div>
      </div>
    </div>


  );
};

const Faq = () => {
  const faqs = [
    {
      question: "How can online therapy help me?",
      answer: "Online therapy provides convenient access to licensed professionals who can help you navigate challenges like stress, anxiety, depression, or relationship issues. It allows you to receive support from the comfort of your home, making it easier to fit therapy into your schedule."
    },
    {
      question: "Is my information safe on this platform?",
      answer: "Absolutely! Your privacy is our top priority. We use advanced encryption and secure technology to protect your personal data and ensure confidentiality during every session. All therapists on our platform adhere to strict ethical guidelines regarding client privacy."
    },
    {
      question: "Why should I choose Zen Path for therapy?",
      answer: "Our platform is built on a foundation of trust, transparency, and quality care. We offer personalized therapy sessions tailored to your needs, easy scheduling options, and affordable pricing. With glowing reviews from satisfied clients and a commitment to improving lives, we aim to be your reliable partner in mental wellness. These FAQs address common concerns users may have about mental health and online therapy while highlighting the security measures and professionalism of your platform as a trustworthy brand. You can adapt these further based on the specific features or values of your business!"
    },
    {
      question: "How qualified are the experts here?",
      answer: "We carefully vet every therapist on our platform to ensure they are licensed professionals with good experience in mental health care. Our team conducts thorough background checks and verifies credentials to provide you with trusted experts who can help you achieve your goals."
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className='bg-gradient-to-r from-indigo-300 to-emerald-300'>
    <div className="max-w-3xl mx-auto py-12  sm:px-6 lg:px-8 ">
      <h2 className="text-3xl font-extrabold text-black mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Faq;

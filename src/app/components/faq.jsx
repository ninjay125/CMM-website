"use client";
import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is CMM?",
      answer:
        "CMM stands for Creative Marketing & Networking, a platform dedicated to helping businesses grow through innovative marketing strategies."
    },
    {
      question: "How can I contact you?",
      answer: (
        <>
          You can reach us via email at{" "}
          <a
            href="mailto:info@cmmagency.com"
            className="text-red-500 hover:underline"
          >
            info@cmmagency.com
          </a>
          .
        </>
      )
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-2 cursor-pointer"
          >
            <h2
              className="text-xl font-semibold flex justify-between items-center"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span className="text-lg">
                {openIndex === index ? "−" : "+"}
              </span>
            </h2>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

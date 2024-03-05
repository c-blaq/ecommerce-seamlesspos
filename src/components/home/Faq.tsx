import React from "react";
import {
  Root,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { IoChevronDownCircleOutline } from "react-icons/io5";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const Faqs = () => {
  const FAQS: FAQ[] = [
    {
      id: 1,
      question: "How can I place an order?",
      answer:
        "You can place an order by clicking on the 'Buy Now' button or by adding the product to your cart and proceeding to checkout.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and bank transfers. You can choose your preferred payment method at checkout.",
    },
    {
      id: 3,
      question: "How long does shipping take?",
      answer:
        "Shipping times may vary depending on your location and the shipping method chosen. Generally, orders are processed and shipped within 3-5 business days.",
    },
    {
      id: 4,
      question: "Do I need to be logged in to make a purchase?",
      answer:
        "Yes, you need to be logged in to make a purchase.If you're not logged in already, click on the 'Login' button located at the top right corner of the page. This will log you in directly, and once logged in, you can proceed with your purchase.",
    },
  ];

  return (
    <Root
      className="md:rounded-md shadow-[0_2px_10px] shadow-black/5 bg-primary-dark text-textGray-100 max-w-2xl mx-auto py-8"
      type="single"
      collapsible
    >
      {FAQS.map(({ question, answer, id }) => (
        <AccordionItem
          key={id}
          value={id.toString()}
          className="mt-2 overflow-hidden text-sm md:text-base px-5 first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 "
        >
          <AccordionTrigger className="flex gap-4 !text-left justify-between items-center font-semibold w-full shadow-textGray-100 hover:scale-y-90 transition duration-200 group h-[45px] flex-1 shadow-[0_1px_0] outline-none">
            <span>{question}</span>
            <IoChevronDownCircleOutline className="shrink-0 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-200 group-data-[state=open]:rotate-180 text-xl" />
          </AccordionTrigger>
          <AccordionContent className="mt-1 font-medium data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Root>
  );
};

export default Faqs;

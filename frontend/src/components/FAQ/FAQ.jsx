import { useState } from "react";
import {motion} from "framer-motion"
const Faq = () => {
  const faqList = [
    {
      id: 1,
      question: "Authentification Issues",
      answer: "Porttitor nec est nisi, id nunc.",
      updated: "New",
    },
    {
      id: 2,
      question: "Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.",
      answer: "Porttitor nec est nisi, id nunc.",
      updated: "Updated last week",
    },
    {
      id: 3,
      question: "Cras vitae, scelerisque tortor augue.",
      answer: "Porttitor nec est nisi, id nunc.",
      updated: "Updated today",
    },
    {
      id: 4,
      question:
        "Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.",
      answer: "Porttitor nec est nisi, id nunc.",
      updated: "Updated 2 days ago",
    },
    {
      id: 5,
      question:
        "Pretium ultricies donec non mollis senectus lectus libero tellus.",
      answer: "Porttitor nec est nisi, id nunc.",
      updated: "Updated 3 days ago",
    },
    {
      id: 6,
      question: "Elit massa amet aenean ultrices vitae placerat augue.",
      answer: "Porttitor nec est nisi, id nunc.",
      updated: "Updated 4 days ago",
    },
  ];

  const [show, setShow] = useState(0);
  return (
    <section className="container py-8 sm:py-12 lg:py-16">
      <h4 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold">
        Frequently asked questions
      </h4>
      <p className="mx-auto mt-4 w-full lg:w-[60%] text-center text-stale">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s,{" "}
      </p>
      <div className="mt-16 transition-all duration-300">
        {faqList.map((list, index) => (
          <div 
          

            key={list.question}
            className="flex cursor-pointer justify-between border px-8 py-4 transition-all duration-300"
            onClick={() => setShow(index)}
          >
            <div>
              <p className="text-[18px] font-medium ">{list.question}</p>
              {show == index && (
                <p  className=  {`text-stale  `}  >
                  {list.answer}
                </p>
              )}
            </div>
            {list.updated =="New"? <p className="text-primary">New</p>:<p className="max-lg:hidden">{list.updated}</p> }
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;

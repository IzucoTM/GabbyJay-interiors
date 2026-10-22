import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./reveal";

function Faq() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const Faqs = [
    {
      id: 1,
      question: "How do I get a quote?",
      answer:
        "Start a WhatsApp conversation with a few photos of your windows, approximate measurements and your preferred style. We'll discuss your needs and confirm the details required for a tailored quote.",
    },
    {
      id: 2,
      question: "Can you help me choose the right fabric?",
      answer:
        "Absolutely. We'll help you explore fabrics, colours, textures and finishes that complement your interior, suit your preferences and meet your needs for light, privacy and comfort.",
    },
    {
      id: 3,
      question: "Do you measure and install the curtains?",
      answer:
        "Yes, we can guide you through the measurement process and discuss professional measurement and installation options for your space.",
    },
    {
      id: 4,
      question: "How long does the process take?",
      answer:
        "The timeline depends on your fabric selection, window measurements and the complexity of your order. We'll provide a clearer estimate once we understand your requirements.",
    },
  ];
  return (
    <section className="faq scroll-mt-[85px]" id="faq">
      <div className="container flex flex-col gap-[32px] p-[24px] pb-[64px] bg-[#EAE4DA]">
        {/* title */}
        <Reveal>
          <div className="flex flex-col gap-[20px]">
            <small className="text-[10px] text-[#6A5845] tracking-[0.022em]">
              A LITTLE GUIDANCE
            </small>
            <h2 className="text-[44px] text-[#302E29] leading-[1.04] tracking-[-0.014em]">
              Before we begin
            </h2>
            <p className="text-[14px] leading-[1.8] text-[#716B62]">
              Every window is different. Here are a few helpful place to start
            </p>
          </div>
        </Reveal>

        {/* faq */}
        <Reveal>
          <div>
            <hr className="border-[#D7CFC3]" />
            {Faqs.map((item) => (
              <div
                key={item.id}
                className="border-b border-solid border-[#D7CFC3]"
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left text-[#302E29]"
                  onClick={() =>
                    setActiveQuestion(
                      activeQuestion === item.id ? null : item.id,
                    )
                  }
                >
                  <h3>{item.question}</h3>
                  {activeQuestion === item.id ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </button>
                {activeQuestion === item.id && (
                  <p className="px-4 pb-4 text-[14px] leading-[1.8] text-[#716B62]">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export default Faq;

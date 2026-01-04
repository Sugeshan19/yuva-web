import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "What is YUVANXT?",
    answer:
      "YUVANXT is the name of our club’s membership drive. Derived from “Yuva,” meaning youth, and “NXT,” symbolizing the next generation and forward movement, it reflects our commitment to empowering young minds and shaping the future. YUVANXT represents a dynamic platform where individuals connect, collaborate, and grow together with a shared vision.",
  },
  {
    question: "What kinds of initiatives does YUVA do?",
    answer:
      "YUVA undertakes initiatives focused on community welfare, social awareness, and compassionate outreach, providing support and assistance to individuals and groups in need.",
  },
  {
    question: "How long does the YUVA membership remain valid?",
    answer:
      "The YUVA membership remains valid until 15 October 2026, covering the full duration of the current academic year.",
  },
  {
    question:
      "Can I give suggestions or ideas to the club even if I'm not a core member?",
    answer:
      "Yes. All members are welcome to share suggestions and ideas, take part in events, and actively contribute to the club’s activities, even if they are not part of the core team.",
  },
  {
    question:
      "How will the club communicate updates and announcements to me?",
    answer:
      "You will be added to the official club group, where all important updates, announcements, and event-related information are shared regularly.",
  },
  {
    question:
      "Will YUVA organize external events beyond campus activities?",
    answer:
      "Yes. Apart from campus-based programs, YUVA will organize and participate in external events, offering members broader exposure and opportunities beyond the institution.",
  },
  {
    question: "What is a Networking Session?",
    answer:
      "A networking session is an interactive event where members engage with peers, professionals, and mentors to exchange ideas, build meaningful connections, and explore opportunities for collaboration, learning, and career growth.",
  },
  {
    question:
      "Will YUVA Club conduct monthly idea exchange and networking sessions?",
    answer:
      "Yes. YUVA Club conducts monthly idea exchange and networking sessions, enabling members to share ideas, discuss innovations, build connections, and collaborate with like-minded individuals.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* FAQ CONTENT */}
      <div className="faq-page">
        <div className="faq-container">
          <h1 className="faq-title">Frequently Asked Questions</h1>

          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default FAQs;

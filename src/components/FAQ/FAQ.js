import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What destinations do you offer in Sri Lanka?",
      answer: "We offer comprehensive tours covering all major destinations in Sri Lanka including Kandy, Ella, Galle, Sigiriya, Anuradhapura, Polonnaruwa, Yala National Park, and many hidden gems. Our packages range from cultural heritage tours to wildlife safaris and beach holidays."
    },
    {
      id: 2,
      question: "How does sustainable tourism benefit the environment?",
      answer: "Sustainable tourism helps preserve Sri Lanka's natural beauty by minimizing environmental impact, supporting local conservation efforts, and promoting eco-friendly practices. We work with local communities to ensure tourism benefits both visitors and the environment."
    },
    {
      id: 3,
      question: "What tour packages does Milla offer?",
      answer: "Milla offers customized tour packages including cultural tours, adventure tours, wildlife safaris, beach holidays, wellness retreats, and romantic getaways. Each package can be tailored to your preferences, budget, and duration of stay."
    },
    {
      id: 4,
      question: "What support services do you offer during tours?",
      answer: "We provide 24/7 customer support, experienced local guides, comfortable transportation, emergency assistance, and personalized service throughout your journey. Our team is always available to ensure your trip runs smoothly."
    },
    {
      id: 5,
      question: "How do you ensure traveler safety?",
      answer: "We prioritize traveler safety through vetted accommodations, experienced guides, comprehensive insurance coverage, regular safety briefings, and 24/7 emergency support. All our partners meet strict safety and quality standards."
    }
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-title">FAQ</h2>
          <p className="faq-subtitle">Here you will find the answers to the frequently asked questions.</p>
        </div>
        
        <div className="faq-grid">
          <div className="faq-column">
            {faqData.slice(0, 3).map((item) => (
              <div key={item.id} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItem === item.id}
                >
                  <span>{item.question}</span>
                  <svg 
                    className={`faq-icon ${openItem === item.id ? 'open' : ''}`}
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      d="M12 5.69995V18.3" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M5.7002 12H18.3002" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openItem === item.id && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="faq-column">
            {faqData.slice(3).map((item) => (
              <div key={item.id} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItem === item.id}
                >
                  <span>{item.question}</span>
                  <svg 
                    className={`faq-icon ${openItem === item.id ? 'open' : ''}`}
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      d="M12 5.69995V18.3" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M5.7002 12H18.3002" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openItem === item.id && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="faq-contact">
          <div className="contact-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M5.67636 7.56182C3.79546 9.8603 2.66699 12.7984 2.66699 16.0001C2.66699 19.2018 3.7955 22.14 5.67645 24.4385L10.9204 19.1945C10.3376 18.2695 10.0003 17.1742 10.0003 16.0001C10.0003 14.826 10.3375 13.7308 10.9204 12.8058L5.67636 7.56182Z" fill="#022C22"/>
              <path d="M7.56197 5.67619L12.806 10.9202C13.7309 10.3373 14.8262 10.0001 16.0003 10.0001C17.1744 10.0001 18.2697 10.3373 19.1947 10.9202L24.4387 5.67621C22.1402 3.79526 19.202 2.66675 16.0003 2.66675C12.7986 2.66675 9.86047 3.79525 7.56197 5.67619Z" fill="#022C22"/>
              <path d="M26.3243 7.56184L21.0803 12.8058C21.6631 13.7308 22.0003 14.8261 22.0003 16.0001C22.0003 17.1742 21.6631 18.2695 21.0802 19.1944L26.3242 24.4384C28.2052 22.1399 29.3337 19.2018 29.3337 16.0001C29.3337 12.7984 28.2052 9.86032 26.3243 7.56184Z" fill="#022C22"/>
              <path d="M24.4386 26.324L19.1946 21.08C18.2696 21.6629 17.1744 22.0001 16.0003 22.0001C14.8263 22.0001 13.731 21.6629 12.8061 21.0801L7.56208 26.3241C9.86057 28.205 12.7987 29.3334 16.0003 29.3334C19.202 29.3334 22.1401 28.2049 24.4386 26.324Z" fill="#022C22"/>
            </svg>
          </div>
          <div className="contact-content">
            <h3 className="contact-title">Still have questions?</h3>
            <p className="contact-description">
              For assistance, please visit our <a href="#contact" className="contact-link">Contact Us</a> page or call our customer support hotline at <span className="phone-number">(+94) 77 123 4567</span>. Our dedicated team is ready to help you plan your perfect Sri Lankan adventure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

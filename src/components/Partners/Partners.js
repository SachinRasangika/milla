import React from "react";
import "./Partners.css";

const partners = [
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg", // fixed Tesla
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", // fixed Instagram
  "https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", // fixed Amazon
];

export default function Partners() {
  return (
    <section className="partners">
      <p>Global partners that trusted us</p>
      <div className="partner-logos">
        {partners.map((logo, i) => (
          <img key={i} src={logo} alt={`partner-${i}`} />
        ))}
      </div>
    </section>
  );
}

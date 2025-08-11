import React from "react";
import "./Partners.css";

const partners = [
  "https://placehold.co/120x40/2a2a2a/white?text=UNIQUE",
  "https://placehold.co/120x40/2a2a2a/white?text=WORLD",
  "https://placehold.co/120x40/2a2a2a/white?text=LIVE+LUXE",
  "https://placehold.co/120x40/2a2a2a/white?text=BIRD+FLIGHT",
  "https://placehold.co/120x40/2a2a2a/white?text=WORLD+TRAVEL",
  "https://placehold.co/120x40/2a2a2a/white?text=ARALIYA",
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

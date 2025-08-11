import React from "react";
import "./Destinations.css";

const destinations = [
  { title: "Elephants, leopards, and diverse ecosystems", img: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80", desc: null },
  { title: "Wildlife Parks", img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80", desc: null },
  { title: "Wildlife Parks", img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80", desc: null },
];

export default function Destinations() {
  return (
    <section className="destinations">
      <h2>Where Would You Like to Go?</h2>
      <p>Discover the most breathtaking locations Sri Lanka has to offer, each with its own unique charm.</p>
      <div className="dest-grid">
        {destinations.map((d, i) => (
          <div key={i} className="dest-card">
            <img src={d.img} alt={d.title} />
            <div className="dest-info">
              <h3>{d.title}</h3>
              {d.desc && <p>{d.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

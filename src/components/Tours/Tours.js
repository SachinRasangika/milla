import React from "react";
import "./Tours.css";

const tours = [
  { title: "Beach & Wildlife Adventure", duration: "10 days" },
  { title: "Beach & Wildlife Adventure", duration: "10 days" },
  { title: "Beach & Wildlife Adventure", duration: "10 days" },
  { title: "Beach & Wildlife Adventure", duration: "10 days" },
];

export default function Tours() {
  return (
    <section className="tours">
      <h2>TOURS OF OUR AGENCY</h2>
      <div className="tour-list">
        {tours.map((tour, i) => (
          <div key={i} className="tour-item">
            <h3 className="tour-title">{tour.title}</h3>
            <p className="tour-duration">{tour.duration}</p>
            <button className="view-btn">
              View Tour &rarr;
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

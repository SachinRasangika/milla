import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Destinations from "./components/Destinations/Destinations";
import Metrics from "./components/Metrics/Metrics";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Metrics />
      <Destinations />
      <Testimonials />
      <Partners />
      <Footer />
    </div>
  );
}

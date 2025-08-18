import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Destinations from "./components/Destinations/Destinations";
import Metrics from "./components/Metrics/Metrics";
import TourPlans from "./components/TourPlans/TourPlans";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import TourPlanner from "./components/TourPlanner/TourPlanner";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Destinations />
      <TourPlans />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Partners />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router basename="/milla">
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plan-trip" element={<><Navbar /><TourPlanner /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

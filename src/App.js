import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Destinations from "./components/Destinations/Destinations";
import Metrics from "./components/Metrics/Metrics";
import TourPlans from "./components/TourPlans/TourPlans";
import Gallery from "./components/Gallery/Gallery";
import CulturalExperiences from "./components/CulturalExperiences/CulturalExperiences";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import TourPlanner from "./components/TourPlanner/TourPlanner";
import TravelHelpHub from "./components/TravelHelpHub/TravelHelpHub";
import Packages from "./components/Packages/Packages";
import PackageDetail from "./components/PackageDetail/PackageDetail";
// Partners section removed
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Metrics />
      <Destinations />
      {/* Partners section removed */}
      <TourPlans />
      <Gallery />
      <CulturalExperiences />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);
  return null;
}

export default function App() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/milla' : '/'}>
      <ScrollToHash />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plan-trip" element={<><Navbar /><TourPlanner /><Footer /></>} />
          <Route path="/help-hub" element={<TravelHelpHub />} />
          <Route path="/packages" element={<><Navbar /><Packages /><Footer /></>} />
          <Route path="/packages/:id" element={<><Navbar /><PackageDetail /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Destinations from "./components/Destinations/Destinations";
import Tours from "./components/Tours/Tours";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Partners />
      <Destinations />
      <Tours />
    </div>
  );
}

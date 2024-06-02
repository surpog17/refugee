import React from "react";
import Navbar from "../../components/Landing/Navbar";
import Hero from "../../components/Landing/Hero";
import Features from "../../components/Landing/Features";
import Action from "../../components/Landing/Action";
import Support from "../../components/Landing/Support";
import Donation from "../../components/Landing/Donation";
import Footer from "../../components/Landing/Footer";

export default function Landing() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Action />
      <Support />
      <Donation />
      <Footer />
    </div>
  );
}

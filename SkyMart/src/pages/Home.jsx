import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import CategorySection from "../components/home/CategorySection";
import Features from "../components/home/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <CategorySection />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;

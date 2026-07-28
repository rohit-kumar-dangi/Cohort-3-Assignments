import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import CategorySection from "../components/home/CategorySection";
import TopRated from "../components/home/TopRated";
import NewArrivals from "../components/home/NewArrivals";
import Features from "../components/home/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <CategorySection />
      {/* Product Lists */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TopRated />
          <NewArrivals />
        </div>
      </section>
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
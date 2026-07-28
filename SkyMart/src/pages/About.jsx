import Navbar from "../components/Navbar";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import Story from "../components/about/Story";
import Values from "../components/about/Values";
import Team from "../components/about/Team";
import Footer from "../components/Footer";
import { NavLink } from "react-router";
import { ArrowRight } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">

      <Navbar />

      <main className="max-w-5xl mx-auto px-6">

        <AboutHero />

        <AboutStats />

        <Story />

        <Values />

        <Team />

        <section className="border border-lime-400/20 rounded-3xl py-20 text-center mb-24">

          <h2 className="text-5xl font-bold">
            Ready to shop?
          </h2>

          <p className="text-zinc-400 mt-6 text-lg">
            Explore thousands of premium products at unbeatable prices.
          </p>

          <NavLink
            to={"/shop"}
            className="mt-10 px-10 py-4 rounded-2xl bg-lime-400 text-black font-semibold text-xl hover:bg-lime-300 transition inline-flex items-center gap-3"
          >
            Browse Products
            <ArrowRight size={22}/>
          </NavLink>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default About;
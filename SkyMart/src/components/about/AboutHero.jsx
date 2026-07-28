import { Zap } from "lucide-react";

function AboutHero() {
  return (
    <section className="py-20 text-center">

      <div className="mx-auto w-24 h-24 rounded-3xl bg-lime-400 flex items-center justify-center mb-10">
        <Zap size={45} className="text-black" fill="currentColor" />
      </div>

      <h1 className="text-6xl font-bold">
        About <span className="text-lime-400">SkyMart</span>
      </h1>

      <p className="text-zinc-400 text-xl max-w-3xl mx-auto mt-8 leading-9">
        SkyMart is a next-generation e-commerce platform built to make online
        shopping fast, fair and enjoyable for everyone.
      </p>

    </section>
  );
}

export default AboutHero;
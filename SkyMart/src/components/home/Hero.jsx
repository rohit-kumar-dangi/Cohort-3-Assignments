import React from "react";
import { ArrowRight, Hand, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";

function Hero() {
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="border border-zinc-700 rounded-3xl bg-[#121212] p-8 lg:p-12">

        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-center">

          {/* Left Side */}
          <div>

            <p className="flex items-center gap-2 uppercase tracking-[4px] text-lime-400 font-semibold text-sm">
              Good Evening
              <Hand size={18} />
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
              Welcome back,
              <br />
              <span className="text-lime-400">{user.name}!</span>
            </h1>

            <p className="mt-6 max-w-xl text-zinc-400 text-lg leading-8">
              Discover today's picks — hand-curated products across
              electronics, fashion, accessories and much more.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button 
                className="flex items-center gap-3 bg-lime-400 text-black font-semibold px-7 py-4 rounded-xl hover:bg-lime-300 transition"
                onClick={()=> navigate("/shop")}
              >
                Shop Now
                <ArrowRight size={20} />
              </button>

              <button 
                className="border border-zinc-700 text-white px-7 py-4 rounded-xl hover:bg-zinc-800 transition"
                onClick={()=> navigate("/shop")}
              >
                View All Products
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-5">

            {/* Products Card */}
            <div className="rounded-3xl bg-lime-400/10 border border-lime-400/20 p-8 text-center">

              <h2 className="text-5xl font-bold text-lime-400">
                20+
              </h2>

              <p className="mt-3 text-zinc-300">
                Products Available
              </p>

            </div>

            {/* Delivery Card */}
            <div className="rounded-3xl border border-zinc-600 p-8 text-center">

              <h2 className="text-4xl font-bold">
                Free
              </h2>

              <p className="mt-3 text-zinc-400">
                Delivery on ₹999+
              </p>

              <ShoppingBag
                className="mx-auto mt-5 text-lime-400"
                size={28}
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

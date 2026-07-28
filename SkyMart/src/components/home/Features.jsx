import React from "react";
import {
  Truck,
  ShieldCheck,
  BadgeDollarSign,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Truck size={36} />,
      title: "Fast Delivery",
      description:
        "Get your orders delivered quickly with our trusted delivery partners.",
      bg: "bg-lime-400/10",
      color: "text-lime-400",
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Secure Payments",
      description:
        "Safe and encrypted payment methods to keep your transactions secure.",
      bg: "bg-blue-500/10",
      color: "text-blue-400",
    },
    {
      icon: <BadgeDollarSign size={36} />,
      title: "Best Prices",
      description:
        "Shop premium products at competitive prices with exclusive offers.",
      bg: "bg-yellow-500/10",
      color: "text-yellow-400",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Why Shop With Us?
        </h2>

        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          We make online shopping simple, secure, and enjoyable with
          premium service and unbeatable prices.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((feature, index) => (
          <div
            key={index}
            className="
              bg-[#181818]
              border
              border-zinc-700
              rounded-3xl
              p-8
              hover:border-lime-400
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            {/* Icon */}
            <div
              className={`h-16 w-16 rounded-2xl ${feature.bg} flex items-center justify-center ${feature.color}`}
            >
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="mt-6 text-2xl font-bold text-white">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-zinc-400 leading-7">
              {feature.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;
import React, { useContext } from "react";
import { Package, TrendingUp, Star, Tag, } from "lucide-react";
import { MyStore } from "../../context/MyContext";

function Stats() {
  const { cartItems } = useContext(MyStore);
  let cartValue = 0;
  cartItems.map((elem)=>{
    cartValue += elem.price * elem.quantity;
  })
  const stats = [
    {
      icon: <Package size={26} />,
      title: cartItems.length,
      subtitle: "Cart Items",
      desc: "In your bag",
      bg: "bg-lime-400/10",
      color: "text-lime-400",
    },
    {
      icon: <TrendingUp size={26} />,
      title: ("$",cartValue.toFixed(2)),
      subtitle: "Cart Value",
      desc: "Ready to checkout",
      bg: "bg-blue-500/10",
      color: "text-blue-400",
    },
    {
      icon: <Star size={26} />,
      title: "5",
      subtitle: "Top Products",
      desc: "Highly rated",
      bg: "bg-yellow-500/10",
      color: "text-yellow-400",
    },
    {
      icon: <Tag size={26} />,
      title: "6",
      subtitle: "Categories",
      desc: "To explore",
      bg: "bg-purple-500/10",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#121212] border border-zinc-700 rounded-3xl p-6 flex items-center gap-5 hover:border-lime-400 transition duration-300"
          >
            {/* Icon */}
            <div
              className={`h-16 w-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color}`}
            >
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl font-bold text-white">
                {item.title}
              </h2>

              <p className="text-lg text-white">
                {item.subtitle}
              </p>

              <p className="text-sm text-zinc-500">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
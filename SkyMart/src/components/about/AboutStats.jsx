import {
  Package,
  Users,
  Star,
  Truck,
} from "lucide-react";

function AboutStats() {

  const stats = [
    {
      icon: <Package size={28}/>,
      value: "20K+",
      label: "Products",
    },
    {
      icon: <Users size={28}/>,
      value: "50K+",
      label: "Happy Customers",
    },
    {
      icon: <Star size={28}/>,
      value: "4.9",
      label: "Avg. Rating",
    },
    {
      icon: <Truck size={28}/>,
      value: "99%",
      label: "On-time Delivery",
    },
  ];

  return (
    <section className="grid md:grid-cols-4 gap-6 mb-24">

      {stats.map((item,index)=>(
        <div
          key={index}
          className="border border-zinc-700 rounded-3xl py-10 text-center"
        >

          <div className="text-lime-400 flex justify-center">
            {item.icon}
          </div>

          <h2 className="text-4xl font-bold mt-5">
            {item.value}
          </h2>

          <p className="text-zinc-400 mt-2">
            {item.label}
          </p>

        </div>
      ))}

    </section>
  );
}

export default AboutStats;
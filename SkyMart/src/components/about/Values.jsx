import {
  ShieldCheck,
  Truck,
  HeartHandshake,
  Star,
} from "lucide-react";

function Values() {

  const values = [
    {
      title:"Trust",
      desc:"Every product is verified before listing.",
      icon:<ShieldCheck/>
    },
    {
      title:"Speed",
      desc:"Fast delivery you can rely on.",
      icon:<Truck/>
    },
    {
      title:"Community",
      desc:"Customer feedback drives everything.",
      icon:<HeartHandshake/>
    },
    {
      title:"Quality",
      desc:"Only products worth buying.",
      icon:<Star/>
    },
  ];

  return(
    <section className="mb-24">

      <h2 className="text-5xl font-bold text-center mb-16">
        What We Stand For
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {values.map((item,index)=>(

          <div
            key={index}
            className="border border-zinc-700 rounded-3xl p-8 flex gap-6"
          >

            <div className="w-16 h-16 rounded-2xl bg-lime-400/10 text-lime-400 flex items-center justify-center">
              {item.icon}
            </div>

            <div>

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-zinc-400 mt-3">
                {item.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Values;
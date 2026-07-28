function Team() {

  const team = [
    ["A","Aryan Shah","Founder & CEO"],
    ["P","Priya Mehta","Head of Product"],
    ["R","Rohan Verma","Lead Engineer"],
    ["S","Sneha Kapoor","Design Director"],
  ];

  return(
    <section className="mb-24">

      <h2 className="text-5xl font-bold text-center mb-16">
        Meet the Team
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {team.map((member,index)=>(

          <div
            key={index}
            className="border border-zinc-700 rounded-3xl p-10 text-center"
          >

            <div className="w-20 h-20 rounded-3xl bg-lime-400 text-black font-bold text-4xl flex items-center justify-center mx-auto">
              {member[0]}
            </div>

            <h3 className="text-2xl font-semibold mt-8">
              {member[1]}
            </h3>

            <p className="text-zinc-400 mt-2">
              {member[2]}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Team;
import { Zap } from "lucide-react";

function RegisterLogo() {
  return (
    <div className="flex items-center gap-3 mb-10">

      <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center">

        <Zap
          size={22}
          className="text-black"
          fill="currentColor"
        />

      </div>

      <h1 className="text-4xl font-bold text-white">
        Sky<span className="text-lime-400">Mart</span>
      </h1>

    </div>
  );
}

export default RegisterLogo;
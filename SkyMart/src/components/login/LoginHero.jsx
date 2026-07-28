import { Zap } from "lucide-react";
import LoginStats from "./LoginStats";

function LoginHero() {
  return (
    <div className="hidden lg:flex flex-col justify-between p-14 border-r border-zinc-800 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -left-32 top-40 w-96 h-96 rounded-full bg-lime-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 w-72 h-72 rounded-full bg-lime-500/5 blur-[100px]" />

      <div className="relative z-10">

        {/* Logo */}

        <div className="flex items-center gap-3 mb-24">

          <div className="w-11 h-11 rounded-xl bg-lime-400 flex items-center justify-center">

            <Zap
              size={22}
              className="text-black"
              fill="currentColor"
            />

          </div>

          <h1 className="text-4xl font-bold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>

        </div>

        <p className="uppercase tracking-[4px] text-lime-400 text-sm mb-6">
          Welcome Back
        </p>

        <h2 className="text-7xl font-bold leading-tight">
          Shop the future.
          <br />
          <span className="text-lime-400">
            Today.
          </span>
        </h2>

        <p className="text-zinc-400 mt-8 text-xl leading-9 max-w-xl">
          Thousands of products, lightning-fast delivery,
          and prices that make your wallet happy.
        </p>

      </div>

      <LoginStats />

    </div>
  );
}

export default LoginHero;
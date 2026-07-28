function LoginStats() {
  return (
    <div className="grid grid-cols-3 gap-5 relative z-10">

      <div className="border border-zinc-700 rounded-3xl p-8 text-center">

        <h3 className="text-5xl font-bold text-lime-400">
          20K+
        </h3>

        <p className="text-zinc-500 mt-3">
          Products
        </p>

      </div>

      <div className="border border-zinc-700 rounded-3xl p-8 text-center">

        <h3 className="text-5xl font-bold text-lime-400">
          50K+
        </h3>

        <p className="text-zinc-500 mt-3">
          Users
        </p>

      </div>

      <div className="border border-zinc-700 rounded-3xl p-8 text-center">

        <h3 className="text-5xl font-bold text-lime-400">
          4.9★
        </h3>

        <p className="text-zinc-500 mt-3">
          Rating
        </p>

      </div>

    </div>
  );
}

export default LoginStats;
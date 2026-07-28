import React from "react";
import { ListTodo, CheckCircle2, Clock3, } from "lucide-react";
import { useSelector } from "react-redux";

const Stats = () => {

    const {todos} = useSelector((state)=> state.todo)
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const pending = total - completed;

    const theme = useSelector((state) => state.todo.theme);
    const dark = theme === "dark";

  return (
    <section className="grid gap-5 md:grid-cols-3">

        <div className={`rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-md transition-all hover:scale-[1.02] ${
            dark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
        }`}>
            <div className="flex items-center justify-between">
                <div>
                <p className={`text-sm ${dark ? "text-slate-400" : "text-slate-900"}`}>Total Tasks</p>

                <h2 className="mt-2 text-3xl font-bold text-indigo-500">
                    {total}
                </h2>
                </div>

                <div className={`rounded-xl ${dark ? "bg-slate-800" : "bg-slate-300"} p-3`}>
                <ListTodo className="text-indigo-500" size={28} />
                </div>
            </div>
        </div>

        <div className={`rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-md transition-all hover:scale-[1.02] ${
            dark
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-slate-200"
        }`}>
            <div className="flex items-center justify-between">
                <div>
                <p className={`text-sm ${dark ? "text-slate-400" : "text-slate-900"}`}>Completed</p>

                <h2 className="mt-2 text-3xl font-bold text-green-500">
                    {completed}
                </h2>
                </div>

                <div className={`rounded-xl ${dark ? "bg-slate-800" : "bg-slate-300"} p-3`}>
                <CheckCircle2 className="text-green-500" size={28} />
                </div>
            </div>
        </div>

        <div className={`rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-md transition-all hover:scale-[1.02] ${
            dark
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-slate-200"
        }`}>
            <div className="flex items-center justify-between">
                <div>
                <p className={`text-sm ${dark ? "text-slate-400" : "text-slate-900"}`}>Pending</p>

                <h2 className="mt-2 text-3xl font-bold text-yellow-400">
                    {pending}
                </h2>
                </div>

                <div className={`rounded-xl ${dark ? "bg-slate-800" : "bg-slate-300"} p-3`}>
                <Clock3 className="text-yellow-400" size={28} />
                </div>
            </div>
        </div>

    </section>
  );
};

export default Stats;

import React from "react";
import StatCard from "./StatCard";

import {
  ListTodo,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const Stats = ({ todos }) => {
  const total = todos.length;

  const completed = todos.filter((todo) => todo.completed).length;

  const pending = total - completed;

  return (
    <section className="grid gap-5 md:grid-cols-3">

      <StatCard
        title="Total Tasks"
        value={total}
        icon={ListTodo}
        color="text-indigo-500"
      />

      <StatCard
        title="Completed"
        value={completed}
        icon={CheckCircle2}
        color="text-green-500"
      />

      <StatCard
        title="Pending"
        value={pending}
        icon={Clock3}
        color="text-yellow-400"
      />

    </section>
  );
};

export default Stats;

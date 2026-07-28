import React from 'react'
import { Pencil, Trash2, RotateCcw, CheckCircle2 } from 'lucide-react'

function TodoCardTemp() {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-md">

      <div className="flex items-center justify-between">

        <div>

          <h2
            className="text-lg font-semibold line-through text-slate-500"
          >
            Hii
          </h2>

          <p
            className="mt-2 text-sm text-green-400"
          >
            Complete
          </p>

        </div>

        <div className="flex gap-3">

          <button
            className="rounded-lg bg-yellow-500 p-2 text-white hover:bg-yellow-600"
          >
            <Pencil size={18} />
          </button>

          <button
            className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
          >
            <Trash2 size={18} />
          </button>

          <button
            className="rounded-lg p-2 text-white bg-blue-500 hover:bg-blue-600"
          >
            <CheckCircle2 size={18} />
          </button>

        </div>

      </div>

    </div>
  )
}

export default TodoCardTemp
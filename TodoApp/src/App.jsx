import Navbar from './Components/Navbar'
import Stats from './Components/Stats'
import { useState } from 'react'
import FilterTabs from './Components/FilterTabs'
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'
import { useSelector } from 'react-redux'

function App() {
  const [toggleForm, setToggleForm] = useState(false)
  const [editingTodo, setEditingTodo] = useState(null)
  const theme = useSelector((state) => state.todo.theme)

  const openForm = (todo = null) => {
    setEditingTodo(todo)
    setToggleForm(true);
  }
  const closeForm = () => {
    setToggleForm(false);
    setEditingTodo(null)
  }
  
  return (
    <div className={`min-h-screen flex flex-col transition-colors ${theme === "dark" ? "bg-slate-950" : "bg-slate-100"}`}>

      <Navbar onAddTask={openForm}/>

      <main className="flex-1 pt-24">
        <div className="mx-auto w-full max-w-7xl px-6 py-6 flex flex-col gap-5">
          <Stats />
          <FilterTabs />
          <TodoList openForm={openForm}/>
        </div>
      </main>

      <TodoForm open={toggleForm} onClose={closeForm} editingTodo={editingTodo}/>

    </div>
  )
}

export default App

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import AddTaskButton from "./AddTaskButton";

const Navbar = ({ onAddTask }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-700 bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">

        <Logo />

        <SearchBar />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <AddTaskButton onClick={onAddTask} />
        </div>

      </div>
    </header>
  );
};

export default Navbar;

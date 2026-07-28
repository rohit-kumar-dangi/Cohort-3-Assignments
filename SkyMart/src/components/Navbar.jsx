import React from "react";
import { ShoppingCart, LogOut, Zap, } from "lucide-react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useContext } from "react";
import { MyStore } from "../context/MyContext.jsx";

function Navbar() {
  let navigate = useNavigate();
  const { setIsCartOpen } = useContext(MyStore);
  let user = JSON.parse(localStorage.getItem("user"));

  const logoutUser = ()=>{
    localStorage.removeItem("user");
    navigate("/login");
    toast.success("Logout successfully");
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#121212] border-b border-zinc-700">
      <div className="max-w-7xl mx-auto h-15 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="h-7 w-7 rounded-lg bg-lime-400 flex items-center justify-center">
            <Zap size={16} className="text-black fill-black" />
          </div>

          <h1 className="text-xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10 text-zinc-400 font-medium">
        
          <NavLink 
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 hover:text-lime-300 transition"
                : "text-zinc-400 hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink 
            to={"/shop"}
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 hover:text-lime-300 transition"
                : "text-zinc-400 hover:text-white transition"
            }
          >
            Shop
          </NavLink>

          <NavLink 
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 hover:text-lime-300 transition"
                : "text-zinc-400 hover:text-white transition"
            }
          >
            About
          </NavLink>
          
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* User */}
          <div className="flex items-center gap-3 border border-zinc-700 rounded-xl px-3 py-2">

            <div className="h-6 w-6 rounded-lg bg-lime-400 text-black font-bold flex items-center justify-center">
              {user.name.slice(0,1)}
            </div>

            <p className=" text-white hidden sm:block">
              {user.name}
            </p>

          </div>

          {/* Cart */}
          <button 
            className="h-12 w-12 rounded-xl border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="text-white" size={20} />
          </button>

          {/* Logout */}
          <button 
            className="h-12 w-12 rounded-xl border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition"
            onClick={logoutUser}
          >
            <LogOut className="text-white" size={20} />
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
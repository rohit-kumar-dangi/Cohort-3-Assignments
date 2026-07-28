import { User, Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { toast } from 'react-toastify';

function RegisterForm() {
  let {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordC: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = ()=>{
    setShowPassword((pre) => !pre)
  }

  const password = watch("password", "");
  const registerUser = (data) => {
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser")) || [];
    const checkUser = registeredUser.find((u)=> u.email === data.email);
    if (checkUser){
      toast.error("User already existed");
    }
    else{
      let userDetail = {
        name:data.name,
        email:data.email,
        password:data.password,
      };
      registeredUser.push(userDetail);
      let stringData = JSON.stringify(registeredUser);
      localStorage.setItem("registeredUser", stringData);
      toast.success("Registered successfully");
    }

    reset();
  };

  return (
    <div className="w-full max-w-xl bg-[#171717] border border-zinc-800 rounded-[32px] p-10 shadow-2xl">
      <h2 className="text-5xl font-bold text-white">Create account</h2>

      <p className="text-zinc-500 mt-2 mb-10">
        Join SkyMart and start shopping
      </p>

      <form onSubmit={handleSubmit(registerUser)}>
        {/* Name */}

        <div className="relative mb-5">
          <User
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Full name"
            className="w-full h-16 rounded-2xl bg-[#222] border border-zinc-700 pl-14 pr-5 outline-none focus:border-lime-400 text-white"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        {/* Email */}

        <div className="relative mb-5">
          <Mail
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            className="w-full h-16 rounded-2xl bg-[#222] border border-zinc-700 pl-14 pr-14 outline-none focus:border-lime-400 text-gray-200"
            placeholder="Email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        {/* Password */}

        <div className="relative mb-5">
          <Lock
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            className="w-full h-16 rounded-2xl bg-[#222] border border-zinc-700 pl-14 pr-14 outline-none focus:border-lime-400 text-gray-200"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters, include uppercase, lowercase, number, and special character",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}

          <Eye
            size={18}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer"
            onClick={togglePassword}
          />
        </div>

        {/* Confirm Password */}

        <div className="relative mb-8">
          <Lock
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            className="w-full h-16 rounded-2xl bg-[#222] border border-zinc-700 pl-14 pr-14 outline-none focus:border-lime-400 text-gray-200"
            placeholder="Confirm password"
            type={showPassword ? "text" : "password"}
            {...register("passwordC", {
              required: "Confirm password is required",
              validate: (value) => value === password || "Password not match",
            })}
          />
          {errors.passwordC && (
            <p className="text-red-500"> {errors.passwordC.message} </p>
          )}
        </div>

        {/* Button */}

        <button className="w-full h-16 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xl flex items-center justify-center gap-3 transition">
          Create Account
          <ArrowRight size={22} />
        </button>
      </form>

      <p className="text-center text-zinc-500 mt-8">
        Already have an account?
        <span className="ml-2 text-lime-400 font-semibold cursor-pointer">
            <NavLink to={"/login"}> Sign in </NavLink>
          </span>
      </p>
    </div>
  );
}

export default RegisterForm;

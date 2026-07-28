import { Mail, Lock, Eye, ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router';

function LoginForm() {
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = ()=>{
    setShowPassword((pre) => !pre)
  }

  const loginUser = (data) => {
    let currentEmail = data.email;
    let currentPassword = data.password;
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser")) || [];
    const matchUser = registeredUser.find((u) => u.email === currentEmail && u.password === currentPassword );

    if (matchUser){
      toast.success("Login successfully");
      let userDetail = {
        name: matchUser.name,
        email: matchUser.email,
      }
      let stringUser = JSON.stringify(userDetail);
      localStorage.setItem("user",stringUser);
      navigate("/");
    }
    else{
      toast.error("Invalid Credentials");
    }

    console.log(data.email, data.password);
    
    reset();
  };


  return (
    <div className="flex items-center justify-center p-10">
      <div className="w-full max-w-lg bg-[#171717] border border-zinc-800 rounded-[32px] p-10 shadow-2xl">
        <h2 className="text-5xl font-bold mb-3">
          Sign in
        </h2>
        <p className="text-zinc-500 mb-10">
          Enter your credentials to continue
        </p>
        <form onSubmit={handleSubmit(loginUser)}>
            {/* Email */}
          <div className="relative mb-5">
            <Mail
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />
            <input
              className="w-full h-16 rounded-2xl bg-[#222] border border-zinc-700 pl-14 pr-14 outline-none focus:border-lime-400"
              placeholder='Email'
            {...register("email",{
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address"}
            })}/>
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative mb-8">
            <Lock
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />
            <input
              className="w-full h-16 rounded-2xl bg-[#222] border border-zinc-700 pl-14 pr-14 outline-none focus:border-lime-400"
              placeholder='Password'
              type={showPassword ? "text" : "password"}
            {...register("password",{
              required: "Password is required"
            })}/>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
            <Eye
              size={18}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer"
              onClick={toggleShowPassword}
            />
          </div>

          <button 
            className="w-full h-16 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xl flex items-center justify-center gap-3 transition"
          >
            Sign in
            <ArrowRight size={22} />
          </button>

        </form>
        <p className="text-center text-zinc-500 mt-8">
          Don't have an account?
          <span className="ml-2 text-lime-400 font-semibold cursor-pointer">
            <NavLink to={"/register"}>Create one</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
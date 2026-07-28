import LoginHero from "../components/login/LoginHero";
import LoginForm from "../components/login/LoginForm";

function Login() {
  return (
    <div className="min-h-screen bg-[#111111] text-white grid lg:grid-cols-2">
      <LoginHero />
      <LoginForm />
    </div>
  );
}

export default Login;
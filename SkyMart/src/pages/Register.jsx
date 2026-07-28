import RegisterLogo from "../components/register/RegisterLogo";
import RegisterForm from "../components/register/RegisterForm";

function Register() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center px-5">

      <RegisterLogo />

      <RegisterForm />

    </div>
  );
}

export default Register;
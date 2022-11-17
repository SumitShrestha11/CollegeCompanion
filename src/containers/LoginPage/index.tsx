import LoginForm from "./components/LoginForm";
import LoginIllustration from "./components/LoginIllustration";

const Login = () => {
  return (
    <div className="grid grid-cols-12 gap-3 h-screen ">
      <div className="lg:col-span-8 hidden lg:flex items-center justify-center">
        <LoginIllustration />
      </div>

      <div className="lg:col-span-4 col-span-12 flex items-center ">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

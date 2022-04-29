import LoginForm from "./components/LoginForm";
import LoginIllustration from "./components/LoginIllustration";

const Login = () => {
  return (
    <div className="grid grid-cols-12 gap-3 h-screen ">
      <div className="col-span-8 flex items-center ">
        <LoginIllustration />
      </div>

      <div className="col-span-4 flex items-center ">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

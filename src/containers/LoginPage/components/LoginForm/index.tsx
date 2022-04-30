import React, { useState } from "react";
import { IUserLogin } from "../../../../interfaces/user";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [loginData, setLoginData] = useState<IUserLogin>({
    userId: "",
    password: "",
    keepLoggedIn: false,
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);

    // const dispatch = useDispatch();
  };

  return (
    <div className="w-full lg:pr-16 px-4">
      <h1 className="text-4xl font-semibold text-center pb-16">Log In</h1>

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        {/* UserID input area */}
        <div className="w-full px-4">
          <label>
            <p className="text-paragraph text-lg pb-1 pl-1">UserId</p>
          </label>
          <input
            className="w-full bg-background-secondary h-10 rounded-sm pl-2 border-0 hover:bg-opacity-70 focus:outline-main focus:ring-0"
            type="text"
            name="userId"
            placeholder="Enter UserID"
            required
            onChange={(e) =>
              setLoginData({ ...loginData, userId: e.target.value })
            }
          />
        </div>

        {/* Password input area */}
        <div className="w-full px-4 pt-6 relative">
          <label>
            <p className="text-paragraph text-lg pb-1 pl-1">Password</p>
          </label>

          <input
            className="w-full bg-background-secondary h-10 rounded-sm pl-2 border-0 hover:bg-opacity-70 focus:outline-main focus:ring-0"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            required
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <span
            className="z-20 absolute text-paragraph text-2xl py-2 right-7 cursor-pointer"
            onClick={(e) => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </div>

        <div className="w-full px-4 pt-6 flex form-check">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="w-5 h-5 rounded-md border-0 focus:ring-0 text-primary bg-background-secondary hover:bg-opacity-70 cursor-pointer"
              onClick={(e) => {
                setLoginData({
                  ...loginData,
                  keepLoggedIn: !loginData.keepLoggedIn,
                });
              }}
            />
            <span className="ml-2 text-paragraph">Keep me logged in</span>
          </label>
        </div>

        <div className="w-full px-4 pt-16 grid justify-items-center">
          <button
            className="bg-primary rounded-md py-2 px-10 text-2xl font-semibold font-sans"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

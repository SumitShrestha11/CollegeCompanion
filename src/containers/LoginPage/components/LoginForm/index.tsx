const LoginForm = () => {
  return (
    <div className="w-full pr-16">
      <h1 className="text-4xl font-semibold text-center pb-16">Log In</h1>
      <form>
        <div className="w-full px-4">
          <label>
            <p className="text-paragraph text-lg pb-1 pl-1">UserId</p>
          </label>
          <input
            className="w-full bg-background-secondary h-10 rounded-sm pl-2 border-0 hover:bg-opacity-70 focus:outline-main focus:ring-0"
            type="text"
            name="userId"
            placeholder="Enter UserID"
          />
        </div>

        <div className="w-full px-4 pt-6">
          <label>
            <p className="text-paragraph text-lg pb-1 pl-1">Password</p>
          </label>
          <input
            className="w-full bg-background-secondary h-10 rounded-sm pl-2 border-0 hover:bg-opacity-70 focus:outline-main focus:ring-0"
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </div>

        <div className="w-full px-4 pt-6 flex form-check">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="w-5 h-5 rounded-md border-0 focus:ring-0 text-primary bg-background-secondary hover:bg-opacity-70 cursor-pointer"
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

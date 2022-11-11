import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    //Redirect
    return <Navigate replace to="/login" />;
  }
  return <div>HomePage</div>;
};

export default HomePage;

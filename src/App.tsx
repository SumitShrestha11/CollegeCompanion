import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./containers/LoginPage";
import "./App.scss";
import HomePage from "./containers/HomePage";

function App() {
  // const { userId } = useSelector((state: any) => state.auth);
  // console.log(userId);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

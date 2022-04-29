import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./containers/LoginPage";
import "./App.scss";

function App() {
  // const { userId } = useSelector((state: any) => state.auth);
  // console.log(userId);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

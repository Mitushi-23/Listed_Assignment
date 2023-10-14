import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./screens/Dashboard";
import SignIn from "./screens/SignIn";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<SignIn />} />
          <Route path="/home" exact element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

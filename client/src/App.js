import { Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Foods from "./components/Foods";
import Help from "./components/Help";
import Blog from "./components/Blog";
import Register from "./components/Register";

function App() {
  return (
    <Routes>
      <Route path="foods" element={<Foods />} />
      <Route path="blog" element={<Blog />} />
      <Route path="help" element={<Help />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

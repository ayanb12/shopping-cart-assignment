import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./common/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;

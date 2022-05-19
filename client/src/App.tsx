import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./common/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;

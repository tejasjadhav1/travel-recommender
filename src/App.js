import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

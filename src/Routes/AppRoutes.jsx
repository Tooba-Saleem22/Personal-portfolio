// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";

// Pages import
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Services from "../Pages/Services";
import About from "../Pages/About";
import TheDesignSpark from "../Pages/TheDesignSpark"; // correct import

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/thedesignspark" element={<TheDesignSpark />} />{" "}
      {/* use correct component */}
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;

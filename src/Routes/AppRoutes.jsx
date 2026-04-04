import { Routes, Route } from "react-router-dom";

// Pages import
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Services from "../Pages/Services";
import About from "../Pages/About";
import TheDesignSpark from "../Pages/TheDesignSpark";
import Etec from "../Pages/Etec";
import ShoppsmStore from "../Pages/ShoppsmStore";
import College from "../Pages/College";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />

      {/* Projects Routes */}
      <Route path="/thedesignspark" element={<TheDesignSpark />} />
      <Route path="/etec" element={<Etec />} />
      <Route path="/shoppsmstore" element={<ShoppsmStore />} />
      <Route path="/College" element={<College />} />

      {/* Other Pages */}
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;

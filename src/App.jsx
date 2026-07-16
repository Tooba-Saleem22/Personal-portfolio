import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Home from "./Pages/Home";
// Projects Page ko import kiya
import Projects from "./Pages/Projects";
import Services from "./Pages/Servicesd";
import About from "./Pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Thedesignspark from "./pages/Thedesignspark";
import Etec from "./Pages/Etec";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Projects Page Route */}
        <Route path="/projects" element={<Projects />} />

        {/* Services Page Route */}
        <Route path="/services" element={<Services />} />

        {/* About Page Route */}
        <Route path="/about" element={<About />} />

        <Route path="/Thedesignspark" element={<Thedesignspark />} />

        <Route path="/Etec" element={<Etec />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

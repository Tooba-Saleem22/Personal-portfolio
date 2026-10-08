import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import About from "./Pages/About";

import ScrollToTop from "./components/ScrollToTop";

import Thedesignspark from "./Pages/ThedesignSpark";
import Etec from "./Pages/Etec";
import WES from "./Pages/WES";
import CollegeCafe from "./Pages/CollegeCafe";
import QuizziAcademia from "./Pages/QuizziAcademia";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/services" element={<Services />} />

        <Route path="/about" element={<About />} />

        <Route path="/Thedesignspark" element={<Thedesignspark />} />

        <Route path="/Etec" element={<Etec />} />

        <Route path="/WES" element={<WES />} />

        <Route path="/CollegeCafe" element={<CollegeCafe />} />

        <Route path="/quizzi-academia" element={<QuizziAcademia />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

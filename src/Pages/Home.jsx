import React from "react";
import Hero from "../HomePage/Hero";
import About from "../HomePage/About";
import Services from "../HomePage/Services";
import Projects from "../HomePage/Projects";
import WorkExperience from "../HomePage/WorkExperience";
import NumbersSection from "../HomePage/NumbersSection";
import FAQSection from "../HomePage/FAQSection";

const Home = () => {
  return (
    <div className=" bg-white">
      <Hero />
      <About />
      <Services />
      <Projects />
      <WorkExperience />
      <NumbersSection />
      <FAQSection />
    </div>
  );
};

export default Home;

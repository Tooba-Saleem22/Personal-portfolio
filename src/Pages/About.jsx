import React from "react";
import Intro from "../AboutPage/Intro";
import Skills from "../AboutPage/Skills";
import WhyChooseMe from "../AboutPage/WhyChooseMe";
import WorkExperience from "../HomePage/WorkExperience";
import IdeaSection from "../components/IdeaSection";

const About = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <WhyChooseMe />

      <div className="w-full bg-black text-white py-10 px-3 md:py-16 md:px-10 lg:px-20 rounded-t-[40px] md:rounded-t-[140px]">
        <WorkExperience bgColor="bg-black" textColor="text-white" />
      </div>
      <IdeaSection />
    </div>
  );
};

export default About;

import React from "react";
import Available from "../ServicesPage/Available";
import ServicesSec from "../ServicesPage/ServicesSec";
import WorkingProcess from "../ServicesPage/WorkingProcess";
import FAQSection from "../HomePage/FAQSection";

const Services = () => {
  return (
    <div>
      <Available />
      <ServicesSec />
      <WorkingProcess />
      <FAQSection />
    </div>
  );
};

export default Services;

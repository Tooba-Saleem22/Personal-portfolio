import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

const IdeaSection = () => {
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  const [headingVisible, setHeadingVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) setHeadingVisible(true);
            if (entry.target === buttonRef.current) setButtonVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full h-[40vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src="/assets/ropes.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controls={false}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 py-16 md:py-32">
        <h2
          ref={headingRef}
          className={`text-3xl md:text-7xl font-semibold transition-all duration-700 transform ${
            headingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-20"
          }`}
        >
          Have an idea?
        </h2>

        <div
          ref={buttonRef}
          className={`transition-all duration-700 transform mt-6 flex justify-center ${
            buttonVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            text="TELL US"
            className="px-6 py-3 text-2xl md:px-4 md:py-2 md:text-4xl rounded-none"
            onClick={() =>
              (window.location.href =
                "mailto:toobasaleem190@gmail.com?subject=Idea Submission&body=Hi Tooba,")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default IdeaSection;

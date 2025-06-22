import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-black text-white"
    >
      {/* Left Text Side */}
      <div className="max-w-xl space-y-6 text-center md:text-left">
        <h2 className="text-5xl font-bold">
          Hi, I'm <span className="text-red-600">Gurpreet</span>
        </h2>
        <p className="text-lg text-white-300">
          A software developer transitioning into data science.
        </p>
        <p className="text-lg text-white-300">
        But is that all I do ? No way !
        </p>
        <p>
          Over the years since I completed my Bachelors in Technology, majoring in Computer Science Engineering,
         I have had the chance to work with numerous different technologies and interact/explore various different tech stacks.
        </p>
        <p>
          Do you have what it takes to understand technology to a deeper level ?
        </p>
        <p>Or do you have a crazy idea or a project and wanna get started right this second ?</p>
        <a
          href="#contact"
          className="bg-red-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded inline-block w-max"
        >
          Get in Touch
        </a>
      </div>

      {/* Right Image Side */}
      <div className="mt-10 md:mt-0 md:ml-12">
        <img
          src="/profilepic.jpg"
          alt="Gurpreet's Profile"
          className="w-80 h-100  border-8 border-red-500 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;

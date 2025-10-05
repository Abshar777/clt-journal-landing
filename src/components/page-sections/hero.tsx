import React from "react";
import svg from "/our/animation.svg";
import Animationsvg from "../ui/animationsvg";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-[url('/hero.png')]  bg-cover bg-top bg-no-repeat overflow-hidden   pt-[170px] md:pt-[206px] md:pb-[100px] pb-[50px]  relative z-20">
      <div
        style={{
          backgroundImage: "url('/images/home-page-34/hero-vector.svg')",
        }}
        className="absolute  w-screen invert h-screen top-0 opacity-50  -z-10"
      ></div>

        <div className="gridAnim w-screen h-screen top-0 -z-10 absolute"></div>
      <div className="main-container">
        <div className="md:text-center md:space-y-4 space-y-5">
          <h1
            data-ns-animate
            data-delay="0.1"
            className="lg:max-w-[776px] md:max-w-[600px] sm:max-w-[500px] max-w-[380px] mx-auto"
          >
            <span className="hero-text-gradient hero-text-color-2 block">
              The Ultimate Trading Journal to Elevate Your Performance
            </span>
          </h1>
          <p
            data-ns-animate
            data-delay="0.2"
            className="lg:max-w-[700px] md:max-w-[600px] sm:max-w-[500px] max-w-[380px] mx-auto text-[#746d6d]"
          >
            With CataLyT , transform raw trades into data-driven
            mastery
          </p>
        
        </div>
        <ul className="flex items-center gap-4 justify-center md:flex-row flex-col mt-5">
          <li
            data-ns-animate
            data-delay="0.6"
            data-direction="left"
            data-offset="50"
            className="w-full sm:w-auto text-center sm:text-left"
          >
            <a
              href="https://journal.clt-academy.com"
              className="btn hover:btn-secondary dark:hover:btn-accent text-center border-0 btn-primary btn-xl md:w-auto w-[90%]"
            >
              <span>Get started Free</span>
            </a>
          </li>
          {/* <li
            data-ns-animate
            data-delay="0.7"
            data-direction="left"
            data-offset="50"
            className="w-full sm:w-auto text-center sm:text-left"
          >
            <a
              href="our-services-page-01.html"
              className="btn btn-dark hover:btn-green hover:text-white hover:border-0 bg-accent/22 text-center text-white btn-xl md:w-auto w-[90%]"
            >
              <span>Try live demo</span>
            </a>
          </li> */}
        </ul>
        <div
          style={{ scale: 1.1 }}
          data-ns-animate
          data-delay="0.8"
          data-instant
          className="lg:mt-[100px] relative  mt-[50px]"
        >
          <figure className="xl:max-w-[1240px] lg:max-w-[900px] max-w-[700px] mx-auto rounded-2xl overflow-hidden">
            <img
              src="/our/sc.svg"
              className="w-full h-full object-cover hidden dark:block"
              alt="Forex trading"
            />
          </figure>
        </div>
      </div>
      <figure
        data-ns-animate
        data-delay="0.6"
        data-offset="0"
        className="absolute top-0 left-1/2 -translate-x-1/2 max-w-[1390px] w-full h-1/2 z-[-10]"
      >
        {/* <Animationsvg /> */}
      </figure>
    </section>
  );
};

export default HeroSection;

import React from "react";
import svg from "/our/animation.svg";
import Animationsvg from "../ui/animationsvg";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[url('/images/home-page-34/hero.png')] bg-cover bg-top bg-no-repeat overflow-hidden   pt-[170px] md:pt-[206px] md:pb-[100px] pb-[50px]  relative z-20">
      <div
        style={{
          backgroundImage: "url('/images/home-page-34/hero-vector.svg')",
        }}
        className="absolute w-screen h-screen top-0 opacity-50  -z-10"
      ></div>
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
            className="lg:max-w-[700px] md:max-w-[600px] sm:max-w-[500px] max-w-[380px] mx-auto text-accent/60"
          >
            With CLT Trading Journal, transform raw trades into data-driven
            mastery
          </p>
          <ul className="flex items-center md:gap-9 gap-5 flex-wrap sm:justify-center">
            <li
              data-ns-animate
              data-delay="0.3"
              className="flex items-center gap-1.5"
            >
              <span className="inline-flex size-[18px] items-center justify-center rounded-full bg-accent/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M4.81661 7.25605L10.2491 1.92144C10.5836 1.5959 10.5836 1.0697 10.2491 0.744158C9.91446 0.418614 9.37363 0.418614 9.03904 0.744158L4.2116 5.49012L1.96096 3.28807C1.62636 2.96253 1.08554 2.96253 0.750945 3.28807C0.416352 3.61362 0.416352 4.13982 0.750945 4.46536L3.6066 7.25605C3.77347 7.41841 3.99253 7.5 4.2116 7.5C4.43067 7.5 4.64974 7.41841 4.81661 7.25605Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-accent/60 text-tagline-2">
                {" "}
                100+ global currency pairs.{" "}
              </span>
            </li>
            <li
              data-ns-animate
              data-delay="0.4"
              className="flex items-center gap-2"
            >
              <span className="inline-flex size-[18px] items-center justify-center rounded-full bg-accent/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M4.81661 7.25605L10.2491 1.92144C10.5836 1.5959 10.5836 1.0697 10.2491 0.744158C9.91446 0.418614 9.37363 0.418614 9.03904 0.744158L4.2116 5.49012L1.96096 3.28807C1.62636 2.96253 1.08554 2.96253 0.750945 3.28807C0.416352 3.61362 0.416352 4.13982 0.750945 4.46536L3.6066 7.25605C3.77347 7.41841 3.99253 7.5 4.2116 7.5C4.43067 7.5 4.64974 7.41841 4.81661 7.25605Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-accent/60 text-tagline-2">
                {" "}
                Avg. execution speed: 48ms.{" "}
              </span>
            </li>
            <li
              data-ns-animate
              data-delay="0.5"
              className="flex items-center gap-2"
            >
              <span className="inline-flex size-[18px] items-center justify-center rounded-full bg-accent/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M4.81661 7.25605L10.2491 1.92144C10.5836 1.5959 10.5836 1.0697 10.2491 0.744158C9.91446 0.418614 9.37363 0.418614 9.03904 0.744158L4.2116 5.49012L1.96096 3.28807C1.62636 2.96253 1.08554 2.96253 0.750945 3.28807C0.416352 3.61362 0.416352 4.13982 0.750945 4.46536L3.6066 7.25605C3.77347 7.41841 3.99253 7.5 4.2116 7.5C4.43067 7.5 4.64974 7.41841 4.81661 7.25605Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-accent/60 text-tagline-2">
                {" "}
                Regulated & secure environment.{" "}
              </span>
            </li>
          </ul>
        </div>
        <ul className="flex items-center gap-4 justify-center md:flex-row flex-col mt-14">
          <li
            data-ns-animate
            data-delay="0.6"
            data-direction="left"
            data-offset="50"
            className="w-full sm:w-auto text-center sm:text-left"
          >
            <a
              href="pricing-page-01.html"
              className="btn hover:btn-secondary dark:hover:btn-accent text-center border-0 btn-primary btn-xl md:w-auto w-[90%]"
            >
              <span>Get started Free</span>
            </a>
          </li>
          <li
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
          </li>
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

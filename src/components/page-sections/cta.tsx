import React from "react";
import { ctasvg } from "@/const/ctasvg";

const Cta: React.FC = () => {
  return (
    <section
    style={{
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundImage: "url('"+ctasvg+"')",
    }}
      className="py-[50px] md:py-20 lg:py-28 dark:bg-background-5 relative overflow-hidden bg-white"
      aria-label="Use Case Overview"
    >
    
      <div className="main-container">
        <div className="flex items-center flex-col lg:flex-row justify-between">
          {/* Left Section */}
          <div className="xl:max-w-[650px] lg:max-w-[476px] max-[400px]:max-w-[300px] w-full space-y-5 text-center lg:text-left">
            {/* Optional badge */}
            <span
              data-ns-animate
              data-delay="0.3"
              className="badge badge-green hidden"
            >
              Badge Text
            </span>

            <div className="space-y-3">
              <h2
                data-ns-animate
                data-delay="0.4"
                className="text-secondary dark:text-accent text-heading-5 sm:text-heading-4 lg:text-heading-2"
              >
               Simple. Fast. 
               {" "}
                <span className="text-primary-500">Powerful.</span>
              </h2>
              <p data-ns-animate data-delay="0.5">
              The trading journal that will help improve your trading performance.
              </p>
            </div>
          </div>

          {/* Right Section (Form + Features) */}
          <div className="lg:basis-[466px] space-y-6 md:ml-0 xl:ml-[100px] pt-[40px] lg:pt-[67px] w-full sm:w-[80%] md:w-[60%]">
            {/* Form */}
            <form
              data-ns-animate
              data-delay="0.6"
              action="#"
              method="post"
              className="flex items-center flex-col gap-5 sm:flex-row justify-start lg:gap-3"
            >
              <input
              style={{
                backdropFilter: "blur(10px)",
              }}
                type="email"
                name="email"
                id="userEmail-cta-v1"
                placeholder="Enter your email"
                required
                className="px-[18px] shadow-1 h-12 py-3 placeholder:text-secondary/50 rounded-full border border-transparent backdrop-blur-xl lg:max-w-[340px] bg-accent/22 md:w-[71%] w-full max-[376px]:w-full dark:border-stroke-7 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 dark:text-accent"
              />

              <button
                type="submit"
                className="btn btn-md btn-primary h-12 w-full sm:w-[28%] lg:w-auto hover:btn-secondary dark:hover:btn-white"
              >
                <span>Get started</span>
              </button>
            </form>

            {/* Feature List */}
    
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

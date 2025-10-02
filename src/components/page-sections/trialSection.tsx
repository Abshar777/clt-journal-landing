import React from "react";

const TrialSection: React.FC = () => {
  return (
    <section
    id="ai"
      style={{
        background: "#f8ebea",
      }}
      className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]"
    >
      <div className="main-container">
        <div className="text-center">
          <h2
            style={{
              color: "#8c4b4b",
            }}
            data-ns-animate
            data-delay="0.1"
            className="mb-3 capitalize"
          >
             now the journal got more smarter
            <br className="hidden  lg:block" />
            with the
            <span className="text-primary-500"> power of Ai</span>
          </h2>
          <p
            style={{ color: "#746d6d" }}
            data-ns-animate
            data-delay="0.2"
            className="mb-8 lg:max-w-[590px] mx-auto"
          >
            ai will score all your trades, Ai will help you assist in your
            trading journey by giving recommendations. learning from your
            trading style. Ai will also try to keep a track on the ways that how
            you trade, whether the following trade is purely based on emotions,
            regressive trading, or any particular education required.
          </p>
          <div data-ns-animate data-delay="0.3">
            <a
              href="pricing-page-01.html"
              className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md block w-full md:w-auto md:inline-block text-center mx-auto md:mx-0 text-tagline-2"
            >
              <span>Get started</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialSection;

import React from "react";

interface Service {
  id: number;
  delay: string;
  icon: string;
  title: string;
  link: string;
}


// Overcome Hesitation with a well-developed trading plan

// Manage Emotional 
// Decision-Making

// Stop poor risk management decisions

// Eliminate bad trades and poor decisions

// Maximize Trading Opportunities with confident position sizing

// Aim for Consistent Profitability

const services: Service[] = [
  {
    id: 1,
    delay: "0.4",
    icon: "ns-shape-9",
    title: "Overcome Hesitation with a well-developed trading plan",
    // description: "Track mistakes to learn from them, identify preventable trading losses, and refine your strategy for improved performance. Use our risk management tools to set stop-loss prices and monitor your position sizing to minimize large losses.",
    link: "our-services-details-page.html",
  },
  {
    id: 2,
    delay: "0.5",
    icon: "ns-shape-3",
    title: "Manage Emotional  Decision-Making",
    // description: "Gain insights with detailed reports to identify trends and patterns in your trading. Key metrics, such as win rate and average profit per trade evaluate your performance.",
    link: "our-services-details-page.html",
  },
  {
    id: 3,
    delay: "0.6",
    icon: "ns-shape-12",
    title: "Stop poor risk management decisions",
    // description: "Utilize advanced market data analytics for optimal trading decisions. Evaluate trade setups and strategies with Tradervue's analytical tools. Back-test ideas and assess historical performance using MAE/MFE and Best Exit P&L. Gain insights with effortless data export.",
    link: "our-services-details-page.html",
  },
  {
    id: 4,
    delay: "0.7",
    icon: "ns-shape-2",
    title: "Eliminate bad trades and poor decisions",
    // description: "Get a clear monthly overview with Tradervue's calendar view. Easily spot profitable days through color coding and tap for detailed breakdowns of each trading day. Simplify your analysis for more informed decisions. Ideal for both day and swing traders.",
    link: "our-services-details-page.html",
  },
  {
    id: 5,
    delay: "0.8",
    icon: "ns-shape-7",
    title: "Maximize Trading Opportunities with confident position sizing",
    // description: "Gain deep insights into your contacts at a glance and easily track",
    link: "our-services-details-page.html",
  },
  {
    id: 6,
    delay: "0.9",
    icon: "ns-shape-7",
    title: "Aim for Consistent Profitability",
    // description: "Gain deep insights into your contacts at a glance and easily track",
    link: "our-services-details-page.html",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-white dark:bg-background-6 pb-[100px] xl:pb-[200px] pt-[50px] md:pt-[85px] xl:pt-[100px]">
      <div className="main-container">
        <div className="space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">
          {/* Heading */}
          <div className="max-w-[810px] text-center lg:w-full mx-auto space-y-5">
           

            <div className="space-y-3">
              <h2 data-ns-animate data-delay="0.2">
              Optimize and Refine Your Trading Process
              </h2>
              <p
                data-ns-animate
                data-delay="0.3"
                className="max-w-[582px] mx-auto sm:w-full"
              >
               Access essential reports to develop a successful trade plan and enhance your trading performance. Identify the reasons why your trading may not be effective and work to eliminate them.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="flex items-center justify-center flex-wrap gap-8">
            {services.map((service) => (
              <article key={service.id} data-ns-animate data-delay={service.delay}>
                <div className="max-w-[403px] w-full py-8 px-6 bg-background-2 dark:bg-background-5 rounded-[20px] flex flex-col items-center gap-6 hover:translate-y-[-10px] transition-transform duration-500 ease-in-out">
                  {/* Icon */}
                  <span
                    className={`${service.icon} text-[54px] text-secondary dark:text-accent`}
                  ></span>

                  {/* Title + Description */}
                  <div className="text-center space-y-2">
                    <h3 className="text-heading-5">{service.title}</h3>
                   
                  </div>

                  {/* Button */}
                  {/* <div>
                    <a
                      href={service.link}
                      className="btn btn-dark hover:btn-green hover:text-white hover:border-0 bg-accent/22 text-center text-white  btn-lg"
                      rel="noopener noreferrer"
                    >
                      <span>View Services</span>
                    </a>
                  </div> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React, { useState } from "react";

interface Feature {
  icon: string; // CSS class for ns-shape
  title: string;
  description: string;
}

interface TabContent {
  title: string;
  description: string;
  image: string;
  
  buttonText: string;
  buttonLink: string;
}


//  Customizable dashboard. 
// Personalize your dashboard to match your trading style for a smooth experience. View past performance instantly and monitor your progress over time.”
//  Advanced analytics 
// Use advanced market analytics for better trading decisions. Evaluate setups and strategies with our analytical tools. Back-test ideas and assess historical performance using MAE/MFE and best-exit P&L. Export data effortlessly for deeper insight.”
//  Calendar 
// Get a clear monthly overview using our calendar view. Easily spot profitable days via color-coding and tap for detailed breakdowns. Simplify your analysis for more informed decisions — ideal for both day and swing traders.
//  Journal 
// “Simplify your journaling process with tagging. Log and categorize trades easily for precise analysis and trackable trading behavior. Use our day-trading journal template to monitor your strategies effortlessly. Become a better trader through data-driven insights!”
//  Fully Customizable
// Streamline your insights with our filters. Customize your view by trade, criteria, or tags to simplify analysis and make better decisions. Filter by symbol, date range, strategy, market conditions, mistakes, or tags to quickly zoom in on trades of interest.”

const tabs: { label: string; content: TabContent }[] = [
  {
    label: "Dashboard",
    content: {
      title: "Customizable dashboard",
      description:
        "Personalize your dashboard to match your trading style for a smooth experience. View past performance instantly and monitor your progress over time.",
      image: "/l1.svg",
     
      buttonText: "Get Started Today",
      buttonLink: "https://journal.clt-academy.com",
    },
  },
  {
    label: "Trades",
    content: {
      title: "Reduce bad trades",
      description:
        "Track mistakes to learn from them, identify preventable trading losses, and refine your strategy for improved performance. Use our risk management tools to set stop-loss prices and monitor your position sizing to minimize large losses.",
      image: "/l3.svg",
     
      buttonText: "Get Started Today",
      buttonLink: "https://journal.clt-academy.com",
    },
  },
  {
    label: "Reports",
    content: {
      title: "Track every statistic",
      description:
        "Gain insights with detailed reports to identify trends and patterns in your trading. Key metrics, such as win rate and average profit per trade evaluate your performance.",
      image: "/l5.svg",
 
      buttonText: "Get Started Today",
      buttonLink: "https://journal.clt-academy.com",
    },
  },
  {
    label: "Analytics",
    content: {
      title: "Advanced analytics",
      description:
        "Use advanced market analytics for better trading decisions. Evaluate setups and strategies with our analytical tools. Back-test ideas and assess historical performance using MAE/MFE and best-exit P&L. Export data effortlessly for deeper insight.",
      image: "/l1.svg",
     
      buttonText: "Get Started Today",
      buttonLink: "https://journal.clt-academy.com",
    },
  },
  {
    label: "Calendar",
    content: {
      title: "Calendar view",
      description:
        "Get a clear monthly overview using our calendar view. Easily spot profitable days via color-coding and tap for detailed breakdowns. Simplify your analysis for more informed decisions — ideal for both day and swing traders.",
      image: "/l2.svg",
     
      buttonText: "Get Started Today",
      buttonLink: "https://journal.clt-academy.com",
    },
  },
  {
    label: "Journal",
    content: {
      title: "Effortless journaling and tagging",
      description:
        "Simplify your journaling process with tagging. Log and categorize trades easily for precise analysis and trackable trading behavior. Use our day-trading journal template to monitor your strategies effortlessly. Become a better trader through data-driven insights!",
      image: "/l1.svg",
     
      buttonText: "Get Started Today",
      buttonLink: "https://journal.clt-academy.com",
    },
  },
  {
    label: "Filters",
    content: {
      title: "Fully custimizable",
      description:
        "Streamline your insights with our filters. Customize your view by trade, criteria, or tags to simplify analysis and make better decisions. Filter by symbol, date range, strategy, market conditions, mistakes, or tags to quickly zoom in on trades of interest.",
      image: "/l4.svg",
     
      buttonText: "Get Starte Today",
      buttonLink: "https://journal.clt-academy.com",
    },
  },
 
];

const AboutTabBars: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      data-ns-animate
      data-delay="0.1"
      className="bg-background-[#F7EBEA] lg:pt-[150px] sm:pt-[100px] sm:pb-10 lg:pb-16 py-20 overflow-hidden"
    >
      <div className="main-container">
        {/* TabBar small screen */}
        <div className="tab-mobile flex items-center flex-wrap md:hidden gap-4 mb-14 lg:mb-[72px] justify-center">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-3.5 py-2 min-w-16 cursor-pointer text-tagline-2 font-medium  rounded-full bg-red-900/10 ${
                activeTab === i
                ? "text-secondary"
                  : "text-[#746d6d]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TabBar large screen */}
        <div
          role="tablist"
          className="tab-bar hidden md:flex justify-center items-center border-stroke-2 dark:border-stroke-6 mb-16 lg:mb-[100px] relative"
        >
          {/* active tab bar indicator (you can animate this if needed) */}
          <div style={{
                height: "3rem",
                zIndex: "-1",
                borderRadius: "25px",
          }} className="active-tab-bar"></div>
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`py-3 cursor-pointer focus-visible:outline-0 px-10 -mb-px ${
                activeTab === i
                 ? "text-secondary"
                  : "text-[#746d6d]"
              }`}
            >
              <span className="text-tagline-1 font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tabs.map((tab, i) => (
          <div
            key={i}
            className={`tab-content flex flex-col lg:flex-row justify-center items-start gap-y-16 gap-x-24 ${
              activeTab === i ? "block" : "hidden"
            }`}
          >
            <div>
              <div className="space-y-3">
                <h2 className="max-w-[610px] text-[#8c4b4b]">{tab.content.title}</h2>
                <p className="max-w-[409px] text-[#746d6d]">{tab.content.description}</p>
              </div>
              <div>
                <a
                // style={{backgroundColor:"#8c4b4b"}}
                  href={tab.content.buttonLink}
                  className="btn border-0 hover:btn-green hover:text-white hover:border-0 bg-red-500 text-white text-center btn-lg mt-6 "
                >
                  <span>{tab.content.buttonText}</span>
                </a>
              </div>
            </div>

            {/* About Image */}
            <figure className="lg:inline-block relative max-w-[580px] mx-auto">
              <img
                src={tab.content.image}
                alt="about"
                className="size-full object-cover"
              />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTabBars;

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

const tabs: { label: string; content: TabContent }[] = [
  {
    label: "Dashboard",
    content: {
      title: "Customizable Dashboard",
      description:
        "Personalize Tradervue to match your trading style with our customizable dashboard, ensuring a smooth experience. Instantly view past performance and monitor your progress over time.",
      image: "/g12.svg",
     
      buttonText: "Start learning",
      buttonLink: "learn-page.html",
    },
  },
  {
    label: "Trades",
    content: {
      title: "Reduce Bad Trades",
      description:
        "Track mistakes to learn from them, identify preventable trading losses, and refine your strategy for improved performance. Use our risk management tools to set stop-loss prices and monitor your position sizing to minimize large losses.",
      image: "images/home-page-1/about-decentralization-1.png",
     
      buttonText: "Start learning",
      buttonLink: "learn-page.html",
    },
  },
  {
    label: "Reports",
    content: {
      title: "Track every stat",
      description:
        "Gain insights with detailed reports to identify trends and patterns in your trading. Key metrics, such as win rate and average profit per trade evaluate your performance.",
      image: "images/home-page-34/about-img-02.png",
 
      buttonText: "Start learning",
      buttonLink: "learn-page.html",
    },
  },
  {
    label: "Analytics",
    content: {
      title: "Advanced Analytics",
      description:
        "Utilize advanced market data analytics for optimal trading decisions. Evaluate trade setups and strategies with Tradervue's analytical tools. Back-test ideas and assess historical performance using MAE/MFE and Best Exit P&L. Gain insights with effortless data export.",
      image: "images/home-page-34/about-img-03.png",
     
      buttonText: "Start learning",
      buttonLink: "learn-page.html",
    },
  },
  {
    label: "Calendar",
    content: {
      title: "Calendar View",
      description:
        "Get a clear monthly overview with Tradervue's calendar view. Easily spot profitable days through color coding and tap for detailed breakdowns of each trading day. Simplify your analysis for more informed decisions. Ideal for both day and swing traders.",
      image: "images/home-page-34/about-img-03.png",
     
      buttonText: "Start learning",
      buttonLink: "learn-page.html",
    },
  },
  {
    label: "Journal",
    content: {
      title: "Effortless Journaling and Tagging",
      description:
        "Simplify your trade journal process with our tagging feature. Easily log and categorize trades for precise analysis and trackable trading behavior. Use our day trading journal template to monitor your strategies effortlessly. Become a better trader through data-driven insights!",
      image: "images/home-page-34/about-img-03.png",
     
      buttonText: "Start learning",
      buttonLink: "learn-page.html",
    },
  },
  {
    label: "Filters",
    content: {
      title: "Fully custimizable",
      description:
        "Streamline your trading insights with Tradervue's filters. Customize your view by specific trades or criteria to simplify analysis and make better decisions. Filter by symbol, date range, strategy, market conditions, mistakes, or tags to quickly find and analyze trades.",
      image: "images/home-page-34/about-img-03.png",
     
      buttonText: "Start learning",
      buttonLink: "learn-page.html",
    },
  },
  {
    label: "Automatic reports",
    content: {
      title: "Seamless Imports",
      description:
        "Automatically import your trading data from multiple brokers, eliminating manual entry and streamlining your trade tracking process. Our trade tracker supports imports from all major online brokers and trading platforms.",
      image: "images/home-page-34/about-img-03.png",
     
      buttonText: "Start learning",
      buttonLink: "learn-page.html",
    },
  },
];

const AboutTabBars: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      data-ns-animate
      data-delay="0.1"
      className="bg-background-2 dark:bg-background-5 lg:pt-[150px] sm:pt-[100px] sm:pb-10 lg:pb-16 py-20 overflow-hidden"
    >
      <div className="main-container">
        {/* TabBar small screen */}
        <div className="tab-mobile flex items-center flex-wrap md:hidden gap-4 mb-14 lg:mb-[72px] justify-center">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-3.5 py-2 min-w-16 cursor-pointer text-tagline-2 font-medium border rounded-full dark:bg-background-7 ${
                activeTab === i
                  ? "text-secondary dark:text-accent border-stroke-2 dark:border-stroke-7"
                  : "text-secondary/60 dark:text-accent/60 border-stroke-2 dark:border-stroke-7"
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
                  ? "text-secondary dark:text-accent"
                  : "text-secondary/60 dark:text-accent/60"
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
                <h2 className="max-w-[610px]">{tab.content.title}</h2>
                <p className="max-w-[409px]">{tab.content.description}</p>
              </div>
              <div>
                <a
                  href={tab.content.buttonLink}
                  className="btn btn-dark hover:btn-green hover:text-white hover:border-0 bg-accent/22 text-center text-white btn-lg mt-4"
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

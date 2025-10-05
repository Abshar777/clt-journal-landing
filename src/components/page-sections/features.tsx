import React from "react";

const Features: React.FC = () => {
  // {
  //   title: "Trading Analysis",
  //   description: "Our trade analysis offers real statistics based on theoretical exits. Easily see your Exit Performance as a % vs your Best potential exit P&L.",
   
  //   imgDark: "/Frame 1.svg",
  //   gradient: "images/gradient/gradient-32.png",
  // },
  // {
  //   title: "Reports",
  //   description: "Use these insights from your trading journal data to develop a robust trading plan and track your progress over time.",

  //   imgDark: "/Frame 2.svg",
  //   gradient: "images/gradient/gradient-33.png",
  // },
  // {
  //   title: "Trading Journal",
  //   description: " All entries and exits are displayed on a TradingView chart, complete with drawing and indicator capabilities",
   
  //   imgDark: "/Frame 3.svg",
  //   gradient: "images/gradient/gradient-34.png",
  // },
  const cards = [
    {
      delay: "0.4",
      wrapperClass:
        "max-w-[408px] w-full pt-[29px] px-0 sm:px-2.5 overflow-hidden space-y-[72px] bg-background-3 dark:bg-background-5 rounded-[20px] relative h-[493px]",
      heading: {
        title: "Trading Analysis",
        h1Color: "text-[#8c4b4b]",
        pColor: "text-[#746d6d]",
        desc: "Our trade analysis offers real statistics based on theoretical exits. Easily see your Exit Performance as a % vs your Best potential exit P&L.",
      },
      content: (
        <div
          data-animation-type="to"
          data-ns-animate
          data-direction="up"
          data-offset="0"
          data-delay="0.7"
          data-rotation="-7"
          className="group  max-w-[350px]  bg-white dark:bg-background-8 w-full flex flex-col items-center justify-center rounded-2xl gap-y-9 overflow-hidden absolute top-[44%] left-[7%]"
        >
          {/* avatar and heading */}
         <img className="w-full h-full object-cover" src="/Frame1.png" alt="avatar" />
        </div>
      ),
    },
    {
      delay: "0.5",
      wrapperClass:
        "max-w-[408px] h-[493px] pt-[29px] sm:px-[29px] overflow-hidden space-y-[72px] bg-ns-green rounded-[20px] w-full",
      heading: {
       
        title: "Reports",
        desc: "Use these insights from your trading journal data to develop a robust trading plan and track your progress over time.",
      },
      content: (
        <div
          data-ns-animate
          data-delay="0.5"
          data-offset="100"
          className=" bg-secondary w-full rounded-2xl space-y-9"
        >
         <img className="w-full h-full object-cover" src="/Frame 2.svg" alt="avatar" />
        </div>
      ),
    },
    {
      delay: "0.6",
      wrapperClass:
        "max-w-[408px] pt-[29px] px-0 sm:px-2.5 overflow-hidden space-y-[72px] bg-background-3 dark:bg-background-5 rounded-[20px] relative h-[493px] w-full",
      heading: {
        h1Color: "text-[#8c4b4b]",
        pColor: "text-[#746d6d]",
        title: "Trading Journal",
        desc: " All entries and exits are displayed on a TradingView chart, complete with drawing and indicator capabilities",
      },
      content: (
        <div
          data-animation-type="to"
          data-ns-animate
          data-delay="0.7"
          data-rotation="7"
          data-offset="0"
          className="group space-y-2 bg-white dark:bg-background-8 rounded-2xl pb-20 absolute top-[43%] -right-1.5 sm:right-[8%] w-[350px]"
        >
         <img className="w-full h-full object-cover" src="/frame3.svg" alt="avatar" />
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="bg-white dark:bg-background-6 pt-[100px] xl:pt-[100px] pb-[100px] md:pb-[85px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px] flex flex-col items-center">
          <div className="text-center space-y-5 max-w-[628px] mx-auto">
           
            <div className="space-y-3">
              <h2 className="text-white" data-ns-animate data-delay="0.2">Trade Smarter with <span className="text-primary-500">C</span>ata<span className="text-primary-500">L</span><span>y</span><span className="text-primary-500">T</span></h2>
              <p className="text-white/80" data-ns-animate data-delay="0.3">
              CataLyT empowers traders to discover winning strategies and trading niches through comprehensive analysis and intuitive reportingIt provides the tools you need to track your trades, analyze your performance, and improve your trading skills.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col xl:flex-row gap-8">
            {cards.map((card, index) => (
              <article
                key={index}
                data-ns-animate
                data-delay={card.delay}
                className={card.wrapperClass}
              >
                <div className="space-y-4 max-w-[350px] mx-auto text-center xl:text-left pl-4">
                  <h3 className={`text-heading-5 ${card.heading.h1Color}`}>{card.heading.title}</h3>
                  <p className={`${card.heading.pColor}`}>{card.heading.desc}</p>
                </div>
                {card.content}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

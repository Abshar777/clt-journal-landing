import React from "react";

interface Step {
  title: string;
  description: string;
  imgDark: string;
  gradient: string;
  maxWidth?: string;
}

// Sign Up Using Your Mail

// Enter your email address to create an account. You’ll receive a magic link in your inbox – just click it to securely log in and access your dashboard without needing a password.

// 2. Add Account

// Set up your personal profile by adding an account name, profile picture, and basic details. This will personalize your dashboard and make it easier to manage your portfolios.

// 3. Add Portfolio

// Create your first portfolio by entering the assets you want to track or manage. This helps organize your investments in one place.

// 4. Connect

// Link your account with our system so we can start preparing for syncing your broker data.

// 5. Click Auto Sync

// Enable Auto Sync to keep your portfolios updated automatically without needing to enter details manually.

// 6. Choose Broker

// Select your broker from the list of supported platforms. This ensures accurate integration and smooth syncing.

// 7. Follow All Steps

// Complete the on-screen instructions to securely authorize the connection between your broker and your account.

// 8. Connect

// Finalize the setup by clicking Connect. Once done, your broker account will be fully integrated, and your portfolios will start updating in real time.

const stepsData: Step[] = [
  {
    title: "sign up ",
    description: "Enter your email, name, and mobile number to create an account. You’ll receive a magic link in your inbox — simply click it to securely log in and access your dashboard without a password.",
   
    imgDark: "/st1.svg",
    gradient: "images/gradient/gradient-32.png",
  },
  {
    title: "Add trade",
    description: "Set up your personal profile by adding an account name, profile picture, and basic details. This will personalize your dashboard and make it easier to manage your portfolios",

    imgDark: "/st2.svg",
    gradient: "images/gradient/gradient-33.png",
  },
  {
    title: "Add Portfolio",
    description: "then mention the Name of the portfolio, initial capital and currency. ",
   
    imgDark: "/st3.svg",
    gradient: "images/gradient/gradient-34.png",
  },
  {
    title: "auto sync",
    description: "Fill in the details by selecting Mt5 as platform or any platform where you have your trading account. ",
   
    imgDark: "/st6.svg",
    gradient: "images/gradient/gradient-34.png",
  },
  {
    title: "Choose Broker And Follow All Steps To Connect",
    description: "Select your broker from the list of supported platforms. This ensures accurate integration and smooth syncing.",
   
    imgDark: "/st5.svg",
    gradient: "images/gradient/gradient-34.png",
  },
 
 
];

const Steps: React.FC = () => {
  return (
    <section
    id="steps"
      className="relative py-16 md:py-20 lg:py-[100px] bg-background-2 dark:bg-background-5"
      aria-label="Hero section"
    >
      <div className="main-container">
        <div className="grid grid-cols-12 xl:gap-[60px] gap-y-14 items-start justify-items-center">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-6 lg:sticky lg:top-28">
            <div className="md:space-y-14 space-y-10 lg:text-left text-center">
              <div className="space-y-3">
                <h2 style={{color:"#8c4b4b"}}
                 data-ns-animate data-delay="0.1" className="xl:max-w-[479px] w-full xl:mx-0 mx-auto">
               Simple Steps to Improve Your Trading
                </h2>
                <p style={{color:"#746d6d"}} data-ns-animate data-delay="0.2">
                CataLyT empowers traders to discover winning strategies and trading niches through comprehensive analysis and intuitive reporting. It provides the tools you need to track your trades, analyze your performance, and improve your trading skills.
                </p>
              </div>
              <div data-ns-animate data-delay="0.3">
                <a
                style={{backgroundColor:"#8c4b4b"}}
                  href="ht"
                  className="btn btn-dark hover:btn-green hover:text-white hover:border-0 bg-[#8c4b4b] text-center text-white btn-lg"
                >
                  <span>Explore all features</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="col-span-12 lg:col-span-6">
            <div className="stack-cards js-stack-cards sm:flex-1 flex-none w-full sm:order-1 order-2">
              {stepsData.map((step, index) => (
                <div
                  key={index}
                  className="stack-cards__item js-stack-cards__item  p-2 relative rounded-[20px] z-20 flex items-center justify-center sm:max-w-[483px] max-w-full w-full overflow-hidden"
                >
                  {/* <figure className={`absolute pointer-events-none -top-[99%] -left-[88%] size-[1000px] -z-10 rotate-[307deg] opacity-50 select-none`}>
                    <img src={step.gradient} alt="step" />
                  </figure> */}
                  <div style={{backgroundColor:"#cc0c0c"}} className="relative z-10 p-8 rounded-[14px] sm:max-w-[467px] max-w-full w-full space-y-6  bg-card">
                    <div className="space-y-1">
                      <h3 className="text-heading-5 font-medium uppercase text-secondary dark:text-accent">{step.title}</h3>
                      <p className="">{step.description}</p>
                    </div>
                    <figure className="max-w-[403px] w-full rounded-2xl overflow-hidden">
                
                      <img
                        src={step.imgDark}
                        alt="step"
                        className="hidden dark:block w-full h-full  "
                      />
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;

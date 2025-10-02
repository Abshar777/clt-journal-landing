import React from "react";

interface Logo {
  src: string;
  alt: string;
  darkSrc?: string; // for dark mode alternative logos
}

const logosRow1: Logo[] = [
  { src: "/i1.png", alt: "Google logo" },
  { src: "/i2.png", alt: "Slack logo" },
  { src: "/i3.png", alt: "Confluence logo" },
  { src: "/i4.png", alt: "Snapchat logo" },
  {
    src: "/i5.png",
    alt: "Yammer logo",
    darkSrc: "/i5.png",
  },
  { src: "/i7.png", alt: "Figma logo" },
  { src: "/i8.png", alt: "Microsoft logo" },
];

const logosRow2: Logo[] = [
  { src: "/i9.png", alt: "Google Meet logo" },
  { src: "/i6.png", alt: "Microsoft Edge logo" },
  {
    src: "/i10.png",
    alt: "LV logo",
    darkSrc: "/i10.png",
  },
  { src: "/i2.png", alt: "Framer logo" },
  {
    src: "/i4.png",
    alt: "Marvel logo",
    darkSrc: "/i4.png",
  },
  { src: "/i3.png", alt: "Confluence logo" },
  { src: "/i2.png", alt: "Gmail logo" },
];

const IntegrationPartners: React.FC<{ className?: string }> = ({ className }) => {
  const renderLogo = (logo: Logo, index: number, withMargin?: boolean) => (
    <figure
      key={index}
      className={`size-[100px] p-6  rounded-full flex items-center justify-center ${
        withMargin ? "ml-8" : ""
      }`}
    >
      {/* Normal logo */}
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        className={`size-12 object-cover ${logo.darkSrc ? "dark:hidden" : ""}`}
      />
      {/* Dark mode alternative logo */}
      {logo.darkSrc && (
        <img
          src={logo.darkSrc}
          alt={logo.alt}
          loading="lazy"
          className="hidden dark:inline-block size-12  object-cover"
        />
      )}
    </figure>
  );

  return (
    <section
    id="integration"
    style={{backgroundColor:"#F7EBEA"}}
      className={`${className || ""}  py-[100px] lg:py-[150px] xl:py-[200px]`}
      aria-label="Integration Partners"
    >
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* Heading */}
          <div className="max-w-[1028px] text-center mx-auto space-y-5">
            
            <div className="space-y-3">
              <h2 style={{color:"#8c4b4b"}} data-ns-animate data-delay="0.2">
              Supported Brokers
              </h2>
              <p style={{color:"#746d6d"}}
                data-ns-animate
                data-delay="0.3"
                className="max-w-[582px] mx-auto"
              >
               We’ve integrated with the most popular platforms to make uploading trades seamless. New brokerages are being added regularly.
              </p>
            </div>
          </div>

          {/* Logos */}
          <div data-ns-animate data-delay="0.4" className="space-y-7">
            {/* Marquee row 1 */}
            <div className="relative max-w-[1128px] mx-auto">
              <div className="absolute left-0 top-0 h-[115px] w-[15%] md:w-[20%] bg-gradient-to-r from-background-2/90 to-transparent dark:from-background-7 z-40" />
              <div className="absolute right-0 top-0 h-[115px] w-[15%] md:w-[20%] bg-gradient-to-l from-background-2/90 to-transparent dark:from-background-7 z-40" />

              <div className="logos-marquee-container">
                <div className="flex items-center gap-[34px] justify-center" role="group">
                  {logosRow1.map((logo, i) => renderLogo(logo, i, i === 0))}
                </div>
              </div>
            </div>

            {/* Marquee row 2 */}
            <div className="relative max-w-[985px] mx-auto">
              <div className="absolute left-0 top-0 h-[115px] w-[15%] md:w-[20%] bg-gradient-to-r from-background-2/90 to-transparent dark:from-background-7 z-40" />
              <div className="absolute right-0 top-0 h-[115px] w-[15%] md:w-[20%] bg-gradient-to-l from-background-2/90 to-transparent dark:from-background-7 z-40" />

              <div className="logos-right-marquee-container">
                <div
                  className="flex items-center gap-[34px] justify-center"
                  aria-label="Integration partners row 2"
                >
                  {logosRow2.map((logo, i) => renderLogo(logo, i, i === 0))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationPartners;

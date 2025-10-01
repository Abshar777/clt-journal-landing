import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Heade from "@/components/layout/heade";
import Scripts from "@/components/layout/scripts";
import Nav from "@/components/global/nav";
import "@/../public/assets/main.css"
import Indexlayout from "@/components/layout";
import Script from "next/script";


export const metadata: Metadata = {
 title:"Clt Trading Journal",
 description:"Clt Trading Journal",
 keywords:"Clt Trading Journal",
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className="light lenis lenis-smooth"
      lang="en"
    >
      <Heade />
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4YQPNX68EQ"  
          strategy="afterInteractive"  
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', 2024);

            gtag('config', 'G-4YQPNX68EQ');  
          `}  
        </Script>  

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '931471225017986');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=931471225017986&ev=PageView&noscript=1"
          />
        </noscript>
      <body
        suppressHydrationWarning
        className="bg-background-2 dark dark:bg-background-5 tt-transition tt-lightmode-on tt-noise tt-magic-cursor tt-smooth-scroll"
      >
        <Indexlayout>{children}</Indexlayout>
        <Scripts />
      </body>
    </html>
  );
}

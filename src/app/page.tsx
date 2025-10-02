"use client"
import Hero from "@/components/page-sections/hero";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import AboutSection from "@/components/page-sections/about-section";
import HowItWorks from "@/components/page-sections/howItWorks";
import Service from "@/components/page-sections/service";
import { Faqs } from "@/components/page-sections/faqs";
import  Testimonials  from "@/components/page-sections/testimonials";
import { TimeLine } from "@/components/page-sections/timeLine";
import { Blog } from "@/components/page-sections/blog";
import  Cta  from "@/components/page-sections/cta";
import ContactSection from "@/components/page-sections/contactUs";
import Steps from "@/components/page-sections/steps";
import IntegrationPartners from "@/components/page-sections/integration";
import AboutTabBars from "@/components/page-sections/about-section";
import Features from "@/components/page-sections/features";
import TrialSection from "@/components/page-sections/trialSection";

export default function Home() {

  return (
 <>
 <Hero/>
 <Features/>
 <Steps/>
 <Service/>
 <IntegrationPartners/>
 <AboutTabBars/>
 <TrialSection/>

 {/* <Pricing/> */}
 {/* <TimeLine/> */}
 {/* <Faqs/>
 <Testimonials/>
 <ContactSection/> */}
 
 {/* <Cta/> */}
 </>
  );
}

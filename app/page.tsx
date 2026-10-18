import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { ForWhom } from "@/components/sections/ForWhom";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { NextSteps } from "@/components/sections/NextSteps";
import { Reviews } from "@/components/sections/Reviews";
import { StickyBar } from "@/components/StickyBar";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Benefits />
        <ForWhom />
        <About />
        <HowItWorks />
        <Reviews />
        <Faq />
        <NextSteps />
        <FinalCta />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}

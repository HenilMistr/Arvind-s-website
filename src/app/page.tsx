import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Brands } from "@/components/sections/Brands";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Brands />
      <Contact />
    </>
  );
}

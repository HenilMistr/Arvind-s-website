import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <WhyUs />
      <Services />
      <Contact />
    </div>
  );
}

import CTA from "@/components/sections/CTA";
import CTA2 from "@/components/sections/CTA2";
import FAQs from "@/components/sections/FAQs";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Plans from "@/components/sections/Plans";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <CTA />
      <Stats />
      <Services />
      <CTA2 />
      <Process />
      <Team />
      <Plans />
      <FAQs />
    </main>
  );
}

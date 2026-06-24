import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import StatBand from "@/components/sections/StatBand";
import Problem from "@/components/sections/Problem";
import How from "@/components/sections/How";
import Matching from "@/components/sections/Matching";
import Schools from "@/components/sections/Schools";
import Different from "@/components/sections/Different";
import Story from "@/components/sections/Story";
import CTA from "@/components/sections/CTA";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="relative">
        {/* sentinel: drives the nav background once the page scrolls */}
        <div id="nav-sentinel" aria-hidden="true" className="absolute left-0 top-0 h-px w-px" />
        <Hero />
        <StatBand />
        <Problem />
        <How />
        <Matching />
        <Schools />
        <Different />
        <Story />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

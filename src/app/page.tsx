import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import { TimeLineSection } from "@/components/TimeLineSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 px-4 py-8 sm:px-8 lg:px-16">
      <HeroSection />

      <TechStackSection />

      <TimeLineSection />

      <FooterSection />
    </div>
  );
}

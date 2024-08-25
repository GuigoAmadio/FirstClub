import FinalCall from "@/src/app/about/components/finalCall";
import HeroAbout from "@/src/app/about/components/HeroAbout";
import VerticalThings from "@/src/app/about/components/VerticalThings";

export default function AboutUs() {
  return (
    <main className="flex flex-col items-center">
      <HeroAbout />
      <VerticalThings />
      <FinalCall />
    </main>
  );
}

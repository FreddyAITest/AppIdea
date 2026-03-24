import { HeroSection } from "@/components/sections/HeroSection";
import { WeeklyPlan } from "@/components/sections/WeeklyPlan";
import { CommunityRated } from "@/components/sections/CommunityRated";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <HeroSection />
      <WeeklyPlan />
      <CommunityRated />
    </div>
  );
}

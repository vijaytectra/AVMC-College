import { Hero } from "@/components/homepage/Hero";
import { KnowledgeHub } from "@/components/homepage/KnowledgeHub";
import { Announcements } from "@/components/homepage/Announcements";
import { NIRFSection } from "@/components/homepage/NIRFSection";
import { NewsEvents } from "@/components/homepage/NewsEvents";
import { HospitalServices } from "@/components/homepage/HospitalServices";
import { ChancellorMessage } from "@/components/homepage/ChancellorMessage";

import { BuildingLeaders } from "@/components/homepage/BuildingLeaders";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <BuildingLeaders />
      <KnowledgeHub />
      <div className="w-full h-6 bg-white" />
      <Announcements />
      <div className="w-full h-6 bg-white" />
      <NIRFSection />
      <NewsEvents />
      {/* Added spacer/strip as requested */}
      <div className="w-full h-24 bg-orange-50" />
      <HospitalServices />
      <ChancellorMessage />
    </main>
  );
}

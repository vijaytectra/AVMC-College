import CareerHero from "@/components/careers/CareerHero";
import OpenPositions from "@/components/careers/OpenPositions";
import CareerStats from "@/components/careers/CareerStats";
import CareerTestimonials from "@/components/careers/CareerTestimonials";
import CareerCTA from "@/components/careers/CareerCTA";

export default function CareerPage() {
    return (
        <div className="w-full bg-white">
            <CareerHero />
            <OpenPositions />
            <CareerStats />
            <CareerTestimonials />
            <CareerCTA />
        </div>
    );
}

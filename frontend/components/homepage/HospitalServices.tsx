import Link from "next/link";
import Image from "next/image";
import { StudentStats } from "./StudentStats";

export function HospitalServices() {
    return (
        <section className="w-full relative bg-p-8 overflow-visible min-h-[946px] pb-20 lg:mt-0">

            {/* 
                StudentStats Overlay 
                Positioned absolute at top, translated up by 50% to sit half-in/half-out.
            */}
            <div className="absolute top-[-0px] lg:top-0 left-0 w-full -translate-y-1/2 z-30 pointer-events-none">
                <div className="pointer-events-auto">
                    <StudentStats />
                </div>
            </div>

            {/* 
                Background Container - Clipped to section bounds
                This ensures the circles do not spill out of the blue section area.
            */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Concentric Circles Background Effect - Reduced to 8 circles */}
                <div className="absolute left-1/2 top-[680px] md:top-[790px] lg:top-[550px] -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px]">
                    {/* Generating concentric circles */}
                    {[...Array(8)].map((_, i) => {
                        const size = 1471 - (i * 150);
                        return (
                            <div
                                key={i}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[1.72px] border-[#3B3975] rounded-full"
                                style={{ width: `${size}px`, height: `${size}px` }}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="container mx-auto px-4 relative h-full flex flex-col items-center pt-[240px] lg:pt-52">

                {/* 
                   Hospital Services Main Content
                */}
                <div className="relative w-full max-w-[1221px] flex flex-col items-center">

                    {/* Frame Decoration Frame is behind image/text but above background */}
                    {/* Frame Decoration Frame is behind text but above image */}
                    {/* Outer Frame (Second Line) */}
                    <div className="hidden lg:block absolute top-8 -left-2 bottom-60 right-6 rounded-[25px] border-l border-b border-white pointer-events-none z-30" />
                    <div className="hidden lg:block absolute top-0 left-0 w-full h-96 rounded-[44px] border-2 border-white pointer-events-none z-30" />

                    {/* Title Label - Centered on top border of frame */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-p-8 px-6 py-2 z-40">
                        <h2 className="text-white text-3xl md:text-5xl font-mounsta font-normal leading-none text-center whitespace-nowrap">
                            Hospital Services
                        </h2>
                    </div>


                    {/* Central Image */}
                    {/* Central Image - Desktop Only */}
                    <div className="relative mt-20 z-10 w-full hidden lg:flex justify-center px-4 md:px-0">
                        <div className="w-full max-w-[559px] aspect-square relative rounded-tr-[100px] rounded-bl-[100px] overflow-hidden bg-gray-200">
                            <Image
                                src="/images/hospital%20service.png"
                                alt="Hospital Services"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Left Content Block */}
                    <div className="absolute left-13 top-20 w-[250px] flex flex-col items-end gap-8 z-40 text-right hidden lg:flex">
                        <p className="text-[var(--color-grey-4)] text-sm font-medium font-dm-mono leading-none tracking-tighter">
                            A fully operational Pharmacy, state of art Audiology and Speech therapy unit, wide range of Physiotherapy / Rehabilitative care services and a utilitarian Blood Bank along with dedicated nursing staff and health care professionals provide the necessary support for patient care services.
                        </p>
                        <Link href="#" className="text-[#3B82F6] text-base font-medium font-dm-mono underline hover:text-blue-400">
                            View Attendance
                        </Link>
                    </div>

                    {/* Right Content Block */}
                    <div className="absolute right-10 top-105 w-64 flex flex-col items-start gap-8 z-40 text-left hidden lg:flex">
                        <p className="text-[var(--color-grey-4)] text-sm font-medium font-dm-mono">
                            The Hospital is well equipped and established to serve patients with care and service by efficient Dialysis Unit, Lithotripsy, PUVA Chamber. Laparoscopy and laser instrument for general and Gynecology surgery.
                        </p>
                        <Link href="#" className="text-[#3B82F6] text-base font-medium font-dm-mono underline hover:text-blue-400">
                            View Clinical Material
                        </Link>
                    </div>

                    {/* Mobile/Responsive Layout - Interleaved Content */}
                    <div className="flex lg:hidden flex-col gap-8 mt-20 w-full max-w-[559px] px-4 relative z-20">

                        {/* Top Text (Right Aligned) */}
                        <div className="flex flex-col gap-4 items-end self-end max-w-[250px]">
                            <p className="text-[#9CA3AF] text-sm font-medium font-dm-mono leading-none tracking-tighter text-right">
                                A fully operational Pharmacy, state of art Audiology and Speech therapy unit, wide range of Physiotherapy / Rehabilitative care services and a utilitarian Blood Bank along with dedicated nursing staff and health care professionals provide the necessary support for patient care services.
                            </p>
                            <Link href="#" className="text-[#3B82F6] text-base font-medium font-dm-mono underline">
                                View Attendance
                            </Link>
                        </div>

                        {/* Mobile Image */}
                        <div className="w-full aspect-square relative rounded-tr-[50px] rounded-bl-[50px] overflow-hidden bg-gray-200 shadow-lg">
                            <Image
                                src="/images/hospital%20service.png"
                                alt="Hospital Services"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Bottom Text (Left Aligned) */}
                        <div className="flex flex-col gap-4 items-start self-start max-w-[250px]">
                            <p className="text-[#9CA3AF] text-sm font-medium font-dm-mono leading-none tracking-tighter text-left">
                                The Hospital is well equipped and established to serve patients with care and service by efficient Dialysis Unit, Lithotripsy, PUVA Chamber. Laparoscopy and laser instrument for general and Gynecology surgery.
                            </p>
                            <Link href="#" className="text-[#3B82F6] text-base font-medium font-dm-mono underline">
                                View Clinical Material
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 
                   Campus Life Content (Merged)
                   Positioned below the Hospital Services content
                */}
                <div className="w-full mt-32 flex justify-center px-4 md:px-0">
                    {/* Grid Container */}
                    <div className="flex flex-col lg:flex-row justify-center items-start gap-2 w-full max-w-[1292px]">

                        {/* Left Column: 2 Vertical Images */}
                        <div className="w-full lg:w-60 flex flex-col gap-2 lg:h-[727px]">
                            <div className="relative w-full h-64 lg:h-auto lg:flex-1">
                                <Image src="/images/campus%20life%201.png" alt="Campus Life 1" fill className="object-cover" />
                            </div>
                            <div className="relative w-full h-64 lg:h-auto lg:flex-1">
                                <Image src="/images/campus%20life%202.png" alt="Campus Life 2" fill className="object-cover" />
                            </div>
                        </div>

                        {/* Middle Column: 3 Horizontal Rows */}
                        <div className="w-full lg:w-[772px] flex flex-col gap-2 lg:h-[727px]">

                            {/* Row 1: 2 horizontal images */}
                            <div className="flex flex-col sm:flex-row gap-2 h-auto lg:h-[237px]">
                                <div className="relative w-full sm:w-[60%] lg:w-[531px] h-64 sm:h-auto">
                                    <Image src="/images/campus%20life%203.png" alt="Campus Life 3" fill className="object-cover" />
                                </div>
                                <div className="relative w-full sm:flex-1 h-64 sm:h-auto">
                                    <Image src="/images/campus%20life%204.png" alt="Campus Life 4" fill className="object-cover" />
                                </div>
                            </div>

                            {/* Row 2: Image + Red Block + Text Overlay */}
                            <div className="flex flex-col sm:flex-row gap-2 h-auto lg:h-[237px]">
                                <div className="relative w-full sm:w-80 h-64 sm:h-auto flex-shrink-0">
                                    <Image src="/images/campus%20life%205.png" alt="Campus Life 5" fill className="object-cover" />
                                </div>
                                <div className="flex-1 bg-[#DC292B] p-6 lg:p-8 flex flex-col justify-center gap-2">
                                    <div className="flex items-center gap-4">
                                        <h2 className="text-[#FAFAFA] text-3xl lg:text-5xl font-normal font-['GC_Amelie_Promised_Demo'] leading-none">
                                            Campus Life
                                        </h2>
                                        <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white" />
                                    </div>
                                    <p className="text-white text-xs font-normal font-['Inter'] leading-relaxed">
                                        AVMC is a green campus with 33% greenery. It promotes eco-friendly practices including a plastic-free zone, shaded walkways, vehicle-free areas, e-cycles, rainwater harvesting, recycling, and solar power. The campus also offers a spa, gym, media rooms.
                                    </p>
                                </div>
                            </div>

                            {/* Row 3: 2 horizontal images */}
                            <div className="flex flex-col sm:flex-row gap-2 h-auto lg:h-[237px]">
                                <div className="relative w-full sm:w-56 h-64 sm:h-auto flex-shrink-0">
                                    <Image src="/images/campus%20life%206.png" alt="Campus Life 6" fill className="object-cover" />
                                </div>
                                <div className="relative w-full sm:flex-1 h-64 sm:h-auto">
                                    <Image src="/images/campus%20life%207.png" alt="Campus Life 7" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Right Column: 2 Vertical Images */}
                        <div className="w-full lg:w-80 flex flex-col gap-2 lg:h-[727px]">
                            <div className="relative w-full h-64 lg:h-auto lg:flex-1">
                                <Image src="/images/campus%20life%208.png" alt="Campus Life 8" fill className="object-cover" />
                            </div>
                            <div className="relative w-full h-64 lg:h-auto lg:flex-1">
                                <Image src="/images/campus%20life%20left%20to%20campus%20life%20.png" alt="Campus Life 9" fill className="object-cover" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

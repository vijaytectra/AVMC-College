import React from 'react';
import Image from "next/image";

export default function AcademicCalendarPage() {
    return (
        <div className="w-full min-h-screen relative flex flex-col">
            {/* Paper Background Texture */}
            <div className="absolute inset-0 bg-[url('/images/Paper_03%202.png')] bg-center -z-10" />

            {/* Hero Section */}
            <section className="relative w-full h-[300px] md:h-[550px] overflow-hidden shrink-0">
                {/* Background Image */}
                <Image
                    src="/images/academic_calendar_hero.png"
                    alt="Academic Calendar Hero"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 z-10" />

                {/* Center Title Card */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-auto px-2 md:px-5 h-auto py-8 md:py-0 md:h-36 bg-white/20 border-l-[11px] border-s6 border-t border-b border-t-white border-b-white backdrop-blur-[2px] flex flex-col items-center justify-center gap-4">
                        <h1 className="text-white text-3xl md:text-5xl font-gc-amelie italic font-normal text-center leading-tight whitespace-nowrap">Academic Calendar</h1>
                        <div className="text-white text-xs md:text-sm font-delight uppercase tracking-wide text-center">
                            ACADEMIC &gt; ACADEMIC calendar
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Years List Section */}
            <section className="w-full max-w-[1040px] mx-auto py-8 md:py-16 px-4">
                <div className="w-full bg-white p-4 md:p-6 flex flex-col gap-6 shadow-[0px_0px_50px_0px_rgba(0,0,0,0.05)]">

                    {/* List Header - Hidden on Mobile */}
                    <div className="hidden md:flex w-full h-14 pl-6 pr-5 py-2.5 bg-orange-50 justify-between items-center">
                        <div className="w-1/3 text-[#262366] text-center text-xl font-normal font-delight">Academic Year</div>
                        <div className="w-1/3 flex justify-center">
                            <div className="text-[#262366] text-xl font-normal font-delight">Status</div>
                        </div>
                        <div className="w-1/3 text-center text-[#262366] text-xl font-normal font-delight">Action</div>
                    </div>

                    {/* Row 1: 2026 - 2027 */}
                    <div className="w-full md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 border-b border-grey-4/30 md:border-none pb-6 md:pb-0">
                        <div className="w-full md:w-1/3 text-center text-black text-xl font-normal font-delight">2026 - 2027</div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="px-5 py-3 bg-teal-50 rounded-[100px] border-[0.4px] border-emerald-700 flex justify-center items-center gap-2.5">
                                <div className="text-emerald-700 text-base font-normal font-delight tracking-wide whitespace-nowrap">Current Year</div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 text-center">
                            <button className="text-grey-7 text-base font-normal font-delight underline tracking-wide hover:text-primary transition-colors">View Calendar</button>
                        </div>
                    </div>

                    {/* Row 2: 2025 - 2026 */}
                    <div className="w-full md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 border-b border-grey-4/30 md:border-none pb-6 md:pb-0">
                        <div className="w-full md:w-1/3 text-center text-black text-xl font-normal font-delight">2025 - 2026</div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="px-5 py-3 bg-grey-1 rounded-[100px] border-[0.4px] border-grey-7 flex justify-center items-center gap-2.5">
                                <div className="text-grey-7 text-base font-normal font-delight tracking-wide whitespace-nowrap">Previous</div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 text-center">
                            <button className="text-grey-7 text-base font-normal font-delight underline tracking-wide hover:text-primary transition-colors">View Calendar</button>
                        </div>
                    </div>

                    {/* Row 3: 2024 - 2025 */}
                    <div className="w-full md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 pb-2 md:pb-0">
                        <div className="w-full md:w-1/3 text-center text-black text-xl font-normal font-delight">2024 - 2025</div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="px-5 py-3 bg-grey-1 rounded-[100px] border-[0.4px] border-grey-7 flex justify-center items-center gap-2.5">
                                <div className="text-grey-7 text-base font-normal font-delight tracking-wide whitespace-nowrap">Archived</div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 text-center">
                            <button className="text-grey-7 text-base font-normal font-delight underline tracking-wide hover:text-primary transition-colors">View Calendar</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

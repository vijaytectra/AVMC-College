"use client";

import React from "react";
import Image from "next/image";

export default function InstitutionalDistinctiveness() {
    const cards = [
        {
            title: "Integrated Clinical Exposure",
            description: "Hands-on patient interaction starts from the first semester, not the third year.",
            icon: <Image src="/icons/icon-clinical.png" alt="Clinical Exposure" width={20} height={20} className="object-contain" />
        },
        {
            title: "Research & Innovation",
            description: "A culture of inquiry fostered through state-of-the-art labs and grant support.",
            icon: <Image src="/icons/icon-research.png" alt="Research" width={20} height={20} className="object-contain" />
        },
        {
            title: "Community Impact",
            description: "Serving rural populations through dedicated outreach and adoption programs.",
            icon: <Image src="/icons/icon-community.png" alt="Community" width={20} height={20} className="object-contain" />
        },
        {
            title: "Personalized Mentorship",
            description: "Low student-to-faculty ratios ensuring every student is seen, heard, and guided.",
            icon: <Image src="/icons/icon-mentorship.png" alt="Mentorship" width={20} height={20} className="object-contain" />
        }
    ];

    return (
        <section className="w-full relative overflow-hidden bg-white pt-24 pb-10">
            {/* Container matching w-[1040px] centered logic */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-[100px] flex flex-col justify-start items-center gap-14">

                {/* Header */}
                <div className="self-stretch flex flex-col justify-center items-center gap-4">
                    <div className="text-center text-primary-7 text-4xl font-normal font-amelie italic">
                        Institutional Distinctiveness
                    </div>
                    <div className="text-center text-grey-7/70 text-lg font-light font-delight leading-6 tracking-tight">
                        What makes AVMC unique in medical education
                    </div>
                </div>

                {/* Cards Row */}
                {/* Cards Row - Matched Hospital Services Grid Layout */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="w-full h-60 p-6 bg-white shadow-[-9px_9px_0px_0px_rgba(4,42,77,0.12)] outline outline-1 outline-offset-[-1px] outline-grey-4 flex flex-col justify-between items-start group hover:-translate-y-1 transition-transform duration-300">
                            {/* Icon Box */}
                            <div className="p-2.5 bg-[#D2D0EA] inline-flex justify-start items-center gap-2.5">
                                {/* Icon Placeholder from snippet */}
                                <div className="w-6 h-6 relative flex items-center justify-center">
                                    {card.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="self-stretch flex flex-col justify-start items-start gap-3">
                                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                                    <div className="self-stretch justify-start text-primary-7 text-xl font-normal font-amelie italic leading-6">
                                        {card.title}
                                    </div>
                                    <div className="self-stretch justify-start text-grey-6/70 text-xs font-normal font-delight leading-4 tracking-tight">
                                        {card.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Background Pattern */}
            <div className="absolute inset-x-0 bottom-0 h-full w-full pointer-events-none z-0">
                <Image
                    src="/images/distinctiveness-bg.png"
                    alt="Background Pattern"
                    fill
                    className="object-cover object-bottom opacity-100"
                />
            </div>
        </section>
    );
}

"use client";

import React from "react";
import Image from "next/image";

/**
 * CareerHero Component
 * Displays the hero section for the Career page with background image and overlaid text card.
 * Styling is tailored to match the Figma HTML snippet provided, using Tailwind CSS and global fonts.
 */
const CareerHero: React.FC = () => {
    return (
        <div className="w-full h-[420px] md:h-[455px] 2xl:h-[550px] relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/carreer bg.png"
                    alt="Career Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center md:block">
                {/* 
                   Card Positioning:
                   Mobile: Centered relative to screen
                   Desktop: Fixed offset as per design (left-[522px] top-[201px] roughly centers it horizontally on 1440px usually, but let's use percentage or container for better stability)
                */}
                <div className="relative md:absolute md:left-[36%] md:top-[36%] w-[90%] max-w-[398px] md:w-[398px] h-[149px]">
                    {/* Translucent Card Background with Red Border */}
                    <div className="absolute inset-0 bg-white/20 border-y border-white border-l-[11px] border-l-s6 backdrop-blur-sm" />

                    {/* Text Content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 gap-2 md:gap-3">
                        {/* Title */}
                        <div className="w-full text-center text-p-7 text-[48px] font-gc-amelie italic font-normal leading-normal tracking-[-0.48px]">
                            Career
                        </div>

                        {/* Breadcrumb */}
                        <div className="w-full text-center text-p-7 text-xs md:text-sm font-delight uppercase tracking-[0.06em]">
                            home &gt; About &gt; career
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerHero;

"use client";

import React from "react";

/**
 * CareerCTA Component
 * Displays the "Didn't find the right opportunity?" section with a distinct bordered box style.
 * Matches the provided Figma HTML snippet styling.
 */
const CareerCTA: React.FC = () => {
    return (
        <div className="w-full flex justify-center py-[100px] bg-white">
            <div className="relative w-full max-w-[1040px] h-auto min-h-[231px] mx-4 lg:mx-0">

                {/* 
                  Border container with Shadow effect 
                  Snippet: boxShadow: '-14px 14px 0px #4B46A9'
                  Border radii: TR 44, BR 44, BL 44 (TL is 0 default)
                  Border: 2px solid p5
                */}
                {/* Back Border (Offset) */}
                <div
                    className="absolute inset-0 translate-y-[14px] -translate-x-[14px] border-2 border-p-5 rounded-tr-[44px] rounded-br-[44px] rounded-bl-[44px] pointer-events-none"
                />

                {/* Front Border (Main Box) */}
                <div
                    className="absolute inset-0 border-2 border-p-5 rounded-tr-[44px] rounded-br-[44px] rounded-bl-[44px] bg-white z-10 pointer-events-none"
                />

                {/* Content Container - Centered within the box */}
                <div className="relative z-20 w-full h-full flex flex-col md:flex-row justify-between items-center py-10 px-6 md:px-[50px] gap-8">

                    {/* Text Section */}
                    <div className="flex flex-col gap-4 max-w-[533px] text-center md:text-left items-center md:items-start">
                        <div className="text-p-6 text-2xl md:text-[32px] font-gc-amelie italic font-normal leading-tight md:leading-10 tracking-[0.64px] md:tracking-[1.28px]">
                            Didn’t find the right opportunity ?
                        </div>
                        <div className="text-grey-7 text-sm font-delight font-normal leading-[22px] tracking-[0.56px]">
                            We welcome qualified professionals. If your role is not listed, please share your resume for future opportunities.
                        </div>
                    </div>

                    {/* Email Box */}
                    <div className="w-full md:w-auto shrink-0 px-5 py-5 outline outline-1 outline-p-9 flex justify-center items-center gap-2.5 bg-white hover:bg-gray-50 transition-colors cursor-pointer text-center">
                        <span className="text-p-9 text-base font-delight font-normal leading-[22px] tracking-[0.64px] break-all md:break-normal whitespace-nowrap">
                            careers@avmc.edu.in
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CareerCTA;

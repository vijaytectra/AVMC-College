"use client";

import React from "react";
import Image from "next/image";

/**
 * CareerStats Component
 * Displays key statistics grid (Faculty, Departments, Retention, Alumni).
 * Matches the provided Figma HTML snippet for styling and layout.
 */
const CareerStats: React.FC = () => {
    const stats = [
        { value: "500+", label: "Faculty Members" },
        { value: "25+", label: "Departments" },
        { value: "98%", label: "Retention Rate" },
        { value: "15K+", label: "Alumni Network" },
    ];

    return (
        <div className="w-full flex justify-center py-[60px] px-4 bg-white">
            <div className="w-full max-w-[1037px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="relative w-full h-[160px] flex flex-col justify-center items-center gap-1.5 p-6 bg-white overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-[0px_10px_9px_0px_rgba(0,0,0,0.08)] outline outline-2 outline-grey-4"
                    >
                        {/* 
                          Background Image Overlay 
                        */}
                        <div className="absolute inset-0 md:inset-auto md:left-[-470px] md:top-[-88.5px] w-full h-full md:w-[783px] md:h-[483px] pointer-events-none">
                            <Image
                                src="/images/faculty members bg.png"
                                alt="Background Pattern"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 w-full text-center text-p-6 text-2xl font-delight font-semibold">
                            {stat.value}
                        </div>
                        <div className="relative z-10 w-full text-center text-p-6 text-sm font-delight font-medium">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareerStats;

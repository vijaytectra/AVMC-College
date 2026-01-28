"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AccreditationsPage() {
    const [activeSection, setActiveSection] = useState("nabh");
    return (
        <div className="w-full bg-white flex flex-col min-h-screen font-['Delight']">


            {/* Hero Section */}
            <div className="w-full relative h-[455px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/accreditations bg.png" // Using existing hero bg as placeholder/fallback
                        alt="Accreditations Hero"
                        fill
                        className="object-cover object-[25%_37%] scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/10" /> {/* Overlay adjustment */}
                </div>

                {/* Hero Content Overlay */}
                <div className="absolute inset-0 flex justify-center items-center px-4">
                    <div className="w-full max-w-[398px] h-[149px] relative">
                        {/* Glass Background */}
                        <div className="absolute inset-0 bg-white/20 border-l-[8px] border-l-[#DC292B] border-y border-t-white/60 border-b-white/60 backdrop-blur-sm" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4">
                            <h1 className="text-white text-5xl font-['GC_Amelie_Promised_Demo'] italic font-normal text-center leading-none">
                                Accreditations
                            </h1>
                            <div className="text-[#FAFAFA] text-sm font-['Delight'] uppercase tracking-[0.84px] text-center">
                                <Link href="/" className="hover:underline">home</Link> &gt; <Link href="/about" className="hover:underline">About</Link> &gt; Accreditations
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16 lg:px-[150px] py-16 md:py-24">
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[108px]">


                    {/* Sidebar / Navigation */}
                    <div className="flex flex-row lg:flex-col gap-2 md:gap-[30px] w-full lg:w-auto items-center lg:items-start pb-4 lg:pb-0 justify-between lg:justify-start">
                        {/* Item 1 - NAAC */}
                        <div
                            onClick={() => setActiveSection("naac")}
                            className={`relative flex-shrink-0 w-[105px] h-[100px] md:w-[157px] md:h-[146px] flex justify-center items-center cursor-pointer transition-colors z-10
                                ${activeSection === "naac" ? "" : "bg-[#F9F6EE]/40"}`}
                        >
                            {activeSection === "naac" && (
                                <div className="absolute top-0 bottom-0 right-0 bg-p-7 border-l-[7px] border-[#DC292B] -z-10
                                    w-full
                                    lg:w-[calc(max(0px,50vw-720px)+150px+100%)]"
                                />
                            )}
                            <div className="relative w-[50px] h-[50px] md:w-[90px] md:h-[90px]">
                                <Image
                                    src="/icons/accrediation icon 1.png"
                                    alt="NAAC"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Item 3 - NABH */}
                        <div
                            onClick={() => setActiveSection("nabh")}
                            className={`relative flex-shrink-0 w-[105px] h-[100px] md:w-[157px] md:h-[146px] flex justify-center items-center cursor-pointer transition-colors z-10
                                ${activeSection === "nabh" ? "" : "bg-[#F9F6EE]/40"}`}
                        >
                            {activeSection === "nabh" && (
                                <div className="absolute top-0 bottom-0 right-0 bg-p-7 border-l-[7px] border-[#DC292B] -z-10
                                    w-full
                                    lg:w-[calc(max(0px,50vw-720px)+150px+100%)]"
                                />
                            )}
                            <div className="relative w-[50px] h-[50px] md:w-[90px] md:h-[90px]">
                                <Image
                                    src="/icons/accrediation icon 2.png"
                                    alt="NABH"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Item 4 - NABL */}
                        <div
                            onClick={() => setActiveSection("nabl")}
                            className={`relative flex-shrink-0 w-[105px] h-[100px] md:w-[157px] md:h-[146px] flex justify-center items-center cursor-pointer transition-colors z-10
                                ${activeSection === "nabl" ? "" : "bg-[#F9F6EE]/40"}`}
                        >
                            {activeSection === "nabl" && (
                                <div className="absolute top-0 bottom-0 right-0 bg-p-7 border-l-[7px] border-[#DC292B] -z-10
                                    w-full
                                    lg:w-[calc(max(0px,50vw-720px)+150px+100%)]"
                                />
                            )}
                            <div className="relative w-[50px] h-[50px] md:w-[90px] md:h-[90px]">
                                <Image
                                    src="/icons/accrediation icon 3.png"
                                    alt="NABL"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Details */}
                    <div className="flex-1 flex flex-col items-center gap-8 w-full">
                        {activeSection === "naac" && (
                            <>
                                <div className="flex flex-col items-center gap-4 text-center">
                                    <h2 className="text-[#2D2A74] text-[32px] font-['GC_Amelie_Promised_Demo'] italic font-normal leading-tight">
                                        NAAC Certificate of Accreditation
                                    </h2>
                                    <p className="text-[#404040] text-base font-['Delight'] leading-6 tracking-[0.32px] max-w-[760px]">
                                        NAAC (an autonomous body under UGC) evaluates higher-education institutions on overall quality standards. VMRF is NAAC accredited with an A Grade (CGPA 3.13/4), valid up to 11 July 2027.
                                    </p>
                                </div>

                                <div className="relative w-full max-w-[362px] h-[500px] shadow-lg">
                                    <Image
                                        src="/images/certificate accreditation 1.png"
                                        alt="NAAC Certificate"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </>
                        )}

                        {activeSection === "nabh" && (
                            <>
                                <div className="flex flex-col items-center gap-4 text-center">
                                    <h2 className="text-[#2D2A74] text-[32px] font-['GC_Amelie_Promised_Demo'] italic font-normal leading-tight">
                                        NABH Certificate of Accreditation
                                    </h2>
                                    <p className="text-[#404040] text-base font-['Delight'] leading-6 tracking-[0.32px] max-w-[760px]">
                                        Aarupadai Veedu Medical College & Hospital is NABH Entry Level – Hospital certified under QCI, confirming patient-safety and quality compliance. Valid 26 Aug 2021 to 25 Aug 2023
                                    </p>
                                </div>

                                <div className="relative w-full max-w-[362px] h-[500px] shadow-lg">
                                    <Image
                                        src="/icons/nabh cert.png"
                                        alt="NABH Certificate"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </>
                        )}

                        {activeSection === "nabl" && (
                            <>
                                <div className="flex flex-col items-center gap-4 text-center">
                                    <h2 className="text-[#2D2A74] text-[32px] font-['GC_Amelie_Promised_Demo'] italic font-normal leading-tight">
                                        NABL Certificate of Accreditation
                                    </h2>
                                    <p className="text-[#404040] text-base font-['Delight'] leading-6 tracking-[0.32px] max-w-[760px]">
                                        The Molecular Diagnostics Laboratory – AVMC & Hospital (VMRF unit) is NABL accredited under ISO 15189:2012 for Medical Testing. Valid up to 20 Jan 2025 (Certificate No: MC-3744, issued 21 Jan 2023).
                                    </p>
                                </div>

                                <div className="relative w-full max-w-[362px] h-[500px] shadow-lg">
                                    <Image
                                        src="/icons/nabl cert.png"
                                        alt="NABL Certificate"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

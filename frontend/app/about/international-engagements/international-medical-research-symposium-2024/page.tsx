"use client";

import React from "react";
import { Calendar, Building2, MapPin } from "lucide-react";
import Image from "next/image";
import RelatedEngagementCard from "@/components/RelatedEngagementCard";

export default function InternationalMedicalResearchSymposiumPage() {
    return (
        <div className="w-full relative flex flex-col bg-[#F8FAFC] min-h-screen font-['Delight']">

            {/* Hero Section */}
            <div className="w-full relative h-[499px] overflow-hidden bg-white">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 w-full h-full">
                    <Image src="/images/bg international-2024.png" alt="Hero Background" fill className="object-cover object-[center_80%]" />
                    <div
                        className="absolute left-0 top-[-119px] w-full h-[680px]"
                        style={{
                            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.57) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.57) 100%)'
                        }}
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 w-full h-full max-w-[1440px] px-4 md:px-16 lg:px-[150px] xl:px-[200px] mx-auto flex flex-col justify-between py-12">
                    {/* Top Content */}
                    {/* Top Content: Breadcrumbs */}
                    <div className="flex flex-col items-start">
                        <div className="text-white text-xs md:text-sm uppercase tracking-wide">
                            home &gt; About &gt; International Engagements &gt; Medical Research Symposium 2024
                        </div>
                    </div>

                    {/* Bottom Content: Title + Info Bar */}
                    <div className="flex flex-col gap-8">
                        <h1 className="text-white text-3xl md:text-5xl font-['GC_Amelie_Promised_Demo'] leading-tight max-w-[600px] italic">
                            International Medical Research Symposium 2024
                        </h1>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-[538px] gap-4 md:gap-0">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-grey-1/70" />
                                <span className="text-grey-1/70 text-xs tracking-wide">December 15, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-grey-1/70" />
                                <span className="text-grey-1/70 text-xs tracking-wide">Department of Life Sciences</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-grey-1/70" />
                                <span className="text-grey-1/70 text-xs tracking-wide">United States</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="w-full max-w-[1440px] px-4 md:px-16 lg:px-[150px] xl:px-[200px] mx-auto py-16 md:py-24 flex flex-col gap-16 md:gap-24">

                {/* Event Details Grid */}
                <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between lg:items-start gap-8 md:gap-y-8 md:gap-x-4 w-full max-w-[1040px]">
                        <div className="flex flex-col gap-2 md:gap-4">
                            <span className="text-grey-6 text-sm font-medium uppercase tracking-widest">Partner Organization</span>
                            <span className="text-grey-10 text-base tracking-widest">Asia-Pacific Medical Education Network</span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <span className="text-grey-6 text-sm font-medium uppercase tracking-widest">What</span>
                            <span className="text-grey-10 text-base tracking-widest">Conference</span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <span className="text-grey-6 text-sm font-medium uppercase tracking-widest">Focus Area</span>
                            <span className="text-grey-10 text-base tracking-widest">Oncology &amp; Organoids</span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4 items-start lg:items-end">
                            <span className="text-grey-6 text-sm font-medium uppercase tracking-widest">Status</span>
                            <span className="text-grey-10 text-base tracking-widest">MoU Review</span>
                        </div>
                    </div>
                    {/* Divider */}
                    <hr className="border-t border-grey-5 w-full max-w-[1040px]" />
                </div>

                {/* Deep Dive Content Section */}
                <div className="flex flex-col md:flex-row gap-12 lg:gap-28 w-full max-w-[1040px]">
                    {/* Left Sidebar / Table of Contents */}
                    <div className="hidden md:flex flex-col gap-11 w-52 shrink-0">
                        <span className="text-grey-6 text-sm font-medium uppercase tracking-widest">Content</span>
                        <div className="flex flex-col gap-6 text-grey-7">
                            <span className="text-p-7 text-xl font-medium">The Partnership</span>
                            <span className="text-base cursor-pointer hover:text-p7 transition-colors">Strategic Importance</span>
                            <span className="text-base cursor-pointer hover:text-p7 transition-colors">Institutional Benefit</span>
                        </div>
                    </div>

                    {/* Right Main Text */}
                    <div className="flex flex-col gap-16 flex-1">
                        {/* Section 1 */}
                        <div className="flex flex-col gap-8">
                            <h2 className="text-3xl font-['GC_Amelie_Promised_Demo'] text-p-7 italic">The Partnership Overview</h2>
                            <div className="flex flex-col gap-6 w-full max-w-[719px] text-[18px] font-light font-['Delight'] text-grey-7 leading-[26px] tracking-[0.01em]">
                                <p>This collaboration establishes a formalized channel for the exchange of high-fidelity genomic datasets between our institution and Kyoto University&apos;s Institute for Chemical Research. Initiated following the 2022 Global Bio-Summit, the agreement focuses on reducing the latency in data verification processes that currently hinder cross-border genetic research.</p>
                                <p>This collaboration establishes a formalized channel for the exchange of high-fidelity genomic datasets between our institution and Kyoto University&apos;s Institute for Chemical Research. Initiated following the 2022 Global Bio-Summit, the agreement focuses on reducing the latency in data verification processes that currently hinder cross-border genetic research.</p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-['GC_Amelie_Promised_Demo'] text-p-7 italic">Strategic Importance</h2>
                            <div className="flex flex-col gap-6 w-full max-w-[719px] text-[18px] font-light font-['Delight'] text-grey-7 leading-[26px] tracking-[0.01em]">
                                <p>By aligning our computational infrastructures, we address a critical bottleneck in modern oncology research: the lack of diverse, standardized control groups.</p>
                                <p>Kyoto University provides access to a unique longitudinal dataset of East Asian genomic markers, filling a significant gap in our current repository which is predominantly Western-centric. In return, we provide proprietary AI-driven analysis tools developed by our Computer Science faculty.</p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-['GC_Amelie_Promised_Demo'] text-p-7 italic">Benefits to Faculty &amp; Students</h2>
                            <div className="flex flex-col gap-6 w-full max-w-[719px] text-[18px] font-light font-['Delight'] text-grey-7 leading-[26px] tracking-[0.01em]">
                                <p>The agreement allows for the semester-long exchange of two post-doctoral fellows and four PhD candidates annually.</p>
                                <p>This mobility ensures that our next generation of researchers is fluent in global scientific protocols and cross-cultural academic navigation. Furthermore, faculty gain expedited access to Japan&apos;s K supercomputer for heavy-duty sequence modeling.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Gallery */}
                {/* Image Gallery */}
                <div className="flex flex-col gap-2.5 w-full max-w-[1040px]">
                    <div className="flex flex-col md:flex-row gap-2.5 h-auto md:h-96">
                        <div className="relative w-full md:w-[51.3%] h-64 md:h-full">
                            <Image src="/images/collage international 1.png" alt="Gallery 1" fill className="object-cover" />
                        </div>
                        <div className="relative w-full md:flex-1 h-64 md:h-full">
                            <Image src="/images/collage 2 international.png" alt="Gallery 2" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2.5 h-auto md:h-96">
                        <div className="relative w-full md:w-[58.7%] h-64 md:h-full">
                            <Image src="/images/collage 3 international.png" alt="Gallery 3" fill className="object-cover" />
                        </div>
                        <div className="relative w-full md:flex-1 h-64 md:h-full">
                            <Image src="/images/collage 4 international.png" alt="Gallery 4" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Related Engagements */}
                <div className="flex flex-col items-center gap-12 w-full max-w-[1040px]">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h2 className="text-3xl font-['GC_Amelie_Promised_Demo'] text-p-7 italic">Related International Engagements</h2>
                        <p className="w-full max-w-[520px] text-[18px] font-light font-['Delight'] leading-[26px] tracking-[0.01em] text-center text-grey-7">Explore more of our international collaborations and partnerships.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <RelatedEngagementCard
                            imageSrc="/images/related international.png"
                            tag="Delegation"
                            date="December 15, 2024"
                            location="United States"
                            title="Cancerfree Biotech Delegation Collaboration"
                        />
                        <RelatedEngagementCard
                            imageSrc="/images/related international2.png"
                            tag="Delegation"
                            date="December 15, 2024"
                            location="Switzerland"
                            title="International Medical Research Symposium 2024"
                        />
                        <RelatedEngagementCard
                            imageSrc="/images/related international3.png"
                            tag="Delegation"
                            date="December 15, 2024"
                            location="Switzerland"
                            title="International Medical Research Symposium 2024"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

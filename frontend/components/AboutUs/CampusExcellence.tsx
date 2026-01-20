"use client";

import Link from "next/link";
import Image from "next/image";

export default function CampusExcellence() {
    return (
        <section className="w-full bg-white pt-10 pb-10 relative overflow-hidden">
            {/* Container: 1440px max width, centered.
                 Snippet says: w-[1040px] left-[200px]. This implies 200px padding on left/right for 1440px width.
                 So lg:px-[200px] is correct to achieve the 1040px content width.
             */}
            <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[100px] flex flex-col md:flex-row justify-center items-start gap-6">

                {/* Image Section: w-[617px] */}
                <div className="w-full md:w-[617px] relative shadow-[0px_0px_40px_0px_rgba(0,0,0,0.25)] shrink-0">
                    <Image
                        className="w-full h-auto object-cover"
                        src="/images/campus-square.png"
                        alt="Campus Excellence"
                        width={617}
                        height={600}
                    />
                </div>

                {/* Content Section: Flex-1 */}
                <div className="flex-1 self-stretch flex flex-col justify-start items-start gap-8">
                    {/* Text Content Wrapper - simulating the h-[503px] distribution */}
                    <div className="flex flex-col gap-12 w-full">
                        {/* Title Group */}
                        <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                            <div className="self-stretch text-primary-7 text-sm font-light font-delight leading-5 tracking-wider uppercase">
                                Campus Excellence
                            </div>
                            <div className="self-stretch text-grey-8 text-3xl font-normal font-amelie italic leading-10">
                                Modern Infrastructure & Holistic Living
                            </div>
                        </div>

                        {/* Description Group */}
                        <div className="self-stretch flex flex-col justify-start items-start gap-8">
                            <p className="text-grey-8/70 text-xs font-light font-delight leading-6 tracking-tight text-justify">
                                AVMCH's 44-acre green campus delivers world-class medical education through fully equipped Wi-Fi-enabled departments, cutting-edge e-learning library, AHA-certified skills lab, extensive community health centers, 33% lush green cover with solar power sustainability, premium gym/spa facilities, vibrant cafeteria, and a 250-seat state-of-the-art auditorium—celebrating an unparalleled environment for academic excellence, holistic wellness, and societal impact.
                            </p>
                            <p className="text-grey-8/70 text-xs font-light font-delight leading-6 tracking-tight text-justify">
                                Celebrate innovation and excellence where advanced academic resources converge with vibrant community outreach and pioneering eco-friendly initiatives, empowering future healthcare leaders in a truly inspiring, transformative ecosystem that nurtures dreams into reality.
                            </p>
                        </div>
                    </div>

                    {/* Explore Button */}
                    <Link href="#" className="self-stretch h-11 px-5 py-2.5 bg-primary-6 flex justify-center items-center gap-2.5 group hover:bg-primary-7 transition-colors duration-300 mt-8 lg:mt-0">
                        <div className="flex-1 flex justify-between items-center text-grey-1">
                            <span className="text-base font-normal font-delight leading-5 tracking-tight group-hover:pl-2 transition-all">Explore Our Campus</span>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-grey-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    );
}

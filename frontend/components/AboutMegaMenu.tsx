import React from "react";
import Image from "next/image";

const AboutMegaMenu = () => {
    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 w-[1163px] h-72 pt-[13px] animate-in fade-in slide-in-from-top-2 duration-300">
            {/* 
              Outer container background and tab 
              The snippet uses absolute positioning within 1363px container.
            */}
            <div className="relative w-full h-full drop-shadow-xl">
                {/* Connector Tab (Top-aligned tiny box) */}
                <div className="w-8 h-3 left-[168px] top-[-13px] absolute bg-white outline outline-1 outline-offset-[-0.50px] outline-white z-10" />

                {/* Main Box Background */}
                <div className="w-full h-72 bg-white overflow-hidden rounded-md relative shadow-2xl border-t border-gray-100">
                    {/* Decorative element from snippet */}
                    <div className="w-80 h-4 left-[825px] top-[191.85px] absolute bg-black/5 blur-xl" />

                    {/* Inner Content Container */}
                    <div className="absolute inset-0 flex items-center justify-center p-8 pl-20">
                        {/* Inner Layout */}
                        <div className="w-full max-w-[1317px] inline-flex justify-between items-center gap-10">
                            {/* Image Section */}
                            <div className="relative w-80 h-56  overflow-hidden shrink-0 ">
                                <Image
                                    src="/images/header about img.png"
                                    alt="About AVMC"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content Columns */}
                            <div className="w-[905px] self-stretch flex justify-between items-center pt-4">

                                {/* Column 1: About */}
                                <div className="inline-flex flex-col justify-start items-center gap-6 w-32">
                                    <div className="h-6 relative text-center">
                                        <div className="text-grey-6 text-base font-normal font-delight leading-6 whitespace-nowrap">About Us</div>
                                    </div>
                                    <div className="flex flex-col justify-start items-center gap-4">
                                        <div className="cursor-pointer group transition-all">
                                            <div className="text-grey-9 text-base font-normal font-delight group-hover:text-s6 transition-colors text-center">About</div>
                                        </div>
                                        <div className="cursor-pointer group transition-all">
                                            <div className="text-grey-9 text-base font-normal font-delight group-hover:text-s6 transition-colors text-center">Alumini</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2: Leadership */}
                                <div className="inline-flex flex-col justify-start items-center gap-6 w-56">
                                    <div className="h-6 relative text-center">
                                        <div className="text-grey-6 text-base font-normal font-delight leading-6 whitespace-nowrap">Leadership & Governance</div>
                                    </div>
                                    <div className="flex flex-col justify-start items-center gap-4">
                                        <div className="cursor-pointer group transition-all">
                                            <div className="text-grey-9 text-base font-normal font-delight group-hover:text-s6 transition-colors text-center">Dean</div>
                                        </div>
                                        <div className="cursor-pointer group transition-all">
                                            <div className="text-grey-9 text-base font-normal font-delight group-hover:text-s6 transition-colors text-center">Dean medical bio-research</div>
                                        </div>
                                        <div className="cursor-pointer group transition-all">
                                            <div className="text-grey-9 text-base font-normal font-delight group-hover:text-s6 transition-colors text-center">College officials</div>
                                        </div>
                                        <div className="cursor-pointer group transition-all">
                                            <div className="text-grey-9 text-base font-normal font-delight group-hover:text-s6 transition-colors text-center">University admin</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3: Recognition */}
                                <div className="inline-flex flex-col justify-start items-center gap-6 w-40">
                                    <div className="h-6 relative text-center">
                                        <div className="text-grey-6 text-base font-normal font-delight leading-6 whitespace-nowrap">Recognition</div>
                                    </div>
                                    <div className="flex flex-col justify-start items-center gap-4">
                                        <div className="cursor-pointer group transition-all">
                                            <div className="text-grey-9 text-base font-normal font-delight group-hover:text-s6 transition-colors text-center">Accreditations</div>
                                        </div>
                                        <div className="cursor-pointer group transition-all">
                                            <div className="text-grey-9 text-base font-normal font-delight group-hover:text-s6 transition-colors text-center">Rankings</div>
                                        </div>
                                        <div className="cursor-pointer group transition-all">
                                            <div className="text-grey-9 text-base font-normal font-delight group-hover:text-s6 transition-colors text-center">Quality Assurance</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 4: Campus */}
                                <div className="inline-flex flex-col justify-start items-center gap-6 w-40">
                                    <div className="h-6 relative text-center">
                                        <div className="text-grey-6 text-base font-normal font-delight leading-6 whitespace-nowrap">Campus</div>
                                    </div>
                                    <div className="flex flex-col justify-start items-center gap-4">
                                        <div className="cursor-pointer group transition-all">
                                            <div className="text-grey-9 text-base font-normal font-delight group-hover:text-s6 transition-colors text-center">Infrastructure</div>
                                        </div>
                                        <div className="cursor-pointer group transition-all">
                                            <div className="text-grey-9 text-base font-normal font-delight group-hover:text-s6 transition-colors text-center">Hospital facilities</div>
                                        </div>
                                        <div className="cursor-pointer group transition-all">
                                            <div className="text-grey-9 text-base font-normal font-delight group-hover:text-s6 transition-colors text-center">Library</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMegaMenu;

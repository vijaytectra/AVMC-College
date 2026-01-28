"use client";

import Link from "next/link";
import Image from "next/image";

export default function HospitalServices() {
    return (
        <section className="w-full bg-p-8 text-grey-1 py-16 lg:py-20 overflow-hidden relative">
            <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[100px]"> {/* Adjusted to match above content alignment */}
                <div className="flex flex-col gap-20">
                    {/* Header Section */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6">
                        <div className="flex flex-col justify-center items-start gap-6 max-w-[561px]">
                            <h2 className="text-white text-5xl font-normal font-amelie italic leading-8">Hospital Services</h2>
                            <p className="text-grey-4/70 text-xl font-light font-delight leading-8">
                                AVMCH Hospital features 540+ beds for tertiary care.
                            </p>
                        </div>
                        {/* View More Button */}
                        <Link href="#" className="flex items-center gap-2 group">
                            <span className="text-grey-1 text-lg font-light font-delight leading-5 tracking-wide group-hover:text-white transition-colors">View more</span>
                            <div className="w-4 h-4 text-grey-1 group-hover:translate-x-1 transition-transform">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                        </Link>
                    </div>

                    {/* Cards Container */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-18 lg:gap-6">
                        {/* Card 1: Critical Care */}
                        <div className="flex flex-col justify-start items-start gap-3.5 w-full">
                            <div className="w-full h-64 lg:h-auto lg:aspect-[250/300] relative bg-grey-9">
                                <Image className="object-cover" src="/images/critical-care.png" alt="Critical Care" fill />
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                                <div className="w-full text-grey-4/70 text-sm font-light font-delight leading-5 tracking-tight">
                                    Fully equipped units for all ages.
                                </div>
                                <div className="flex flex-col justify-start items-start gap-2">
                                    <h3 className="text-grey-1 text-2xl font-normal font-delight leading-5 tracking-wide">Critical Care</h3>
                                    <p className="text-grey-1/70 text-xs font-light font-delight leading-5 tracking-tight">ICCU, ICU, PICU, NICU, Modular OT</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Super-Specialties */}
                        <div className="flex flex-col justify-start items-start gap-3.5 w-full lg:mt-24">
                            <div className="w-full h-64 lg:h-auto lg:aspect-[250/300] relative bg-grey-9">
                                <Image className="object-cover" src="/images/super-specialties.png" alt="Super-Specialties" fill />
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                                <div className="w-full text-grey-4/70 text-sm font-light font-delight leading-5 tracking-tight">
                                    Advanced dialysis, laparoscopy, lithotripsy.
                                </div>
                                <div className="flex flex-col justify-start items-start gap-2">
                                    <h3 className="text-grey-1 text-2xl font-normal font-delight leading-5 tracking-wide">Super-Specialties</h3>
                                    <p className="text-grey-1/70 text-xs font-light font-delight leading-5 tracking-tight">Cardiology, Urology, Nephrology, Surgery</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Diagnostics */}
                        <div className="flex flex-col justify-start items-start gap-3.5 w-full">
                            <div className="w-full h-64 lg:h-auto lg:aspect-[250/300] relative bg-grey-9">
                                <Image className="object-cover" src="/images/diagnostics.png" alt="Diagnostics" fill />
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                                <div className="w-full text-grey-4/70 text-sm font-light font-delight leading-5 tracking-tight">
                                    NABL virology lab, 24/7 services.
                                </div>
                                <div className="flex flex-col justify-start items-start gap-2">
                                    <h3 className="text-grey-1 text-2xl font-normal font-delight leading-5 tracking-wide">Diagnostics</h3>
                                    <p className="text-grey-1/70 text-xs font-light font-delight leading-5 tracking-tight">Cath Lab, 1.5T MRI, 124-slice CT</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4: Support */}
                        <div className="flex flex-col justify-start items-start gap-3.5 w-full lg:mt-24">
                            <div className="w-full h-64 lg:h-auto lg:aspect-[250/300] relative bg-grey-9">
                                <Image className="object-cover" src="/images/support.png" alt="Support" fill />
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                                <div className="w-full text-grey-4/70 text-sm font-light font-delight leading-5 tracking-tight">
                                    Full audiology, physio, therapy.
                                </div>
                                <div className="flex flex-col justify-start items-start gap-2">
                                    <h3 className="text-grey-1 text-2xl font-normal font-delight leading-5 tracking-wide">Support</h3>
                                    <p className="text-grey-1/70 text-xs font-light font-delight leading-5 tracking-tight">Pharmacy, Blood Bank, Rehab</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

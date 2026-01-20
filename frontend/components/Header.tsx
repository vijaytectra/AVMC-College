"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null); // Default closed

    const toggleAccordion = (title: string) => {
        setActiveAccordion(activeAccordion === title ? null : title);
    };

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="w-full flex flex-col font-inter relative">
            {/* Top Bar - Desktop & Tablet View */}
            <div className="hidden md:flex w-full bg-p-1 border-t-[10px] border-s6">
                <div className="w-full max-w-[1600px] mx-auto px-4 xl:px-8 py-3 flex justify-center xl:justify-end items-center gap-6 xl:gap-4">
                    <div className="flex justify-center items-center gap-2.5">
                        <Link href="#" className="justify-start text-grey-9 text-xs font-medium hover:underline">Alumni</Link>
                    </div>
                    <div className="hidden xl:flex justify-center items-center gap-2.5">
                        <Link href="#" className="justify-start text-grey-9 text-xs font-medium hover:underline">Career guidance</Link>
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <Link href="#" className="justify-start text-grey-9 text-xs font-medium hover:underline">International Events</Link>
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <Link href="#" className="justify-start text-grey-9 text-xs font-medium hover:underline">Collaborations</Link>
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <Link href="#" className="justify-start text-grey-9 text-xs font-medium hover:underline">Satellites centres</Link>
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <Link href="#" className="justify-start text-grey-9 text-xs font-medium hover:underline">Library</Link>
                    </div>
                    <div className="hidden xl:flex justify-center items-center gap-2.5">
                        <Link href="#" className="justify-start text-grey-9 text-xs font-medium hover:underline">Mentor mentee program</Link>
                    </div>
                    <div className="hidden xl:flex justify-center items-center gap-2.5">
                        <Link href="#" className="justify-start text-grey-9 text-xs font-medium hover:underline">Policies & SOP&apos;s</Link>
                    </div>
                    <div className="hidden xl:flex justify-center items-center gap-2.5">
                        <Link href="#" className="justify-start text-grey-9 text-xs font-medium hover:underline">Resources</Link>
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <Link href="#" className="justify-start text-grey-9 text-xs font-medium hover:underline">Other links</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-50 w-full min-h-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t-[6px] border-s6 md:border-t-0 bg-white">
                <div className="w-full max-w-[1600px] mx-auto flex h-20 items-center justify-between px-4 xl:px-8">

                    {/* --- DESKTOP VIEW --- */}

                    {/* Left: AVMC Logo (Desktop) */}
                    <div className="hidden xl:block flex-shrink-0">
                        <Link href="/">
                            <Image src="/logo/avmc_logo.png" alt="AVMC Logo" width={160} height={40} className="h-10 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Center: Navigation & Search (Desktop) */}
                    <div className="hidden xl:flex items-center gap-1">
                        <Link href="/about" className="px-1.5 py-2 text-grey-8 text-xs font-semibold hover:text-primary transition-colors whitespace-nowrap">About</Link>
                        <Link href="/constituent-institution" className="px-1.5 py-2 text-grey-8 text-xs font-semibold hover:text-primary transition-colors whitespace-nowrap">Constituent Institution</Link>
                        <Link href="/program-admission" className="px-1.5 py-2 text-grey-8 text-xs font-semibold hover:text-primary transition-colors whitespace-nowrap">Program & Admission</Link>
                        <Link href="/academic" className="px-1.5 py-2 text-grey-8 text-xs font-semibold hover:text-primary transition-colors whitespace-nowrap">Academic</Link>
                        <Link href="/hospital-services" className="px-1.5 py-2 text-grey-8 text-xs font-semibold hover:text-primary transition-colors whitespace-nowrap">Hospital Services</Link>
                        <Link href="/research-innovation" className="px-1.5 py-2 text-grey-8 text-xs font-semibold hover:text-primary transition-colors whitespace-nowrap">Research & Innovation</Link>
                        <Link href="/student-corner" className="px-1.5 py-2 text-grey-8 text-xs font-semibold hover:text-primary transition-colors whitespace-nowrap">Student corner</Link>
                        <Link href="/contact" className="px-1.5 py-2 text-grey-8 text-xs font-semibold hover:text-primary transition-colors whitespace-nowrap">Contact</Link>

                        {/* Search Icon */}
                        <div className="ml-1 p-2 hover:bg-gray-100 cursor-pointer transition-colors">
                            <Search className="w-4 h-4 text-grey-8" />
                        </div>
                    </div>

                    {/* Right: VMRF Logo (Desktop) */}
                    <div className="hidden xl:block flex-shrink-0">
                        <Image src="/logo/vmrf.svg" alt="VMRF Logo" width={180} height={44} className="h-10 w-auto object-contain" />
                    </div>


                    {/* --- MOBILE VIEW NAVBAR --- */}
                    <div className="xl:hidden w-full flex justify-between items-center">
                        {/* Left: Dual Logos */}
                        <div className="flex items-center gap-2">
                            <Link href="/">
                                <Image src="/logo/avmc_logo.png" alt="AVMC Logo" width={96} height={24} className="w-24 h-6 object-contain" />
                            </Link>
                            <Image src="/logo/vmrf.svg" alt="VMRF Logo" width={96} height={24} className="w-24 h-6 object-contain" />
                        </div>

                        {/* Right: Controls (Search + Menu) */}
                        <div className="flex items-center">
                            <div className="px-2.5 py-1.5 rounded-full border border-gray-200 flex items-center justify-between gap-3 bg-white">
                                {/* Search Icon */}
                                <div className="w-5 h-5 flex justify-center items-center">
                                    <Search className="w-3.5 h-3.5 text-grey-8" />
                                </div>

                                {/* Menu Icon (Hamburger + specific lines) */}
                                <div className="w-5 h-5 relative flex flex-col justify-center gap-[4px] cursor-pointer" onClick={toggleMenu}>
                                    <div className="w-full h-[2px] bg-grey-8 rounded-full"></div>
                                    <div className="w-1/2 ml-auto h-[2px] bg-grey-8 rounded-full"></div>
                                    <div className="w-full h-[2px] bg-grey-8 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- MOBILE MENU OVERLAY & CONTENT --- */}
            {isMobileMenuOpen && (
                <>
                    {/* Backdrop for closing on outside click */}
                    <div className="fixed inset-0 z-30 bg-black/20" onClick={toggleMenu} />

                    {/* Menu Panel */}
                    <div className="fixed top-[105px] left-[35%] right-[15px] bottom-0 z-40 bg-white overflow-y-auto pb-20 shadow-[0px_0px_10px_rgba(0,0,0,0.1)] fade-in-menu border border-gray-100">
                        <div className="w-full flex flex-col px-4 pt-4 pb-12 gap-14">

                            {/* Navigation Links */}
                            <div className="flex flex-col gap-5 w-full">

                                {/* Standard Links Item Group */}
                                <div className="flex flex-col gap-3 w-full">

                                    {/* About */}
                                    <Link href="/about" className="w-full p-2.5 flex justify-between items-center group" onClick={toggleMenu}>
                                        <span className="text-gray-800 text-sm font-medium font-['DM_Sans']">About</span>
                                        <div className="w-1.5 h-3 bg-gray-400 rotate-90" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
                                    </Link>

                                    {/* Constituent Institution */}
                                    <Link href="/constituent-institution" className="w-full p-2.5 flex justify-between items-center group" onClick={toggleMenu}>
                                        <span className="text-gray-800 text-sm font-medium font-['DM_Sans']">Constituent Institution</span>
                                        <div className="w-1.5 h-3 bg-gray-400 rotate-90" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
                                    </Link>

                                    {/* Programs & Admissions (Accordion) */}
                                    <div className="w-full flex flex-col">
                                        <div
                                            className="w-full p-2.5 flex justify-between items-center cursor-pointer"
                                            onClick={() => toggleAccordion("Programs & Admissions")}
                                        >
                                            <span className="text-gray-800 text-sm font-medium font-['DM_Sans']">Programs & Admissions</span>
                                            {/* Dynamic Arrow */}
                                            <div
                                                className={`w-1.5 h-3 bg-gray-400 transition-transform duration-300 ${activeAccordion === "Programs & Admissions" ? '-rotate-90' : 'rotate-90'}`}
                                                style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
                                            />
                                        </div>

                                        {/* Sub Menu */}
                                        {activeAccordion === "Programs & Admissions" && (
                                            <div className="flex flex-col gap-4 pl-2.5 pr-2.5 pt-2 pb-2">

                                                {/* Undergraduate */}
                                                <div className="pl-2.5 pr-2.5 flex flex-col gap-2.5">
                                                    <div className="text-[#2D2A74] text-base font-medium font-['DM_Sans']">Undergraduate</div>
                                                    <div className="pl-2.5 border-l border-gray-400 flex flex-col gap-4">
                                                        <Link href="#" className="text-[#525252] text-sm font-normal font-['DM_Sans']" onClick={toggleMenu}>MBBS</Link>
                                                        <Link href="#" className="text-[#525252] text-sm font-normal font-['DM_Sans']" onClick={toggleMenu}>B.Sc Nursing</Link>
                                                        <Link href="#" className="text-[#525252] text-sm font-normal font-['DM_Sans']" onClick={toggleMenu}>B. Optom</Link>
                                                        <Link href="#" className="text-[#525252] text-sm font-normal font-['DM_Sans']" onClick={toggleMenu}>Allied Health Scieneces</Link>
                                                    </div>
                                                </div>

                                                {/* Postgraduate */}
                                                <div className="pl-2.5 pr-2.5 flex flex-col gap-2.5">
                                                    <div className="text-[#2D2A74] text-base font-medium font-['DM_Sans']">Postgraduate</div>
                                                    <div className="pl-2.5 border-l border-gray-400 flex flex-col gap-4">
                                                        <Link href="#" className="text-[#525252] text-sm font-normal font-['DM_Sans']" onClick={toggleMenu}>MD / MS</Link>
                                                        <Link href="#" className="text-[#525252] text-sm font-normal font-['DM_Sans']" onClick={toggleMenu}>M.Sc Nursing</Link>
                                                        <Link href="#" className="text-[#525252] text-sm font-normal font-['DM_Sans']" onClick={toggleMenu}>MPT</Link>
                                                        <Link href="#" className="text-[#525252] text-sm font-normal font-['DM_Sans']" onClick={toggleMenu}>Fellowship Courses</Link>
                                                    </div>
                                                </div>

                                                {/* Admissions */}
                                                <div className="pl-2.5 pr-2.5 flex flex-col gap-2.5">
                                                    <div className="text-[#2D2A74] text-base font-medium font-['DM_Sans']">Admissions</div>
                                                    <div className="pl-2.5 border-l border-gray-400 flex flex-col gap-4">
                                                        <Link href="#" className="text-[#525252] text-sm font-normal font-['DM_Sans']" onClick={toggleMenu}>Entrance Exams</Link>
                                                        <Link href="#" className="text-[#525252] text-sm font-normal font-['DM_Sans']" onClick={toggleMenu}>Fee Structure</Link>
                                                        <Link href="#" className="text-[#525252] text-sm font-normal font-['DM_Sans']" onClick={toggleMenu}>Scholarships</Link>
                                                        <Link href="#" className="text-[#525252] text-sm font-normal font-['DM_Sans']" onClick={toggleMenu}>International Students</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Academic */}
                                    <Link href="/academic" className="w-full p-2.5 flex justify-between items-center group" onClick={toggleMenu}>
                                        <span className="text-gray-800 text-sm font-medium font-['DM_Sans']">Academic</span>
                                        <div className="w-1.5 h-3 bg-gray-400 rotate-90" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
                                    </Link>

                                    {/* Hospital Services */}
                                    <Link href="/hospital-services" className="w-full p-2.5 flex justify-between items-center group" onClick={toggleMenu}>
                                        <span className="text-gray-800 text-sm font-medium font-['DM_Sans']">Hospital Services</span>
                                        <div className="w-1.5 h-3 bg-gray-400 rotate-90" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
                                    </Link>

                                    {/* Research & Innovation */}
                                    <Link href="/research-innovation" className="w-full p-2.5 flex justify-between items-center group" onClick={toggleMenu}>
                                        <span className="text-gray-800 text-sm font-medium font-['DM_Sans']">Research & Innovation</span>
                                        <div className="w-1.5 h-3 bg-gray-400 rotate-90" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
                                    </Link>

                                    {/* Student corner */}
                                    <Link href="/student-corner" className="w-full p-2.5 flex justify-between items-center group" onClick={toggleMenu}>
                                        <span className="text-gray-800 text-sm font-medium font-['DM_Sans']">Student corner</span>
                                        <div className="w-1.5 h-3 bg-gray-400 rotate-90" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
                                    </Link>

                                    {/* Contact */}
                                    <Link href="/contact" className="w-full p-2.5 flex justify-start items-center group" onClick={toggleMenu}>
                                        <span className="text-gray-800 text-sm font-medium font-['DM_Sans']">Contact</span>
                                    </Link>

                                </div>

                                {/* Footer Links & Socials */}
                                <div className="flex flex-col gap-2.5 p-2.5 w-full max-w-xs mt-4">
                                    <Link href="#" className="flex items-center gap-2.5 text-gray-800 text-sm font-medium font-['DM_Sans']" onClick={toggleMenu}>Career guidance</Link>
                                    <Link href="#" className="flex items-center gap-2.5 text-gray-800 text-sm font-medium font-['DM_Sans']" onClick={toggleMenu}>Mentor mentee program</Link>
                                    <Link href="#" className="flex items-center gap-2.5 text-gray-800 text-sm font-medium font-['DM_Sans']" onClick={toggleMenu}>Policies & SOP&apos;s</Link>
                                    <Link href="#" className="flex items-center gap-2.5 text-gray-800 text-sm font-medium font-['DM_Sans']" onClick={toggleMenu}>Resources</Link>

                                    <div className="flex justify-between items-center w-full mt-2">
                                        <span className="text-gray-800 text-sm font-medium font-['DM_Sans']">Other links</span>
                                        <div className="w-1.5 h-3 bg-gray-400 rotate-90" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
                                    </div>
                                </div>

                                {/* Social Icons - Based on provided HTML block */}
                                <div className="w-full flex justify-between items-center px-2.5 mt-4 max-w-[200px]">
                                    <div className="w-[4px] h-[5px] bg-[#2D2A74]"></div> {/* Spacer/Dot? */}

                                    {/* Facebook/Social Icon Placeholder */}
                                    <div className="w-8 h-8 relative flex justify-center items-center bg-[#2D2A74] text-white rounded-sm">
                                        {/* Using simple placeholder icon as per snippet */}
                                        <div className="w-full h-full absolute inset-0 bg-[#2D2A74]"></div>
                                    </div>

                                    <div className="w-1.5 h-1.5 bg-[#2D2A74] rotate-45"></div>

                                    <div className="w-8 h-8"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

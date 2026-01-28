"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";

export default function InternationalEngagementsPage() {
    const engagements = [
        {
            type: "Conference",
            date: "December 15, 2024",
            title: "Cancerfree Biotech Delegation Collaboration",
            location: "United States",
            partner: "WHO",
            attendees: "150+ Attendees",
            duration: "3 Days",
            image: "/images/cancerfree.png",
            slug: "cancerfree-biotech-delegation-collaboration"
        },
        {
            type: "Symposium",
            date: "November 10, 2024",
            title: "International Medical Research Symposium 2024",
            location: "Switzerland",
            partner: "Medical Board",
            attendees: "200+ Attendees",
            duration: "2 Days",
            image: "/images/cancerfree2.png",
            slug: "international-medical-research-symposium-2024"
        },
        {
            type: "Delegation",
            date: "October 05, 2024",
            title: "Global Health Summit Participation",
            location: "Germany",
            partner: "Health Ministry",
            attendees: "50+ Delegates",
            duration: "5 Days",
            image: "/images/cancerfree3.png",
            slug: "global-health-summit-participation"
        },
        {
            type: "Exchange",
            date: "September 20, 2024",
            title: "Student Exchange Program - Clinical Rotation",
            location: "UK",
            partner: "Cambridge Univ",
            attendees: "12 Students",
            duration: "4 Weeks",
            image: "/images/cancerfree4.png",
            slug: "student-exchange-program"
        },
        {
            type: "Conference",
            date: "August 15, 2024",
            title: "Tropical Diseases Research Conference",
            location: "Brazil",
            partner: "Research Inst.",
            attendees: "300+ Attendees",
            duration: "4 Days",
            image: "/images/cancerfree.png",
            slug: "tropical-diseases-research-conference"
        },
        {
            type: "Workshop",
            date: "July 01, 2024",
            title: "Advanced Surgical Techniques Workshop",
            location: "Japan",
            partner: "Tokyo Med",
            attendees: "40 Surgeons",
            duration: "3 Days",
            image: "/images/cancerfree2.png",
            slug: "advanced-surgical-techniques-workshop"
        },
        {
            type: "Delegation",
            date: "June 12, 2024",
            title: "Asian Medical Delegation Visit",
            location: "Singapore",
            partner: "NUH",
            attendees: "20 Delegates",
            duration: "2 Days",
            image: "/images/cancerfree3.png",
            slug: "asian-medical-delegation-visit"
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const [selectedYear, setSelectedYear] = useState("All Year");
    const [selectedType, setSelectedType] = useState("All Type");
    const [selectedCountry, setSelectedCountry] = useState("All Country");

    const engagementsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const itemsPerPage = 6;

    const uniqueYears = ["All Year", ...Array.from(new Set(engagements.map(e => e.date.split(', ')[1])))];
    const uniqueTypes = ["All Type", ...Array.from(new Set(engagements.map(e => e.type)))];
    const uniqueCountries = ["All Country", ...Array.from(new Set(engagements.map(e => e.location)))];

    const filteredEngagements = engagements.filter(engagement => {
        const matchesSearch =
            engagement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            engagement.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            engagement.type.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesYear = selectedYear === "All Year" || engagement.date.includes(selectedYear);
        const matchesType = selectedType === "All Type" || engagement.type === selectedType;
        const matchesCountry = selectedCountry === "All Country" || engagement.location === selectedCountry;

        return matchesSearch && matchesYear && matchesType && matchesCountry;
    });

    const totalPages = Math.ceil(filteredEngagements.length / itemsPerPage);
    const currentEngagements = filteredEngagements.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        if (engagementsRef.current) {
            engagementsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };



    return (
        <div className="w-full relative flex flex-col bg-white min-h-screen font-['Delight']">
            {/* Hero Section */}
            <div className="w-full relative overflow-hidden">
                <div className="w-full h-[550px] relative">
                    <Image
                        className="object-cover absolute"
                        src="/images/international bg hero.png"
                        alt="Hero Background"
                        fill
                    />
                    <div className="absolute inset-0 bg-slate-300 opacity-0" />
                    {/* Hero Content Overlay */}
                    <div className="absolute inset-0 flex justify-center items-center px-4">
                        <div className="w-full max-w-[709px] min-h-[231px] border-l-[11px] border-l-[#DC292B] border-y border-white/40 bg-white/10 backdrop-blur-md relative flex flex-col justify-start items-center pt-9 gap-8">
                            <div className="w-full flex flex-col items-center gap-2">
                                <div className="text-center text-p-8 text-[48px] font-normal font-['GC_Amelie_Promised_Demo'] italic leading-tight">
                                    International Engagements
                                </div>
                                <div className="text-center text-Grey-9 text-sm font-normal font-['Delight'] uppercase tracking-[0.84px]">
                                    <Link href="/" className="hover:underline">home</Link> &gt; <Link href="/about" className="hover:underline">About</Link> &gt; International Engagements
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-7">
                                <div
                                    className="w-full md:w-[317px] h-12 bg-p-7 flex justify-center items-center gap-2.5 cursor-pointer hover:opacity-90"
                                    onClick={() => engagementsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <div className="text-grey-1 text-base font-normal font-['Delight'] tracking-[0.32px]">
                                        Explore Partnerships
                                    </div>
                                </div>
                                <div
                                    className="w-full md:w-auto h-12 px-5 outline outline-[0.50px] outline-offset-[-0.50px] outline-p-8 flex justify-center items-center gap-2.5 cursor-pointer hover:bg-p-8 hover:text-white transition-colors group"
                                    onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <div className="text-p-8 group-hover:text-white text-base font-normal font-['Delight'] tracking-[0.32px] whitespace-nowrap">
                                        Contact International Office
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Container with Side Padding */}
            <div className="w-full px-4 md:px-16 lg:px-[150px] pb-24">
                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:flex lg:justify-center items-start gap-8 lg:gap-14 mt-16">
                    <div className="flex flex-col justify-start items-center gap-4 lg:gap-9">
                        <div className="w-14 h-14 p-2.5 bg-p-2 inline-flex justify-center items-center gap-2.5">
                            <Image src="/icons/active collaborations icons.svg" alt="Active Collaborations" width={32} height={32} className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col justify-start items-center gap-2 lg:gap-4">
                            <div className="text-center justify-center text-p-7 text-2xl lg:text-3xl font-medium font-['Delight'] uppercase tracking-widest">
                                45+
                            </div>
                            <div className="text-center justify-center text-grey-7/60 text-xs lg:text-sm font-normal font-['Delight'] tracking-wide">
                                Active Collaborations
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-4 lg:gap-9">
                        <div className="w-14 h-14 p-2.5 bg-p-2 inline-flex justify-center items-center gap-2.5">
                            <Image src="/icons/years of engagement icon.svg" alt="Years of Engagement" width={32} height={32} className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col justify-start items-center gap-2 lg:gap-4">
                            <div className="text-center justify-center text-p-7 text-2xl lg:text-3xl font-medium font-['Delight'] uppercase tracking-widest">
                                15+
                            </div>
                            <div className="text-center justify-center text-grey-7/60 text-xs lg:text-sm font-normal font-['Delight'] tracking-wide">
                                Years of Engagement
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-4 lg:gap-9">
                        <div className="w-14 h-14 p-2.5 bg-p-2 inline-flex justify-center items-center gap-2.5">
                            <Image src="/icons/conference attended.svg" alt="Conferences Attended" width={32} height={32} className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col justify-start items-center gap-2 lg:gap-4">
                            <div className="text-center justify-center text-p-7 text-2xl lg:text-3xl font-medium font-['Delight'] uppercase tracking-widest">
                                120+
                            </div>
                            <div className="text-center justify-center text-grey-7/60 text-xs lg:text-sm font-normal font-['Delight'] tracking-wide">
                                Conferences Attended
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-4 lg:gap-9">
                        <div className="w-14 h-14 p-2.5 bg-p-2 inline-flex justify-center items-center gap-2.5">
                            <Image src="/icons/partner countries.svg" alt="Partner Countries" width={32} height={32} className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col justify-start items-center gap-2 lg:gap-4">
                            <div className="text-center justify-center text-p-7 text-2xl lg:text-3xl font-medium font-['Delight'] uppercase tracking-widest">
                                28
                            </div>
                            <div className="text-center justify-center text-grey-7/60 text-xs lg:text-sm font-normal font-['Delight'] tracking-wide">
                                Partner Countries
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlights Section */}
                <div className="w-full flex flex-col items-center gap-6 mt-20">
                    <div className="text-center justify-center text-grey-7/50 text-sm font-normal font-['Delight'] tracking-[0.17em]">
                        Highlights
                    </div>
                    <div className="flex flex-col justify-start items-center gap-0 max-w-[601px]">
                        <div className="text-center justify-center text-p-7 text-[40px] font-normal font-['GC_Amelie_Promised_Demo'] italic">
                            Featured International Engagements
                        </div>
                        <div className="self-stretch text-center justify-center text-grey-7/60 text-sm font-normal font-['Delight'] tracking-wide">
                            Explore our most impactful recent collaborations that are shaping the future of <br />medical education and healthcare innovation.
                        </div>
                    </div>
                </div>

                {/* Featured Cards Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start mt-16 gap-8 w-full">
                    {/* Card 1 */}
                    <div className="w-full lg:flex-1 bg-white inline-flex flex-col justify-start items-start shadow-sm hover:shadow-md transition-shadow">
                        <div className="self-stretch h-64 relative overflow-hidden group">
                            <Image
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                src="/images/featured 1.png"
                                alt="placeholder"
                                fill
                            />
                            <div className="p-2.5 left-[15px] top-[15px] absolute bg-orange-50 outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-2.5">
                                <div className="justify-center text-p-6 text-xs font-medium font-['Delight'] leading-5 tracking-wide">
                                    Delegation
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch p-6 flex flex-col justify-start items-start gap-3 border border-t-0 border-gray-100">
                            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                                <div className="self-stretch inline-flex justify-between items-center">
                                    <div className="flex justify-start items-center gap-1">
                                        <Calendar className="w-4 h-4 text-grey-8" />
                                        <div className="justify-center text-Grey-8 text-xs font-normal font-['Delight'] tracking-wide">
                                            December 15, 2024
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center gap-1">
                                        <MapPin className="w-4 h-4 text-grey-8" />
                                        <div className="justify-center text-Grey-8 text-xs font-normal font-['Delight'] tracking-wide">
                                            United States
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-center text-Grey-9 text-base font-normal font-['Delight'] leading-6 tracking-wide">
                                    Cancerfree Biotech Delegation Collaboration
                                </div>
                            </div>
                            <div className="self-stretch inline-flex justify-between items-center mt-4">
                                <div className="justify-center text-p-7 text-xs font-normal font-['Delight'] tracking-wide">
                                    View Details
                                </div>
                                <Image src="/images/arrow_forward view details.svg" alt="Arrow" width={20} height={20} />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full lg:flex-1 bg-white inline-flex flex-col justify-start items-start shadow-sm hover:shadow-md transition-shadow">
                        <div className="self-stretch h-64 relative overflow-hidden group">
                            <Image
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                src="/images/featured 2.png"
                                alt="placeholder"
                                fill
                            />
                            <div className="p-2.5 left-[15px] top-[15px] absolute bg-orange-50 outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-2.5">
                                <div className="justify-center text-p-6 text-xs font-medium font-['Delight'] leading-5 tracking-wide">
                                    Delegation
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch p-6 flex flex-col justify-start items-start gap-3 border border-t-0 border-gray-100">
                            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                                <div className="self-stretch inline-flex justify-between items-center">
                                    <div className="flex justify-start items-center gap-1">
                                        <Calendar className="w-4 h-4 text-grey-8" />
                                        <div className="justify-center text-Grey-8 text-xs font-normal font-['Delight'] tracking-wide">
                                            December 15, 2024
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center gap-1">
                                        <MapPin className="w-4 h-4 text-grey-8" />
                                        <div className="justify-center text-Grey-8 text-xs font-normal font-['Delight'] tracking-wide">
                                            Switzerland
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-center text-Grey-9 text-base font-normal font-['Delight'] leading-6 tracking-wide">
                                    International Medical Research Symposium 2024
                                </div>
                            </div>
                            <Link href="/about/international-engagements/international-medical-research-symposium-2024" className="self-stretch inline-flex justify-between items-center mt-4 cursor-pointer hover:opacity-70 transition-opacity">
                                <div className="justify-center text-p-7 text-xs font-normal font-['Delight'] tracking-wide">
                                    View Details
                                </div>
                                <Image src="/images/arrow_forward view details.svg" alt="Arrow" width={20} height={20} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* All Engagements Section */}
            <div
                className="w-full flex flex-col items-center gap-10 py-[70px] bg-cover bg-top min-h-[800px]"
                style={{ backgroundImage: 'url("/images/paper bg for car.png")' }}
                ref={engagementsRef}
            >
                <div className="w-full flex flex-col items-center gap-10">
                    <div className="w-full px-4 md:px-12 lg:px-[100px] flex flex-col items-center gap-5">
                        {/* Header Card - Matching OpenPositions Style */}
                        <div className="w-full h-auto md:h-52 relative bg-p-7 rounded-xl overflow-hidden flex flex-col md:block p-6 md:p-0">
                            {/* Content Group */}
                            <div className="relative md:absolute md:w-[600px] lg:w-[648px] md:left-12 lg:left-[100px] md:top-1/2 md:-translate-y-1/2 flex flex-col justify-start items-start gap-6 z-10 p-4 md:p-0">
                                <div className="self-stretch justify-start text-p-1 text-3xl md:text-3xl lg:text-4xl font-normal font-gc-amelie italic leading-[40px] md:leading-[56px] mt-0 md:mt-3">All International Engagements</div>
                                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                                    {/* Search Bar */}
                                    <div className="self-stretch bg-white inline-flex justify-start items-center p-0.5 ">
                                        <div className="p-2.5 rounded-[100px] flex justify-start items-center gap-2.5">
                                            <div className="w-6 h-6 p-[3px] flex justify-center items-center opacity-50">
                                                <Search size={16} className="text-grey-8" />
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Search Engagements..."
                                            value={searchQuery}
                                            onChange={(e) => {
                                                setSearchQuery(e.target.value);
                                                setCurrentPage(1);
                                            }}
                                            className="w-52 justify-start text-grey-8 text-sm font-light font-delight leading-5 tracking-wide outline-none placeholder:text-grey-8 bg-transparent"
                                        />
                                    </div>
                                    {/* Filters */}
                                    <div className="flex flex-col justify-start items-end gap-6">
                                        <div className="self-stretch inline-flex flex-wrap justify-start items-center gap-6">
                                            {/* Year Filter */}
                                            <div className="relative group">
                                                <select
                                                    value={selectedYear}
                                                    onChange={(e) => {
                                                        setSelectedYear(e.target.value);
                                                        setCurrentPage(1);
                                                    }}
                                                    className="h-8 pl-5 pr-10 py-[5px] bg-p-7 outline outline-[0.50px] outline-offset-[-0.50px] outline-p-4 text-grey-4 text-base font-normal font-dm-sans appearance-none cursor-pointer hover:bg-p-6 transition-colors rounded-none"
                                                >
                                                    {uniqueYears.map(year => (
                                                        <option key={year} value={year} className="bg-white text-black">{year}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown size={16} className="text-grey-1 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                            </div>

                                            {/* Country Filter Filter */}
                                            <div className="relative group">
                                                <select
                                                    value={selectedCountry}
                                                    onChange={(e) => {
                                                        setSelectedCountry(e.target.value);
                                                        setCurrentPage(1);
                                                    }}
                                                    className="h-8 pl-5 pr-10 py-[5px] bg-p-7 outline outline-[0.50px] outline-offset-[-0.50px] outline-p-4 text-grey-4 text-base font-normal font-dm-sans appearance-none cursor-pointer hover:bg-p-6 transition-colors rounded-none"
                                                >
                                                    {uniqueCountries.map(country => (
                                                        <option key={country} value={country} className="bg-white text-black">{country}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown size={16} className="text-grey-1 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                            </div>

                                            {/* Type Filter */}
                                            <div className="relative group">
                                                <select
                                                    value={selectedType}
                                                    onChange={(e) => {
                                                        setSelectedType(e.target.value);
                                                        setCurrentPage(1);
                                                    }}
                                                    className="h-8 pl-5 pr-10 py-[5px] bg-p-7 outline outline-[0.50px] outline-offset-[-0.50px] outline-p-4 text-grey-4 text-base font-normal font-dm-sans appearance-none cursor-pointer hover:bg-p-6 transition-colors rounded-none"
                                                >
                                                    {uniqueTypes.map(type => (
                                                        <option key={type} value={type} className="bg-white text-black">{type}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown size={16} className="text-grey-1 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Images */}
                            <div className="hidden md:block absolute left-0 top-0 h-full w-[355px] pointer-events-none z-0">
                                <Image src="/images/open positions 1.png" alt="Decorative Left" fill className="object-cover " />
                            </div>
                            <div className="hidden md:block absolute left-[150px] bottom-0 h-[100px] w-[170px] pointer-events-none z-0">
                                <Image src="/images/open position 2.png" alt="Decorative Right Bottom" fill className="object-contain " />
                            </div>
                            <div className="hidden md:block absolute right-0 top-[-36px] h-[300px] w-[300px] pointer-events-none z-0">
                                <Image src="/images/open position 3.png" alt="Decorative Right Bottom" fill className="object-contain " />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-full max-w-[1241px] px-4 md:px-16 lg:px-[150px]">
                    <div className="mb-6">
                        <div className="text-grey-8 text-sm font-delight font-light tracking-[0.56px]">
                            Showing {filteredEngagements.length} engagements
                        </div>
                    </div>

                    {/* List Items (Grid/Stack) */}
                    <div className="flex flex-col gap-6 w-full items-center">
                        {currentEngagements.map((item, index) => (
                            <div key={index} className="w-full max-w-[1040px] bg-white flex flex-col md:flex-row items-start relative shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-full md:w-[350px] h-48 md:h-[250px] relative overflow-hidden flex-shrink-0">
                                    <Image className="object-cover" src={item.image} alt="placeholder" fill />
                                </div>
                                <div className="flex-1 p-6 h-auto md:h-[250px] flex flex-col justify-between w-full">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4 text-grey-7/60" />
                                                <div className="text-grey-7/80 text-xs font-normal font-['Delight'] tracking-[0.72px]">{item.date}</div>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4 text-grey-7/60" />
                                                <div className="text-grey-7 text-xs font-normal font-['Delight'] tracking-[0.72px]">{item.location}</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-grey-9 text-base font-normal font-['Delight'] leading-6 tracking-[0.96px]">
                                                {item.title}
                                            </h3>
                                            <p className="text-grey-7/60 text-sm font-normal font-['Delight'] leading-6 tracking-[0.84px]">
                                                AVMC faculty presented groundbreaking research on tropical diseases at this prestigious international symposium in Geneva.
                                            </p>
                                        </div>
                                    </div>
                                    <Link href={`/about/international-engagements/${item.slug}`} className="flex justify-between items-center w-full mt-4 md:mt-0 cursor-pointer hover:opacity-70 transition-opacity">
                                        <span className="text-p-7 text-sm font-normal font-['Delight'] tracking-[0.84px]">View Details</span>
                                        <Image src="/images/arrow_forward view details.svg" alt="Arrow" width={20} height={20} />
                                    </Link>
                                </div>
                                <div className="absolute top-[18px] left-[22px] bg-[#F9F6EE] px-2.5 py-1 flex justify-center items-center">
                                    <span className="text-p-6 text-xs font-medium font-['Delight'] tracking-[0.72px]">{item.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {filteredEngagements.length > itemsPerPage && (
                        <div className="w-full flex justify-center items-center gap-2 mt-6">
                            <button
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className={`w-8 h-8 relative outline outline-1 outline-offset-[-1px] flex justify-center items-center transition-colors ${currentPage === 1 ? 'bg-grey-4 outline-grey-3 cursor-not-allowed' : 'bg-white outline-zinc-200 hover:bg-gray-50'}`}
                            >
                                <ChevronLeft size={16} className={currentPage === 1 ? 'text-grey-6' : 'text-grey-8'} />
                            </button>

                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`w-8 h-8 relative rounded outline outline-1 outline-offset-[-1px] flex justify-center items-center overflow-hidden transition-colors ${currentPage === i + 1 ? 'bg-white outline-p-7' : 'bg-white outline-grey-4 hover:bg-gray-50'}`}
                                >
                                    <span className={`text-sm leading-5 ${currentPage === i + 1 ? 'text-p-7 font-bold' : 'text-grey-8 font-normal font-delight'}`}>
                                        {i + 1}
                                    </span>
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className={`w-8 h-8 relative outline outline-1 outline-offset-[-1px] flex justify-center items-center transition-colors ${currentPage === totalPages ? 'bg-grey-4 outline-grey-3 cursor-not-allowed' : 'bg-white outline-zinc-200 hover:bg-gray-50'}`}
                            >
                                <ChevronRight size={16} className={currentPage === totalPages ? 'text-grey-6' : 'text-grey-8'} />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Contact/CTA Section (Matching CareerCTA Style) */}
            <div className="w-full px-4 md:px-16 lg:px-[150px] pb-32 pt-24" ref={contactRef}>
                <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-[1040px] h-auto min-h-[363px]">
                        {/* Back Border (Offset) */}
                        <div
                            className="absolute inset-0 translate-y-[14px] -translate-x-[14px] border-2 border-p-5 rounded-tr-[44px] rounded-br-[44px] rounded-bl-[44px] pointer-events-none"
                        />
                        {/* Front Border (Main Box) */}
                        <div
                            className="absolute inset-0 border-2 border-p-5 rounded-tr-[44px] rounded-br-[44px] rounded-bl-[44px] bg-white pointer-events-none"
                        />

                        {/* Content Container */}
                        <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between items-stretch py-10 px-6 md:px-12 lg:px-[80px] gap-10 md:gap-14 lg:gap-20">
                            {/* Section 1: Contact */}
                            <div className="flex flex-col justify-center gap-11 w-full flex-1">
                                <div className="flex flex-col gap-5">
                                    <h3 className="text-p-8 text-2xl font-medium font-['Delight'] tracking-[0.96px] whitespace-normal lg:whitespace-nowrap">Contact International Affairs</h3>
                                    <p className="text-grey-7/60 text-sm font-['Delight'] tracking-[0.56px]">Reach out to our international affairs office for partnership inquiries.</p>
                                </div>
                                <div className="w-fit px-5 py-2.5 outline outline-1 outline-p-7 flex justify-center items-center cursor-pointer hover:bg-p-7 hover:text-white transition-colors">
                                    <span className="text-p-7 hover:text-white text-base font-normal font-['Delight'] tracking-[0.32px]">Get in touch</span>
                                </div>
                            </div>

                            {/* Section 2: Explore */}
                            <div className="flex flex-col justify-center gap-11 w-full flex-1">
                                <div className="flex flex-col gap-5">
                                    <h3 className="text-p-8 text-2xl font-medium font-['Delight'] tracking-[0.96px] whitespace-normal lg:whitespace-nowrap">Explore Research Collaborations</h3>
                                    <p className="text-grey-7/60 text-sm font-['Delight'] tracking-[0.56px]">Discover ongoing research projects open for international collaboration.</p>
                                </div>
                                <div className="w-fit px-5 py-2.5 outline outline-1 outline-p-7 flex justify-center items-center cursor-pointer hover:bg-p-7 hover:text-white transition-colors">
                                    <span className="text-p-7 hover:text-white text-base font-normal font-['Delight'] tracking-[0.32px]">View Research</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

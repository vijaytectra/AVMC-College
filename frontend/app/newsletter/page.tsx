"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import NewsletterCard from "@/components/NewsletterCard";
import { newsletters } from "./data";

export default function NewsletterPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [isMonthOpen, setIsMonthOpen] = useState(false);
    const [isYearOpen, setIsYearOpen] = useState(false);

    const itemsPerPage = 9; // Display 9 items per page (3x3 grid)
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Extract unique Years
    const years = Array.from(new Set(newsletters.map(item => {
        const parts = item.date.split(" ");
        return parts[parts.length - 1]; // Last part is year
    }))).sort().reverse();

    // Extract unique Months/Periods (everything before the year)
    const months = Array.from(new Set(newsletters.map(item => {
        const parts = item.date.split(" ");
        return parts.slice(0, parts.length - 1).join(" ");
    }))).sort();

    const filteredNewsletters = newsletters.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesYear = selectedYear ? item.date.includes(selectedYear) : true;
        const matchesMonth = selectedMonth ? item.date.includes(selectedMonth) : true;
        return matchesSearch && matchesYear && matchesMonth;
    });

    const totalPages = Math.ceil(filteredNewsletters.length / itemsPerPage);
    const currentItems = filteredNewsletters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const toggleMonthDropdown = () => {
        setIsMonthOpen(!isMonthOpen);
        setIsYearOpen(false);
    };

    const toggleYearDropdown = () => {
        setIsYearOpen(!isYearOpen);
        setIsMonthOpen(false);
    };

    const selectMonth = (month: string) => {
        setSelectedMonth(month === selectedMonth ? "" : month);
        setIsMonthOpen(false);
        setCurrentPage(1);
    };

    const selectYear = (year: string) => {
        setSelectedYear(year === selectedYear ? "" : year);
        setIsYearOpen(false);
        setCurrentPage(1);
    };

    return (
        <div className="w-full flex flex-col items-center bg-white min-h-screen">

            {/* Hero Section */}
            <div className="w-full relative flex items-center justify-center overflow-hidden h-[300px] md:h-[500px] xl:h-[600px]">
                {/* Background Image */}
                <Image
                    src="/images/newsletter bg.png"
                    alt="Newsletter Background"
                    className="object-cover object-center"
                    fill
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 z-[5] xl:hidden" />

                {/* Hero Content Card */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="relative w-[90%] md:w-[398px] h-[149px] pl-8 border-y border-white border-l-[11px] border-l-s6 bg-black/20 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4">
                        <h1 className="text-white text-3xl md:text-[48px] font-normal font-gc-amelie italic leading-[1] tracking-[-0.01em] text-center drop-shadow-lg whitespace-nowrap">
                            News Letter
                        </h1>
                        <p className="text-grey-2 text-xs md:text-sm font-normal font-delight uppercase tracking-[0.10em] text-center drop-shadow-md shadow-black">
                            HOME &gt;NEWSLETTER
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div ref={containerRef} className="w-full px-4 md:px-8 xl:px-[200px] py-16 flex flex-col gap-12">

                {/* Search & Filter Bar */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 relative z-20">
                    {/* Search */}
                    <div className="w-full flex-1 h-12 px-6 py-[5px] bg-white border border-neutral-300 flex items-center gap-2.5 shadow-sm md:shadow-none">
                        <div className="w-6 h-6 p-[3px] flex justify-center items-center relative">
                            <Image src="/icons/news search icon.svg" alt="Search" width={16} height={16} className="object-contain" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full outline-none text-neutral-400 font-delight placeholder:text-neutral-400 text-base"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">

                        {/* Months Filter */}
                        <div className="relative w-full md:w-56">
                            <div
                                onClick={toggleMonthDropdown}
                                className="w-full h-12 px-4 py-[5px] bg-white border border-neutral-300 flex justify-between items-center cursor-pointer group hover:bg-gray-50 md:shadow-none"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 flex justify-center items-center relative">
                                        <Image src="/icons/news month icon.svg" alt="Month" width={20} height={20} className="object-contain" />
                                    </div>
                                    <span className={`${selectedMonth ? 'text-violet-950 font-medium' : 'text-neutral-400'} text-base font-normal font-delight tracking-tight group-hover:text-neutral-600`}>
                                        {selectedMonth || "Months"}
                                    </span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image src="/icons/news key arrow down.svg" alt="Down" width={24} height={24} className="object-contain opacity-50" />
                                </div>
                            </div>

                            {/* Dropdown List */}
                            {isMonthOpen && (
                                <div className="absolute top-14 left-0 w-full bg-white outline outline-1 outline-neutral-300 shadow-lg rounded-sm z-30 max-h-60 overflow-y-auto">
                                    <div
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-neutral-500 font-delight"
                                        onClick={() => selectMonth("")}
                                    >
                                        All Months
                                    </div>
                                    {months.map((month) => (
                                        <div
                                            key={month}
                                            className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-neutral-600 font-delight ${selectedMonth === month ? 'bg-gray-50 font-medium text-violet-950' : ''}`}
                                            onClick={() => selectMonth(month)}
                                        >
                                            {month}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Years Filter */}
                        <div className="relative w-full md:w-56">
                            <div
                                onClick={toggleYearDropdown}
                                className="w-full h-12 px-4 py-[5px] bg-white border border-neutral-300 flex justify-between items-center cursor-pointer group hover:bg-gray-50 shadow-sm md:shadow-none"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 flex justify-center items-center relative">
                                        <Image src="/icons/news years icon.svg" alt="Year" width={20} height={20} className="object-contain" />
                                    </div>
                                    <span className={`${selectedYear ? 'text-violet-950 font-medium' : 'text-neutral-400'} text-base font-normal font-delight tracking-tight group-hover:text-neutral-600`}>
                                        {selectedYear || "Years"}
                                    </span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image src="/icons/news key arrow down.svg" alt="Down" width={24} height={24} className="object-contain opacity-50" />
                                </div>
                            </div>

                            {/* Dropdown List */}
                            {isYearOpen && (
                                <div className="absolute top-14 left-0 w-full bg-white outline outline-1 outline-neutral-300 shadow-lg rounded-sm z-30 max-h-60 overflow-y-auto">
                                    <div
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-neutral-500 font-delight"
                                        onClick={() => selectYear("")}
                                    >
                                        All Years
                                    </div>
                                    {years.map((year) => (
                                        <div
                                            key={year}
                                            className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-neutral-600 font-delight ${selectedYear === year ? 'bg-gray-50 font-medium text-violet-950' : ''}`}
                                            onClick={() => selectYear(year)}
                                        >
                                            {year}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
                    {currentItems.map((item, index) => (
                        <Link href={`/newsletter/${item.id}`} key={index} className="contents">
                            <NewsletterCard
                                date={item.date}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                            />
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="w-full flex justify-center items-center gap-2 mt-8 relative z-10">
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className={`w-9 h-9 flex justify-center items-center bg-neutral-100 hover:bg-neutral-200 disabled:opacity-50 transition-colors rounded-sm`}
                        >
                            <ChevronLeft size={16} className="text-zinc-900" />
                        </button>

                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`w-9 h-9 flex justify-center items-center transition-colors rounded-sm ${currentPage === i + 1 ? 'bg-violet-950 text-white' : 'text-violet-950 hover:bg-neutral-100'}`}
                            >
                                <span className="font-delight text-base">{i + 1}</span>
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className={`w-9 h-9 flex justify-center items-center bg-neutral-100 hover:bg-neutral-200 disabled:opacity-50 transition-colors rounded-sm`}
                        >
                            <ChevronRight size={16} className="text-zinc-900" />
                        </button>
                    </div>
                )}
            </div>

            {/* Newsletter Subscription Section */}
            <div className="w-full px-4 md:px-8 xl:px-[200px] mb-20 flex justify-center">
                <div className="w-full bg-[#262366] py-8 px-4 md:px-11 flex flex-col gap-11">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-white text-3xl font-normal font-gc-amelie italic tracking-[-0.01em] self-start">Advance Your Knowledge</h2>
                        <p className="text-gray-300 text-lg font-normal font-delight tracking-[0.02em]">Get the latest medical insights and college updates straight to your inbox.</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col lg:flex-row gap-3 lg:items-end">
                            {/* Email Input */}
                            <div className="flex-1 flex flex-col gap-3">
                                <label className="text-white text-base font-medium font-delight">Email Address</label>
                                <div className="h-14 bg-white flex items-center px-4 gap-4 ">
                                    <Mail className="text-zinc-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        placeholder="institutional@email.edu"
                                        className="w-full outline-none text-neutral-600 font-delight placeholder:text-neutral-400"
                                    />
                                </div>
                            </div>

                            {/* Role Select */}
                            <div className="w-full lg:w-35 flex flex-col gap-3">
                                <label className="text-white text-base font-medium font-delight">Role</label>
                                <div className="h-14 bg-white flex justify-between items-center px-2 cursor-pointer hover:bg-gray-50">
                                    <span className="text-neutral-500 text-sm font-normal font-delight">Select Your Role</span>
                                    <Image src="/icons/select role news.svg" alt="Down" width={24} height={24} className="object-contain" />
                                </div>
                            </div>

                            {/* Subscribe Button */}
                            <button className="h-14 px-2 bg-white text-violet-950 text-sm font-semibold font-delight hover:bg-gray-100 transition-colors whitespace-nowrap ">
                                Subscribe to journal
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            <Image src="/icons/lock newsletter.svg" alt="Lock" width={12} height={15.75} className="object-contain" />
                            <span className="text-gray-300 text-sm font-normal font-delight">We care about your data in our Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

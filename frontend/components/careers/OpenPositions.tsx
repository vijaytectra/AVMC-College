"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * OpenPositions Component
 * Displays the list of open job positions with filters and search.
 * Implements the design from the provided Figma HTML snippet.
 */
const OpenPositions: React.FC = () => {
    const jobs = [
        {
            department: "Clinical Services",
            posted: "Posted 2 days ago",
            title: "Staff Nurse",
            location: "Puducherry",
            type: "Full Time",
            qualifications: "DGNM, B.Sc, M.Sc Nursing",
            salary: "₹12,000+ /month",
            vacancies: "125 Vacancies",
        },
        {
            department: "Clinical Services",
            posted: "Posted 2 days ago",
            title: "Staff Nurse",
            location: "Puducherry",
            type: "Full Time",
            qualifications: "DGNM, B.Sc, M.Sc Nursing",
            salary: "₹12,000+ /month",
            vacancies: "125 Vacancies",
        },
        {
            department: "Clinical Services",
            posted: "Posted 2 days ago",
            title: "Staff Nurse",
            location: "Puducherry",
            type: "Full Time",
            qualifications: "DGNM, B.Sc, M.Sc Nursing",
            salary: "₹12,000+ /month",
            vacancies: "125 Vacancies",
        },
        // Adding duplicates to match the visual of "Showing 8 positions" roughly or just a few for demo
        {
            department: "Clinical Services",
            posted: "Posted 2 days ago",
            title: "Staff Nurse",
            location: "Puducherry",
            type: "Full Time",
            qualifications: "DGNM, B.Sc, M.Sc Nursing",
            salary: "₹12,000+ /month",
            vacancies: "125 Vacancies",
        },

        {
            department: "Clinical Services",
            posted: "Posted 2 days ago",
            title: "Staff Nurse",
            location: "Puducherry",
            type: "Full Time",
            qualifications: "DGNM, B.Sc, M.Sc Nursing",
            salary: "₹12,000+ /month",
            vacancies: "125 Vacancies",
        },
        {
            department: "Clinical Services",
            posted: "Posted 2 days ago",
            title: "Staff Nurse",
            location: "Puducherry",
            type: "Full Time",
            qualifications: "DGNM, B.Sc, M.Sc Nursing",
            salary: "₹12,000+ /month",
            vacancies: "125 Vacancies",
        },
        {
            department: "Clinical Services",
            posted: "Posted 2 days ago",
            title: "Staff Nurse",
            location: "Puducherry",
            type: "Full Time",
            qualifications: "DGNM, B.Sc, M.Sc Nursing",
            salary: "₹12,000+ /month",
            vacancies: "125 Vacancies",
        },
    ];

    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(jobs.length / itemsPerPage);
    const currentJobs = jobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const listRef = React.useRef<HTMLDivElement>(null);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        if (listRef.current) {
            listRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full relative flex flex-col items-center py-[70px] px-4 md:px-8 gap-10 bg-[#F8FAFC]" style={{ backgroundImage: 'url("/images/paper bg for car.png")', backgroundSize: 'cover' }}>
            {/* 
        Background note: The snippet uses a placeholder image for the entire section background. 
        I'm using a neutral background color (#F8FAFC from globals) for cleanliness, 
        or we can add a subtle pattern if needed. 
      */}

            <div className="w-full flex flex-col items-center gap-5">

                {/* Header / Filter Section */}
                <div className="w-full flex flex-col items-center gap-5">
                    {/* Header Card */}
                    <div className="w-full max-w-[1241px] h-auto md:h-52 relative bg-p-7 rounded-xl overflow-hidden flex flex-col md:block p-6 md:p-0">
                        {/* Content Group - Absolute on Desktop */}
                        <div className="relative md:absolute md:w-[648px] md:left-[100px] md:top-1/2 md:-translate-y-1/2 flex flex-col justify-start items-start gap-6 z-10">
                            <div className="self-stretch justify-start text-p-1 text-4xl font-normal font-gc-amelie italic leading-[56px] mt-3">Open Positions</div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-3">
                                {/* Search Bar */}
                                <div className="self-stretch bg-white inline-flex justify-start items-center p-0.5 ">
                                    <div className="p-2.5 rounded-[100px] flex justify-start items-center gap-2.5">
                                        <div className="w-6 h-6 p-[3px] flex justify-center items-center opacity-50">
                                            <Image src="/icons/search_icon.svg" alt="Search" width={16} height={16} />
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search Positions..."
                                        className="w-52 justify-start text-grey-8 text-sm font-light font-delight leading-5 tracking-wide outline-none placeholder:text-grey-8"
                                    />
                                </div>
                                {/* Filters */}
                                <div className="flex flex-col justify-start items-end gap-6">
                                    <div className="self-stretch inline-flex flex-wrap justify-start items-center gap-6">
                                        {['Experience', 'Department', 'Full-Time'].map((filter) => (
                                            <div key={filter} className="h-8 px-5 py-[5px] bg-p-7 outline outline-[0.50px] outline-offset-[-0.50px] outline-p-4 flex justify-center items-center gap-2.5 cursor-pointer hover:bg-p-6 transition-colors">
                                                <div className="text-center justify-start text-grey-4 text-base font-normal font-dm-sans leading-5">{filter}</div>
                                                <ChevronDown size={16} className="text-grey-1" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Images (By Order) */}
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
            <div ref={listRef} className="w-full max-w-[1241px]">
                <div className="mb-6">
                    <div className="text-grey-8 text-sm font-delight font-light tracking-[0.56px]">
                        Showing {jobs.length} positions
                    </div>
                </div>

                {/* Jobs Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5">
                    {currentJobs.map((job, index) => (
                        <div key={index} className="w-full p-6 bg-white flex flex-col gap-[36px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow">

                            {/* Card Header */}
                            <div className="flex justify-between items-center">
                                <div className="px-2.5 py-2.5 bg-[#F9F6EE] flex justify-center items-center">
                                    <span className="text-p-6 text-[10px] font-delight font-medium tracking-[0.72px]">
                                        {job.department}
                                    </span>
                                </div>
                                <span className="text-grey-6 text-[10px] font-delight font-normal tracking-[0.48px]">
                                    {job.posted}
                                </span>
                            </div>

                            {/* Job Info */}
                            <div className="flex flex-col gap-[15px]">
                                <h3 className="text-black text-xl font-delight font-medium">
                                    {job.title}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-grey-8 text-sm font-delight font-normal tracking-[0.56px]">{job.location}</span>
                                    <div className="w-1 h-1 bg-grey-5 rounded-full" />
                                    <span className="text-grey-8 text-sm font-delight font-normal tracking-[0.56px]">{job.type}</span>
                                </div>
                            </div>

                            {/* Job Details List */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-4">
                                    {/* Qualifications Icon */}
                                    <div className="w-[18px] h-[18px] relative flex justify-center items-center">
                                        <Image src="/icons/career 1.png" alt="Qualifications" width={18} height={18} className="object-contain" />
                                    </div>
                                    <span className="text-grey-7 text-sm font-delight font-normal tracking-[0.56px]">{job.qualifications}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/* Salary Icon */}
                                    <div className="w-[18px] h-[18px] relative flex justify-center items-center">
                                        <Image src="/icons/career salary.png" alt="Salary" width={10} height={10} className="object-contain" />
                                    </div>
                                    <span className="text-grey-7 text-sm font-delight font-normal tracking-[0.56px]">{job.salary}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/* Vacancies Icon */}
                                    <div className="w-[18px] h-[18px] relative flex justify-center items-center">
                                        <Image src="/icons/career vacancies.png" alt="Vacancies" width={18} height={18} className="object-contain" />
                                    </div>
                                    <span className="text-grey-7 text-sm font-delight font-normal tracking-[0.56px]">{job.vacancies}</span>
                                </div>
                            </div>

                            {/* View Details Link */}
                            <Link href="/career-details" className="flex justify-between items-center group">
                                <span className="text-p-6 text-sm font-delight font-normal tracking-[0.56px] group-hover:underline">
                                    View Details
                                </span>
                                <div className="w-5 h-5 flex justify-center items-center">
                                    <ArrowRight size={14} className="text-p-6" />
                                </div>
                            </Link>

                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {jobs.length > itemsPerPage && (
                    <div className="w-full flex justify-center items-center gap-2 mt-6">
                        {/* Prev Button */}
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className={`w-8 h-8 relative outline outline-1 outline-offset-[-1px] flex justify-center items-center transition-colors ${currentPage === 1 ? 'bg-grey-4 outline-grey-3 cursor-not-allowed' : 'bg-white outline-zinc-200 hover:bg-gray-50'}`}
                        >
                            <ChevronLeft size={16} className={currentPage === 1 ? 'text-grey-6' : 'text-grey-8'} />
                        </button>

                        {/* Page Numbers */}
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

                        {/* Next Button */}
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
    );
};

export default OpenPositions;

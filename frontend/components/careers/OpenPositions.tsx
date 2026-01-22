"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ArrowRight } from "lucide-react";

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
    ];

    return (
        <div className="w-full relative flex flex-col justify-center items-center py-[70px] px-4 md:px-[100px] gap-10 bg-[#F8FAFC]" style={{ backgroundImage: 'url("/images/paper bg for car.png")', backgroundSize: 'cover' }}>
            {/* 
        Background note: The snippet uses a placeholder image for the entire section background. 
        I'm using a neutral background color (#F8FAFC from globals) for cleanliness, 
        or we can add a subtle pattern if needed. 
      */}

            <div className="w-full max-w-[1241px] flex flex-col items-center gap-5">

                {/* Header / Filter Section */}
                <div className="w-full flex flex-col gap-5">
                    {/* Header Card */}
                    <div className="w-full max-w-[1241px] rounded-xl relative bg-p-7  overflow-hidden  p-6 pb-10 lg:px-20 2xl:px-40 lg:py-8 flex flex-col md:block">

                        {/* Content Group (Absolute on Desktop, Flex on Mobile) */}
                        <div className="relative z-10 flex flex-col items-start gap-6 w-full">
                            <div className="text-p-1 text-4xl font-gc-amelie italic leading-[56px]">
                                Open Positions
                            </div>

                            <div className="flex flex-col items-start gap-6 w-full">
                                {/* Search Bar */}
                                <div className="bg-white p-2.5  flex items-center gap-2.5 w-full max-w-2xl">
                                    <div className="w-6 h-6 p-[3px] flex justify-center items-center">
                                        <Image src="/icons/search_icon.svg" alt="Search" width={16} height={16} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search Positions..."
                                        className="flex-1 text-grey-8 text-sm font-delight font-light leading-5 tracking-wide outline-none placeholder:text-grey-8/50"
                                    />
                                </div>

                                {/* Filters */}
                                <div className="flex flex-wrap gap-4 md:gap-6 max-w-xl">
                                    {['Experience', 'Department', 'Full-Time'].map((filter) => (
                                        <button key={filter} className="h-8 px-5 py-[5px] bg-p-7 outline outline-[0.5px] outline-p-4 flex justify-center items-center gap-2.5 hover:bg-p-6 transition-colors">
                                            <span className="text-grey-4 text-base font-dm-sans leading-5">{filter}</span>
                                            <ChevronDown size={16} className="text-grey-1" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements (Desktop Only for precise positioning) */}
                        <div className="hidden md:block w-72 h-64 absolute left-[908px] top-[145px] origin-top-left -rotate-[36.63deg] bg-white/10 pointer-events-none" />
                        <div className="hidden md:block w-40 h-32 absolute left-[123px] top-[281px] origin-top-left -rotate-[72.19deg] opacity-10 bg-white pointer-events-none text-[0px]" />
                    </div>

                </div>
                <div className="max-w-4xl mx-auto w-full">
                    <div className="  mb-4">
                        <div className="text-grey-8 text-sm font-delight font-light tracking-[0.56px]">
                            Showing {jobs.length} positions
                        </div>
                    </div>

                    {/* Jobs Grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                        {jobs.map((job, index) => (
                            <div key={index} className="w-full p-6 bg-white flex flex-col gap-9 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow">

                                {/* Card Header */}
                                <div className="flex justify-between items-center">
                                    <div className="px-2.5 py-2.5 bg-[#F9F6EE] flex justify-center items-center">
                                        <span className="text-p-6 text-xs font-delight font-medium tracking-[0.72px]">
                                            {job.department}
                                        </span>
                                    </div>
                                    <span className="text-grey-6 text-xs font-delight font-normal tracking-[0.48px]">
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
                </div>

            </div>
        </div>
    );
};

export default OpenPositions;

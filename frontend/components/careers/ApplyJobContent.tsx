"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown, Upload } from "lucide-react";

/**
 * ApplyJobContent Component
 * Implements the "Apply for Staff Nurse" form based on the user's provided design.
 */
const ApplyJobContent: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-[#F8FAFC] py-12 flex justify-center">
            {/* Main Container */}
            <div className="w-full max-w-[1038px] bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] p-12 flex flex-col items-start gap-16">

                {/* Header Section */}
                <div className="w-full relative flex flex-col items-center gap-8">
                    {/* Go Back Button (Absolute Top Left) */}
                    <Link
                        href="/career-details"
                        className="absolute top-0 left-0 h-9 px-5 py-2.5 outline outline-1 outline-offset-[-1px] outline-grey-4 flex justify-center items-center gap-2.5 hover:bg-gray-50 transition-colors"
                    >
                        <span className="justify-center text-grey-6 text-sm font-normal font-delight tracking-wide">Go Back</span>
                    </Link>

                    {/* Title & Location */}
                    <div className="flex flex-col items-center gap-6 mt-12 md:mt-0">
                        <div className="text-center text-p-6 text-4xl font-normal font-delight leading-5">
                            Apply for Staff Nurse
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <div className="text-grey-8 text-sm font-normal font-delight leading-5 tracking-wide">
                                Clinical Services
                            </div>
                            <div className="w-1 h-1 bg-grey-5 rounded-full" />
                            <div className="text-grey-8 text-sm font-normal font-delight leading-5 tracking-wide">
                                Puducherry
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <form className="w-full flex flex-col gap-11">
                    <div className="w-full flex flex-col gap-11">
                        {/* Row 1: Name & Phone */}
                        <div className="w-full flex flex-col md:flex-row gap-6">
                            {/* Full Name */}
                            <div className="flex-1 flex flex-col gap-4">
                                <label className="text-grey-9 text-base font-normal font-delight tracking-wide">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full pl-5 pr-3 py-3 bg-white outline outline-1 outline-offset-[-1px] outline-grey-4 text-grey-6 text-base font-normal font-delight tracking-wide placeholder:text-grey-6/50 focus:outline-p-6 transition-all"
                                />
                            </div>
                            {/* Phone Number */}
                            <div className="flex-1 flex flex-col gap-4">
                                <label className="text-grey-9 text-base font-normal font-delight tracking-wide">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+91 90215 12345"
                                    className="w-full pl-5 pr-3 py-3 bg-white outline outline-1 outline-offset-[-1px] outline-grey-4 text-grey-6 text-base font-normal font-delight tracking-wide placeholder:text-grey-6/50 focus:outline-p-6 transition-all"
                                />
                            </div>
                        </div>

                        {/* Row 2: Email */}
                        <div className="w-full flex flex-col gap-4">
                            <label className="text-grey-9 text-base font-normal font-delight tracking-wide">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Johndoe@example.com"
                                className="w-full pl-5 pr-3 py-3 bg-white outline outline-1 outline-offset-[-1px] outline-grey-4 text-grey-6 text-base font-normal font-delight tracking-wide placeholder:text-grey-6/50 focus:outline-p-6 transition-all"
                            />
                        </div>

                        {/* Row 3: Qualification & Experience */}
                        <div className="w-full flex flex-col md:flex-row gap-6">
                            {/* Highest Qualification */}
                            <div className="flex-1 flex flex-col gap-4">
                                <label className="text-grey-9 text-base font-normal font-delight tracking-wide">
                                    Highest Qualification
                                </label>
                                <div className="relative w-full">
                                    <select className="w-full pl-5 pr-10 py-3 bg-white outline outline-1 outline-offset-[-1px] outline-grey-4 text-grey-6 text-base font-normal font-delight tracking-wide appearance-none focus:outline-p-6 transition-all cursor-pointer">
                                        <option value="" disabled selected>Select Qualification</option>
                                        <option value="bsc">B.Sc Nursing</option>
                                        <option value="msc">M.Sc Nursing</option>
                                        <option value="gnm">GNM</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-5 pointer-events-none" />
                                </div>
                            </div>
                            {/* Years of Experience */}
                            <div className="flex-1 flex flex-col gap-4">
                                <label className="text-grey-9 text-base font-normal font-delight tracking-wide">
                                    Years of Experience
                                </label>
                                <div className="relative w-full">
                                    <select className="w-full pl-5 pr-10 py-3 bg-white outline outline-1 outline-offset-[-1px] outline-grey-4 text-grey-6 text-base font-normal font-delight tracking-wide appearance-none focus:outline-p-6 transition-all cursor-pointer">
                                        <option value="" disabled selected>Fresher</option>
                                        <option value="0-1">0-1 Years</option>
                                        <option value="1-3">1-3 Years</option>
                                        <option value="3-5">3-5 Years</option>
                                        <option value="5+">5+ Years</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-5 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Resume Upload */}
                        <div className="w-full flex flex-col gap-4">
                            <label className="text-black text-base font-normal font-delight tracking-wide">
                                Resume / CV
                            </label>
                            <div className="w-full h-56 p-6 bg-orange-50/40 outline outline-[0.40px] outline-offset-[-0.40px] outline-grey-7 border border-dashed border-grey-4 flex flex-col justify-center items-center gap-6 cursor-pointer hover:bg-orange-50/60 transition-colors">
                                <Upload className="w-8 h-8 text-p-5" />
                                <div className="flex flex-col items-center gap-2">
                                    <span className="text-center text-black text-base font-normal font-delight tracking-wide">
                                        Click to upload or drag and drop
                                    </span>
                                    <span className="text-center text-grey-6 text-base font-normal font-delight tracking-wide">
                                        PDF only (Max 2MB)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Agreement Checkbox */}
                        <div className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                id="agreement"
                                className="w-5 h-5 border border-grey-5 rounded-none cursor-pointer accent-p-7"
                            />
                            <label htmlFor="agreement" className="text-grey-7 text-base font-normal font-delight tracking-wide cursor-pointer select-none">
                                I agree to the processing of my personal data for the recruitment process.
                            </label>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col md:flex-row justify-end items-center gap-6 md:gap-0 mt-4">
                        <button type="button" className="w-32 h-12 flex justify-center items-center text-grey-7 text-base font-normal font-delight tracking-wide hover:underline">
                            Cancel
                        </button>
                        <button type="submit" className="w-40 h-12 bg-p-8 shadow-[-4px_4px_0px_0px_rgba(31,28,88,0.21)] hover:shadow-none hover:translate-x-[-2px] hover:translate-y-[2px] transition-all outline outline-1 outline-white flex justify-center items-center">
                            <span className="text-white text-sm font-bold font-dm-sans uppercase">
                                Apply now
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyJobContent;

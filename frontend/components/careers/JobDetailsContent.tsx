"use client";

import React from "react";
import Image from "next/image";


/**
 * JobDetailsContent Component
 * 
 * Implements the inner career page design provided by the user.
 * Hardcoded values for "Staff Nurse" role, designed to be modifiable.
 * Uses 'font-delight' globally as requested.
 * 
 * Layout:
 * - Centered Container (max-w-[1040px])
 * - Two Column Layout: Main Content (Left) & Sidebar (Right)
 */

interface JobDetailsProps {
    title?: string;
    department?: string;
    location?: string;
    type?: string;
    vacancies?: string;
}

const JobDetailsContent: React.FC<JobDetailsProps> = ({
    title = "Staff Nurse",
    department = "Clinical Services",
    location = "Puducherry",
    type = "Full Time",
    vacancies = "25 Vacancies"
}) => {
    return (
        <div className="w-full bg-[#F8FAFC] min-h-screen py-12 flex justify-center">
            <div className="w-full max-w-[1038px] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.04)] p-8 flex flex-col gap-11">

                {/* Header Section */}
                <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8">
                    <div className="flex flex-col gap-8 flex-1">
                        {/* Breadcrumb */}
                        <div className="text-grey-6 text-sm font-normal font-delight">
                            About &gt; Careers &gt; {department}
                        </div>

                        {/* Title & Meta */}
                        <div className="flex flex-col gap-6">
                            <h1 className="text-p-6 text-4xl font-normal font-delight italic leading-[22px]">
                                {title}
                            </h1>

                            <div className="flex items-center gap-3">
                                <div className="text-grey-8 text-sm font-normal font-delight tracking-[0.56px]">
                                    {location}
                                </div>
                                <div className="w-1 h-1 bg-grey-5 rounded-full" />
                                <div className="text-grey-8 text-sm font-normal font-delight tracking-[0.56px]">
                                    {type}
                                </div>
                                <div className="w-1 h-1 bg-grey-5 rounded-full" />
                                <div className="text-grey-7 text-sm font-normal font-delight tracking-[0.56px]">
                                    {vacancies}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Apply Button (Desktop Right) */}
                    <div className="hidden md:block">
                        <button className="h-12 px-6 py-3 bg-p-8 shadow-[-4px_4px_0px_rgba(31,28,88,0.21)] outline outline-1 outline-white flex justify-center items-center gap-3 hover:translate-y-1 transition-transform">
                            <span className="text-white text-sm font-bold font-dm-sans uppercase">
                                Apply now
                            </span>
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">

                    {/* Left Column - Main Details */}
                    <div className="flex-1 flex flex-col gap-12 w-full">

                        {/* About the Role */}
                        <div className="flex flex-col gap-7">
                            <h2 className="text-p-6 text-xl font-medium font-delight leading-[22px]">
                                About the Role
                            </h2>
                            <p className="text-grey-7 text-base font-light font-delight leading-[26px] tracking-[0.64px]">
                                We are looking for dedicated and compassionate Staff Nurses to provide high-quality patient care and support clinical operations across departments. This role offers exposure and opportunities for learning and growth at a reputed medical institution. You will work closely with a multidisciplinary team to ensure the best patient outcomes.
                            </p>
                        </div>

                        {/* Responsibilities (Second 'About the Role' in snippet) */}
                        <div className="flex flex-col gap-7">
                            <h2 className="text-p-6 text-xl font-medium font-delight leading-[22px]">
                                Key Responsibilities
                            </h2>
                            <div className="text-grey-7 text-base font-light font-delight leading-[26px] tracking-[0.80px]">
                                <ul className="list-none flex flex-col gap-1">
                                    <li>Provide direct patient care, monitor vitals, and administer medication.</li>
                                    <li>Assist doctors during surgical and clinical procedures.</li>
                                    <li>Maintain accurate patient medical records and reports.</li>
                                    <li>Ensure strict adherence to hygiene and infection control protocols.</li>
                                    <li>Offer emotional support and guidance to patients and families.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Eligibility & Qualifications */}
                        <div className="flex flex-col gap-11">
                            <h2 className="text-p-6 text-xl font-medium font-delight leading-[22px]">
                                Eligibility & Qualifications
                            </h2>

                            <div className="flex flex-col gap-11">
                                {/* Education */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-grey-10 text-base font-normal font-delight leading-[22px] tracking-[0.64px]">
                                        Education
                                    </h3>
                                    <p className="text-grey-7 text-base font-light font-delight leading-[22px] tracking-[0.64px]">
                                        DGNM / B.Sc Nursing / M.Sc Nursing from a recognized institution.
                                    </p>
                                </div>

                                {/* Experience */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-grey-10 text-base font-normal font-delight leading-[22px] tracking-[0.64px]">
                                        Experience
                                    </h3>
                                    <p className="text-grey-7 text-base font-light font-delight leading-[22px] tracking-[0.64px]">
                                        Both Freshers and Experienced candidates are encouraged to apply.
                                    </p>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-grey-10 text-base font-normal font-delight leading-[22px] tracking-[0.64px]">
                                        Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-4">
                                        {["Communication", "Patient-Centric", "Shift Flexibility", "Clinical Hygiene"].map((skill, i) => (
                                            <div key={i} className="px-2.5 py-2.5 bg-white outline outline-1 outline-grey-4 outline-offset-[-1px] flex justify-center items-center">
                                                <span className="text-grey-7 text-sm font-normal font-delight leading-[22px] tracking-[0.56px]">
                                                    {skill}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="w-full md:w-[312px] flex flex-col gap-11 shrink-0">
                        {/* Salary & Benefits */}
                        <div className="w-full p-6 bg-white flex flex-col gap-7">
                            <h3 className="text-p-6 text-sm font-medium font-delight leading-[22px] tracking-[0.56px]">
                                Salary & Benefits
                            </h3>
                            <p className="text-grey-7 text-sm font-normal font-delight leading-[22px] tracking-[0.56px]">
                                We offer fair and competitive compensation aligned with market standards and role expectations.
                            </p>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <Image src="/icons/career growth.svg" alt="Career Growth" width={18} height={18} />
                                    <span className="text-grey-7 text-sm font-normal font-delight leading-[22px] tracking-[0.56px]">
                                        Career growth pathways
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src="/icons/job stability.svg" alt="Job Stability" width={18} height={18} />
                                    <span className="text-grey-7 text-sm font-normal font-delight leading-[22px] tracking-[0.56px]">
                                        Job stability
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src="/icons/supportive.svg" alt="Supportive Culture" width={18} height={18} />
                                    <span className="text-grey-7 text-sm font-normal font-delight leading-[22px] tracking-[0.56px]">
                                        Supportive culture
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Interview Details */}
                        <div className="flex flex-col items-center gap-11 p-6 bg-white w-full">
                            <h3 className="text-grey-7 text-xl font-normal font-delight leading-[22px] tracking-[0.80px]">
                                Interview Details
                            </h3>

                            <div className="flex gap-6 w-full">
                                {/* Timeline Dots Column */}
                                <div className="flex flex-col pt-1.5 items-center">
                                    <div className="w-2.5 h-2.5 bg-p-6 rounded-full shrink-0 z-10" />
                                    <div className="w-[1px] h-[98px] bg-gray-200 my-[-2px] relative z-0" />
                                    <div className="w-2.5 h-2.5 bg-p-6 rounded-full shrink-0 z-10" />
                                    <div className="w-[1px] h-[78px] bg-gray-200 my-[-2px] relative z-0" />
                                    <div className="w-2.5 h-2.5 bg-p-6 rounded-full shrink-0 z-10" />
                                </div>

                                <div className="flex flex-col gap-12 w-full">
                                    {/* Last Date */}
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-6">
                                            <div className="text-grey-6 text-sm font-normal font-delight uppercase leading-[22px] tracking-[0.56px]">
                                                LAST DATE
                                            </div>
                                            <div className="text-grey-10 text-sm font-normal font-delight leading-[22px] tracking-[0.56px]">
                                                Oct 27, 2025
                                            </div>
                                        </div>
                                    </div>

                                    {/* Where */}
                                    <div className="flex flex-col gap-6">
                                        <div className="text-grey-6 text-sm font-normal font-delight uppercase leading-[22px] tracking-[0.56px]">
                                            Where
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="text-grey-10 text-sm font-normal font-delight leading-[22px] tracking-[0.56px]">
                                                HR Department, AVMC
                                            </div>
                                            <div className="text-grey-10 text-sm font-normal font-delight leading-[22px] tracking-[0.56px]">
                                                Kirumampakkam, Puducherry
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact */}
                                    <div className="flex flex-col gap-6">
                                        <div className="text-grey-6 text-sm font-normal font-delight uppercase leading-[22px] tracking-[0.56px]">
                                            Contact
                                        </div>
                                        <div className="text-grey-10 text-sm font-normal font-delight leading-[22px] tracking-[0.56px]">
                                            7397735690<br />careers@avmc.edu.in
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

export default JobDetailsContent;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


/**
 * Recreating the exact design fidelity requested by the user.
 * - Width constrained containers (max-w-[1040px])
 * - Precise fonts: delight (mapped from Delight), DM Sans, Inter.
 * - Colors: p-7, p-5, etc.
 * - Hero section with circular patterns.
 */

const AntiRaggingContent: React.FC = () => {
    const [openTerm, setOpenTerm] = useState<string | null>("Objective");

    const terms = [
        {
            title: "Objective",
            content: "To root out ragging in all its forms from the institution by prohibiting it by law, preventing its occurrence by following the provisions of these Regulations and punishing those who indulge in ragging as provided for in these Regulations and the appropriate law in force."
        },
        {
            title: "Scope",
            content: "The scope of these regulations extends to all students and staff of the institution, ensuring a comprehensive coverage of anti-ragging measures."
        },
        {
            title: "Functions",
            content: "To monitor the anti-ragging activities in the institution, consider the recommendations of the Anti-Ragging Squad and take appropriate decisions, including spelling out suitable punishments to those found guilty."
        }
    ];

    return (
        <div className="w-full relative min-h-screen pb-20 bg-white overflow-hidden">
            {/* Background Images - Positioned exactly as requested */}
            <div className="absolute top-[130px] -left-[19px] w-[1459px] h-[1852px] pointer-events-none -z-0">
                <Image
                    src="/images/antirag bg.png"
                    alt="background pattern top"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute top-[1922px] left-0 w-[1459px] h-[1852px] pointer-events-none -z-0">
                <Image
                    src="/images/antirag bg.png"
                    alt="background pattern bottom"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Hero Section */}
            <div className="relative w-full h-72 bg-p-7 overflow-hidden z-10">
                {/* Concentric Circles (Absolute positioning as per design) */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    {/* Using the user's specific sizes but centering them */}
                    <div className="w-[1471px] h-[1471px] border border-p-5/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-[1353px] h-[1353px] border border-p-5/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-[1236px] h-[1236px] border border-p-5/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-[1119px] h-[1119px] border border-p-5/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-[1002px] h-[1002px] border border-p-5/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-[885px] h-[885px] border border-p-5/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-[768px] h-[768px] border border-p-5/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-[651px] h-[651px] border border-p-5/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-[534px] h-[534px] border border-p-5/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-96 h-96 border border-p-5/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-72 h-72 border border-p-5/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-44 h-44 border border-p-5/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="relative z-10 h-full max-w-[1040px] mx-auto flex flex-col items-center justify-center text-center px-4">
                    <div className="text-white text-[40px] font-medium font-delight leading-tight tracking-[0] mb-2">
                        Anti-Ragging Committee
                    </div>
                    <div className="text-grey-4 text-xs font-normal font-delight tracking-[0.05em] max-w-lg">
                        Ensuring a safe and ragging-free campus environment for all students.
                    </div>
                    <div className="absolute bottom-8 text-grey-4 text-sm font-normal font-delight">
                        Last updated: 15th Jan, 2026
                    </div>
                </div>

                {/* Top Navigation Row - Moved inside Hero */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
                    <div className="max-w-[1040px] mx-auto px-6 pt-8 flex justify-between items-start">
                        {/* Back Button */}
                        <Link href="#" className="pointer-events-auto inline-flex items-center gap-3 group text-p-1 hover:text-white transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-sm font-normal font-delight tracking-[0]">
                                Back to Committees
                            </span>
                        </Link>

                        {/* Tag */}
                        <div className="pointer-events-auto px-5 py-2.5 bg-p-7 rounded-full outline outline-1 outline-p-5 flex items-center justify-center">
                            <span className="text-background text-sm font-medium font-delight tracking-[0]">
                                Regulatory Committee
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-20 w-full max-w-[1040px] mx-auto px-4 lg:px-0 pt-6">

                {/* Constitution Info */}
                <div className="w-full px-6 flex justify-between items-start mb-8">
                    <div className="inline-flex flex-col justify-center items-start gap-3">
                        <div className="flex flex-col justify-center text-black text-sm font-normal font-delight">Constitution Date</div>
                        <div className="flex flex-col justify-center text-p-7 text-base font-normal font-delight">12th January, 2026</div>
                    </div>
                    <div className="inline-flex flex-col justify-center items-end gap-3">
                        <div className="flex flex-col justify-center text-black text-sm font-normal font-delight">Reference No.</div>
                        <div className="flex flex-col justify-center text-p-7 text-base font-normal font-delight">VMC/ARC/2023-24/01</div>
                    </div>
                </div>

                {/* About the Committee */}
                <div className="w-full bg-white p-6 flex flex-col gap-6 mb-8 border border-white/0">
                    {/* Header Strip */}
                    <div className="w-full h-14 bg-orange-50 px-6 py-2.5 flex items-center gap-2.5 ">
                        <div className="text-p-7 text-xl font-normal font-delight">About the Committee</div>
                    </div>

                    <div className="text-center md:text-left text-grey-8 text-lg font-light font-delight leading-6 tracking-tight">
                        The Anti-Ragging Committee is a statutory body constituted in accordance with the regulations of the National Medical Commission (NMC) and the University Grants Commission (UGC).
                    </div>
                    <div className="text-center md:text-left text-grey-8 text-lg font-light font-delight leading-6 tracking-tight">
                        The primary objective of this committee is to prevent, prohibit, and eliminate the scourge of ragging in any form within the institution. It is responsible for taking prompt and strict action against those found guilty of ragging, ensuring a fear-free environment for learning and growth. The committee operates with zero tolerance towards ragging and works in coordination with the Anti-Ragging Squad to monitor campus activities efficiently.
                    </div>
                </div>

                {/* Committee Members */}
                <div className="w-full bg-white p-6 flex flex-col  mb-8">
                    <div className="w-full h-14 bg-orange-50 px-6 py-2.5 flex items-center">
                        <div className="text-p-7 text-xl font-normal font-delight">Committee Members</div>
                    </div>

                    {/* Chairperson */}
                    <div className="w-full px-6 py-5 bg-[#F4F4FB] shadow-[inset_0px_21px_24px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-2.5 mb-4">
                        <div className="flex flex-col justify-start items-start gap-3">
                            <div className="text-p-6 text-sm font-medium font-delight uppercase tracking-[0.42px]">Chairperson</div>
                            <div className="flex flex-col justify-start items-start gap-[7px]">
                                <div className="text-black text-lg font-normal font-delight">Dr. Venkatesh Murthy</div>
                                <div className="text-grey-7 text-sm font-normal font-delight">Professor, Orthopedics</div>
                            </div>
                        </div>
                    </div>

                    {/* Members List */}
                    <div className="flex flex-col w-full ">
                        {[
                            { name: "Mr. Ramesh Iyer", role: "Chief Warden, Boys Hostel", tag: "Member Secretary" },
                            { name: "Ms. Geetha Sundaram", role: "Warden, Girls Hostel", tag: "Member" },
                            { name: "Mr. Krishna Kumar", role: "Estate Manager", tag: "Member" },
                            { name: "Mr. Ramesh Iyer", role: "Student Council President", tag: "Member" },
                            { name: "Mr. Ramesh Iyer", role: "Chief Warden, Boys Hostel", tag: "Member" },
                            { name: "Mrs. A. Lakshmi", role: "Parent Representative", tag: "Member" },
                        ].map((m, i) => (
                            <div key={i} className="w-full p-6 bg-white border-b border-grey-5/40 last:border-b-0 flex justify-between items-center">
                                <div className="flex flex-col gap-2">
                                    <div className="text-black text-base font-normal font-delight">{m.name}</div>
                                    <div className="text-grey-6 text-sm font-normal font-delight">{m.role}</div>
                                </div>
                                <div className="px-5 py-2.5 rounded-full border border-grey-4 flex justify-center items-center">
                                    <span className="text-black text-xs font-normal font-delight tracking-tight">{m.tag}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Roles & Responsibilities */}
                <div className="w-full bg-white p-6 flex flex-col gap-6 mb-8">
                    <div className="w-full h-14 bg-orange-50 px-6 py-2.5 flex items-center">
                        <div className="text-p-7 text-xl font-normal font-delight">Roles & Responsibilities</div>
                    </div>
                    <div className="flex flex-col gap-6 pl-4">
                        {[
                            "To ensure compliance with the provisions of UGC/NMC regulations on curbing the menace of ragging.",
                            "To monitor and oversee the performance of the Anti-Ragging Squad in prevention of ragging in the institution.",
                            "To take immediate action on any complaints received regarding ragging incidents.",
                            "To conduct enquiries into reported incidents and submit findings to the University.",
                            "To organize awareness programs and workshops for students on the consequences of ragging."
                        ].map((text, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-1 h-1 rounded-full bg-black mt-[11px] shrink-0" />
                                <div className="text-grey-9 text-base font-light font-delight leading-[26px] tracking-[0.32px]">
                                    {text}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Terms of Reference */}
                <div className="w-full bg-white p-6 flex flex-col gap-6 mb-8">
                    <div className="w-full h-14 bg-orange-50 px-6 py-2.5 flex items-center">
                        <div className="text-p-7 text-xl font-normal font-delight">Terms of Reference</div>
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        {terms.map((term, idx) => (
                            <div key={idx} className="w-full">
                                <div
                                    className={`w-full px-6 py-5 bg-[#F4F4FB] flex justify-between items-center cursor-pointer transition-colors ${openTerm === term.title ? 'border-b-0' : ''}`}
                                    onClick={() => setOpenTerm(openTerm === term.title ? null : term.title)}
                                >
                                    <div className={`${openTerm === term.title ? 'text-p-7' : 'text-grey-8'} text-base font-normal font-delight transition-colors`}>
                                        {term.title}
                                    </div>
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <Image
                                            src="/icons/term.svg"
                                            alt="toggle"
                                            width={24}
                                            height={24}
                                            className={`transition-transform duration-300 ${openTerm === term.title ? 'rotate-180' : ''}`}
                                        />
                                    </div>
                                </div>

                                {/* Accordion Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openTerm === term.title ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 border border-t-0 border-gray-200 bg-white">
                                        <div className="text-grey-10 text-base font-normal font-delight leading-6 tracking-tight">
                                            {term.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Governance Details */}
                <div className="w-full bg-white p-6 flex flex-col gap-6 mb-12">
                    <div className="w-full h-14 bg-orange-50 px-6 py-2.5 flex items-center">
                        <div className="text-p-7 text-xl font-normal font-delight">Governance Details</div>
                    </div>
                    {/* Responsive Grid with fixed height on larger screens */}
                    <div className="flex flex-col md:flex-row gap-3 h-auto md:h-[172px]">
                        {[
                            { label: "Meeting Frequency", val: "Once per Quarter", icon: "/icons/calendar_month.svg" },
                            { label: "Quorum Rule", val: "2/3rd of Members", icon: "/icons/qurom rule.svg" },
                            { label: "Decision Process", val: "Consensus / Majority Vote", icon: "/icons/decision process.svg" },
                            { label: "Reporting", val: "Annual Quality Assurance Report", icon: "/icons/reporting.svg" }
                        ].map((item, i) => (
                            <div key={i} className="flex-1 w-full p-6 outline outline-1 outline-grey-3 outline-offset-[-1px] flex flex-col justify-between items-start hover:outline-p-3 transition-all bg-white">
                                <div className="w-6 h-6 relative">
                                    <Image src={item.icon} alt={item.label} width={24} height={24} className="object-contain" />
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <div className="flex flex-col justify-center text-black text-sm font-normal font-delight">{item.label}</div>
                                    <div className="flex flex-col justify-center text-grey-9 text-sm font-light font-delight leading-[26px] tracking-wide">{item.val}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Download Button */}
                <div className="flex justify-end pb-12">
                    <button className="h-11 px-5 py-2.5 bg-p-7 flex justify-center items-center gap-2.5 hover:bg-p-8 transition-colors">
                        <Image src="/icons/download official document.svg" alt="download" width={16} height={16} />
                        <span className="text-white text-sm font-normal font-delight">Download Official Document</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AntiRaggingContent;

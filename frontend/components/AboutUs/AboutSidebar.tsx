"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutSidebar() {
    const [openSection, setOpenSection] = useState<string | null>("Leadership & Governance");

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="w-full bg-white inline-flex flex-col justify-start items-start gap-4 rounded-lg p-6 shadow-sm border border-grey-2">
            {/* Active Item: About */}
            <div className="self-stretch p-4 bg-primary-1/30 border-l-4 border-primary-6 inline-flex justify-start items-center gap-2.5">
                <div className="justify-center text-primary-6 text-base font-normal font-delight leading-6">About</div>
            </div>

            {/* Vision & Mission Values - wrap text allowed */}
            <Link href="#" className="self-stretch p-2.5 border-b-[0.5px] border-grey-5 inline-flex justify-start items-center gap-2.5 hover:bg-grey-1 transition-colors">
                <div className="justify-center text-grey-7 text-base font-normal font-delight leading-6">Vision & Mission Values</div>
            </Link>

            {/* Leadership & Governance (Expandable) */}
            <div className="self-stretch flex flex-col justify-center items-start gap-2">
                <div
                    onClick={() => toggleSection("Leadership & Governance")}
                    className="self-stretch p-2.5 border-b-[0.5px] border-grey-5 inline-flex justify-between items-center cursor-pointer hover:bg-grey-1 transition-colors"
                >
                    <div className="justify-center text-grey-7 text-base font-normal font-delight leading-6">Leadership & Governance</div>
                    {/* Arrow Icon */}
                    <svg
                        className={`w-4 h-4 text-grey-6 transition-transform ${openSection === "Leadership & Governance" ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                {/* Submenu */}
                {openSection === "Leadership & Governance" && (
                    <div className="self-stretch pl-3 flex flex-col justify-start items-start animate-fade-in-down">
                        {["Dean", "Dean medical bio-research", "College officials", "University admin"].map((item) => (
                            <Link key={item} href="#" className="self-stretch p-4 border-l border-grey-3 inline-flex justify-start items-center gap-2.5 hover:text-primary-6 transition-colors">
                                <div className="justify-center text-grey-6 text-base font-normal font-delight">{item}</div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Other Dropdowns */}
            {["Accreditations & Rankings", "Infrastructure", "Quality Assurance"].map((item) => (
                <div key={item} className="self-stretch p-2.5 border-b-[0.5px] border-grey-5 inline-flex justify-between items-center cursor-pointer hover:bg-grey-1 transition-colors">
                    <div className="justify-center text-grey-7 text-base font-normal font-delight leading-6">{item}</div>
                    <svg className="w-4 h-4 text-grey-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                </div>
            ))}

            {/* Institutional Distinctiveness */}
            <Link href="#" className="self-stretch p-2.5 border-b-[0.5px] border-grey-5 inline-flex justify-start items-center gap-2.5 hover:bg-grey-1 transition-colors">
                <div className="justify-center text-grey-7 text-base font-normal font-delight leading-6">Institutional Distinctiveness</div>
            </Link>

            {/* International Engagements */}
            <Link href="#" className="self-stretch p-2.5 border-b-[0.5px] inline-flex justify-start items-center gap-2.5 hover:bg-grey-1 transition-colors">
                <div className="justify-center text-grey-7 text-base font-normal font-delight leading-6">International Engagements</div>
            </Link>
        </div>
    );
}

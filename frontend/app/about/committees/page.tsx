

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CommitteesPage() {
    return (
        <div className="w-full bg-grey-1 text-grey-10">
            {/* Hero Section */}
            <section className="relative w-full h-auto aspect-[1636/1255] md:aspect-auto md:h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/committees-hero.png')" }}
                >
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Central Card Overlay */}
                <div className="relative z-10 w-[60%] md:w-96 h-36 bg-white/20 border-l-[11px] border-s6 flex flex-col items-center justify-center gap-8">
                    <div className="self-stretch justify-center text-center text-white text-5xl font-normal font-gc-amelie italic">Committees</div>
                    <div className="self-stretch text-center justify-center text-grey-1 text-sm font-normal font-delight uppercase tracking-wide font-weight-100">home &gt; About &gt; committees</div>
                </div>
            </section>

            {/* Content Section */}
            <section className="w-full relative bg-white py-10">
                <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[100px] flex flex-col justify-start items-start gap-8">

                    {/* Search Bar - Positioned as per screenshot (Left Aligned) */}
                    <div className="w-full md:w-[509px] pl-5 pr-3 py-3 bg-white outline outline-1 outline-offset-[-1px] outline-grey-4 inline-flex justify-start items-center gap-3">
                        <div className="w-6 h-6 relative overflow-hidden shrink-0">
                            <svg className="w-5 h-5 left-[2.40px] top-[2.40px] absolute text-grey-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search by committee or name purpose"
                            className="w-full md:w-80 h-5 bg-transparent text-grey-6 text-base font-normal font-delight tracking-wide placeholder-grey-6 outline-none border-none p-0 focus:ring-0 text-left focus:placeholder-transparent"
                        />
                    </div>

                    {/* Filters */}
                    <div className="w-full inline-flex flex-wrap justify-start items-center gap-3">
                        <div className="px-5 py-4 bg-p-6 flex justify-center items-center gap-2.5 cursor-pointer">
                            <div className="text-center justify-center text-p-2 text-base font-normal font-delight tracking-wide">All Committees</div>
                        </div>
                        <div className="px-5 py-4 outline outline-1 outline-offset-[-1px] outline-grey-4 flex justify-center items-center gap-2.5 cursor-pointer hover:bg-grey-1 transition-colors">
                            <div className="text-center justify-center text-grey-8 text-base font-normal font-delight tracking-wide">Student Welfare & Safety</div>
                        </div>
                        <div className="px-5 py-4 outline outline-1 outline-offset-[-1px] outline-grey-4 flex justify-center items-center gap-2.5 cursor-pointer hover:bg-grey-1 transition-colors">
                            <div className="text-center justify-center text-grey-8 text-base font-normal font-delight tracking-wide">Grievance & Ethics</div>
                        </div>
                        <div className="px-5 py-4 outline outline-1 outline-offset-[-1px] outline-grey-4 flex justify-center items-center gap-2.5 cursor-pointer hover:bg-grey-1 transition-colors">
                            <div className="text-center justify-center text-grey-8 text-base font-normal font-delight tracking-wide">Administrative & Compliance</div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="w-full flex justify-start items-center">
                        <div className="text-center justify-center">
                            <span className="text-grey-6 text-base font-normal font-delight tracking-wide">Showing </span>
                            <span className="text-p-6 text-base font-semibold font-delight tracking-wide">115</span>
                            <span className="text-grey-6 text-base font-normal font-delight tracking-wide"> committees</span>
                        </div>
                    </div>

                    {/* Committee Category Header */}
                    <div className="w-full h-14 pl-8 pr-5 py-2.5 bg-p-11 inline-flex justify-start items-center gap-2.5">
                        <div className="text-center justify-center text-p-7 text-xl font-normal font-delight">Academic Committee (13)</div>
                    </div>

                    {/* Committee Cards Grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Academic Committee" },
                            { name: "Examination Committee" },
                            { name: "Accreditation & Ranking Cell" },
                            { name: "Magazine / Newsletter Publishing Committee" },
                            { name: "Anti Ragging Committee", link: "/anti-ragging" },
                            { name: "Anti Ragging Squad" },
                            { name: "Library Development and Utilization Committee" },
                            { name: "WIMP Campus Library Advisory Committee" },
                            { name: "Academic Audit Cell" }
                        ].map((item, index) => {
                            const CardContent = (
                                <>
                                    <div className="self-stretch flex justify-between items-center">
                                        <div className="flex-1 justify-center text-grey-9 text-lg font-normal font-delight tracking-wide">{item.name}</div>
                                        <ArrowRight className="w-4 h-4 text-grey-5" />
                                    </div>
                                    <div className="self-stretch flex justify-between items-end">
                                        <div className="flex-1 justify-center text-grey-6 text-sm font-normal font-delight leading-6 tracking-wide">Ensures a ragging-free campus environment and takes strict action against offenders.</div>
                                    </div>
                                </>
                            );

                            if (item.link) {
                                return (
                                    <Link key={index} href={item.link} className="w-full p-7 bg-white shadow-[0px_0px_6px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-grey-3 flex flex-col justify-end items-end gap-11 hover:shadow-md transition-shadow cursor-pointer">
                                        {CardContent}
                                    </Link>
                                );
                            }

                            return (
                                <div key={index} className="w-full p-7 bg-white shadow-[0px_0px_6px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-grey-3 flex flex-col justify-end items-end gap-11 hover:shadow-md transition-shadow">
                                    {CardContent}
                                </div>
                            );
                        })}
                    </div>

                    {/* Administrative Committees Header */}
                    <div className="w-full h-14 pl-8 pr-5 py-2.5 bg-p-11 inline-flex justify-start items-center gap-2.5">
                        <div className="text-center justify-center text-p-7 text-xl font-normal font-delight">Administrative Committees (40)</div>
                    </div>

                    {/* Administrative Committees Grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            "College Council",
                            "Governing Council",
                            "Finance Committee",
                            "Planning & Monitoring Board",
                            "Selection Committee",
                            "Purchase Committee",
                            "College Council",
                            "Governing Council",
                            "Finance Committee"
                        ].map((name, index) => (
                            <div key={index} className="w-full p-7 bg-white shadow-[0px_0px_6px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-grey-3 flex flex-col justify-end items-end gap-11 hover:shadow-md transition-shadow">
                                <div className="self-stretch flex justify-between items-center">
                                    <div className="flex-1 justify-center text-grey-9 text-lg font-normal font-delight tracking-wide">{name}</div>
                                    <ArrowRight className="w-4 h-4 text-grey-5" />
                                </div>
                                <div className="self-stretch flex justify-between items-end">
                                    <div className="flex-1 justify-center text-grey-6 text-sm font-normal font-delight leading-6 tracking-wide">Ensures effective administration and compliance with regulations.</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Hospital Committees Header */}
                    <div className="w-full h-14 pl-8 pr-5 py-2.5 bg-p-11 inline-flex justify-start items-center gap-2.5">
                        <div className="w-60 text-center justify-center text-p-7 text-xl font-normal font-delight">Hospital Committees (13)</div>
                    </div>

                    {/* Hospital Committees Grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            "Hospital Infection Control Committee",
                            "Pharmacotherapeutics Committee",
                            "Medical Audit Committee",
                            "OT User Committee",
                            "Blood Bank Committee",
                            "Death Review Committee",
                            "Hospital Infection Control Committee",
                            "Pharmacotherapeutics Committee",
                            "Medical Audit Committee"
                        ].map((name, index) => (
                            <div key={index} className="w-full p-7 bg-white shadow-[0px_0px_6px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-grey-3 flex flex-col justify-end items-end gap-11 hover:shadow-md transition-shadow">
                                <div className="self-stretch flex justify-between items-center">
                                    <div className="flex-1 justify-center text-grey-9 text-lg font-normal font-delight tracking-wide">{name}</div>
                                    <ArrowRight className="w-4 h-4 text-grey-5" />
                                </div>
                                <div className="self-stretch flex justify-between items-end">
                                    <div className="flex-1 justify-center text-grey-6 text-sm font-normal font-delight leading-6 tracking-wide">Ensures high standards of patient care and hospital management.</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

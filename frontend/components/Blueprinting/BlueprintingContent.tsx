"use client";

import React from "react";
import Image from "next/image";

const BlueprintingContent: React.FC = () => {
    return (
        <div className="w-full bg-[#F8FAFC] flex flex-col items-center overflow-hidden pb-10">
            {/* Hero Section */}
            <div className="w-full max-w-[1040px] flex flex-col items-center mt-12 px-4">
                <div className="px-5 py-2.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-p-2 inline-flex justify-center items-center gap-2.5 mb-6">
                    <div className="text-center justify-start text-p-6 text-xs font-medium font-delight uppercase leading-4 tracking-wide">
                        Faculty Development Program
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-4 text-center">
                    <div className="text-p-7 text-4xl md:text-5xl font-normal font-gc-amelie italic leading-tight md:whitespace-nowrap">
                        Blueprinting and Clinical Reasoning Questions
                    </div>
                    <div className="text-grey-6 text-lg font-normal font-delight leading-8 md:whitespace-nowrap">
                        Faculty development workshop conducted by the Medical Education Unit
                    </div>
                </div>
                <Image
                    className="w-full h-auto md:h-96 object-cover mt-12"
                    src="/images/Rectangle%20129.png"
                    alt="Blueprinting Workshop Banner"
                    width={1040}
                    height={384}
                />
            </div>

            {/* Info Bar */}
            <div className="w-full max-w-[913px] bg-white p-6 -mt-5 relative z-10 mx-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 px-2 pt-2 bg-p-1 inline-flex flex-col justify-start items-start">
                        <Image src="/icons/Icon.svg" alt="Date" className="w-5 h-5" width={20} height={20} />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-p-7 text-xs font-normal font-delight uppercase leading-4">Date</div>
                        <div className="text-grey-10 text-sm font-normal font-delight leading-5">January 2026</div>
                    </div>
                </div>
                <div className="hidden md:block w-px h-9 bg-grey-5 mx-4"></div>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 px-2 pt-2 bg-p-1 inline-flex flex-col justify-start items-start">
                        <Image src="/icons/Icon%20(1).svg" alt="Organized By" className="w-5 h-5" width={20} height={20} />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-p-7 text-xs font-normal font-delight uppercase leading-4">Organized By</div>
                        <div className="text-grey-10 text-sm font-normal font-delight leading-5">Medical Education Unit</div>
                    </div>
                </div>
                <div className="hidden md:block w-px h-9 bg-grey-5 mx-4"></div>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 px-2 pt-2 bg-p-1 inline-flex flex-col justify-start items-start">
                        <Image src="/icons/Icon%20(2).svg" alt="Audience" className="w-5 h-5" width={20} height={20} />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-p-7 text-xs font-normal font-delight uppercase leading-4">Audience</div>
                        <div className="text-grey-10 text-sm font-normal font-delight leading-5">Medical Faculty</div>
                    </div>
                </div>
                <div className="hidden md:block w-px h-9 bg-grey-5 mx-4"></div>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 px-2 pt-2 bg-p-1 inline-flex flex-col justify-start items-start">
                        <Image src="/icons/Icon%20(3).svg" alt="Format" className="w-5 h-5" width={20} height={20} />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-p-7 text-xs font-normal font-delight uppercase leading-4">Format</div>
                        <div className="text-grey-10 text-sm font-normal font-delight leading-5">Hands-on Workshop</div>
                    </div>
                </div>
            </div>

            {/* Why This Matters */}
            <div className="w-full max-w-[1040px] px-4 mt-20">
                <div className="md:hidden text-p-7 text-3xl font-normal font-gc-amelie italic leading-9 mb-6">Why This Matters</div>
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <Image className="w-full md:w-[493px] h-auto object-cover" src="/images/Rectangle%20128%20(1).png" alt="Why This Matters" width={493} height={300} />
                    <div className="flex-1 flex flex-col gap-8">
                        <div className="hidden md:block text-p-7 text-3xl font-normal font-gc-amelie italic leading-9">Why This Matters</div>
                        <div className="flex flex-col gap-3.5">
                            {[
                                { text: "Improves assessment quality, validity and fairness", icon: "/icons/Icon%20(4).svg" },
                                { text: "Aligns examinations with CBME and NMC guidelines", icon: "/icons/2.svg" },
                                { text: "Encourages clinical reasoning over recall-based questions", icon: "/icons/3.svg" },
                                { text: "Supports structured, consistent and objective evaluation", icon: "/icons/4.svg" }
                            ].map((item, idx) => (
                                <div key={idx} className="p-[5px] bg-white outline outline-1 outline-offset-[-1px] outline-p-2 flex items-center gap-3.5">
                                    <div className="w-14 h-14 p-2.5 bg-[#F9F6EE] outline outline-1 outline-offset-[-1px] outline-p-2 flex justify-center items-center">
                                        <Image src={item.icon} alt="Icon" className="w-6 h-6 text-p-5" width={24} height={24} />
                                    </div>
                                    <div className="flex-1 pr-6 text-slate-700 text-base font-normal font-delight leading-5">
                                        {item.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Workshop Objectives */}
            <div className="w-full max-w-[1040px] px-4 mt-20">
                <div className="text-p-7 text-3xl font-normal font-gc-amelie italic leading-9 mb-12 ml-2">Workshop Objectives</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { num: "01", text: "Understanding the purpose of blueprinting in medical assessments" },
                        { num: "02", text: "Learning key steps in developing assessment blueprints" },
                        { num: "03", text: "Applying blueprinting using manual and Excel-based methods" },
                        { num: "04", text: "Converting recall questions into clinical reasoning questions" }
                    ].map((item, idx) => (
                        <div key={idx} className="outline outline-1 outline-offset-[-1px] outline-p-2">
                            <div className="p-6 border-l-[11px] border-p-5 flex items-center gap-6 h-full">
                                <div className="text-p-2 text-4xl font-normal font-mounsta leading-10">{item.num}</div>
                                <div className="text-grey-9 text-lg font-normal font-delight leading-7">{item.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Workshop Flow */}
            <div className="w-full max-w-[1040px] px-4 mt-20 flex flex-col items-center">
                <div className="text-center mb-12">
                    <div className="text-p-7 text-3xl font-normal font-gc-amelie italic leading-9 mb-2">Workshop Flow</div>
                    <div className="text-grey-6 text-base font-normal font-delight">A structured approach to learning assessment design</div>
                </div>

                <div className="w-full relative">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute top-[24px] left-[8.33%] w-[83.33%] h-px bg-p-3 z-0"></div>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10">
                        {[
                            { id: 1, title: "Inauguration", desc: "Welcome address and context setting" },
                            { id: 2, title: "Concepts", desc: "Introduction to blueprinting principles" },
                            { id: 3, title: "Demonstration", desc: "Expert walkthrough of the process" },
                            { id: 4, title: "Hands-on", desc: "Group blueprinting activities" },
                            { id: 5, title: "Discussion", desc: "Clinical reasoning case studies" },
                            { id: 6, title: "Feedback", desc: "Reflection and closing remarks" }
                        ].map((step) => (
                            <div key={step.id} className="flex flex-col items-center gap-6">
                                <div className="p-2 bg-white shadow-md">
                                    <div className="w-12 h-12 bg-p-3 flex justify-center items-center text-white text-base font-normal font-mounsta ">
                                        {step.id}
                                    </div>
                                </div>
                                <div className="text-center flex flex-col gap-1">
                                    <div className="text-p-8 text-lg font-medium font-delight">{step.title}</div>
                                    <div className="text-grey-6 text-sm font-normal font-delight">{step.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Learning Approach */}
            <div className="w-full max-w-[1040px] px-4 mt-20 flex flex-col items-center">
                <div className="text-p-7 text-3xl font-normal font-gc-amelie italic leading-9 mb-12">Learning Approach</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Hands-on Activities", desc: "Direct practice with assessment tools and templates", icon: "/icons/Icon%20(5).svg" },
                        { title: "Group Discussions", desc: "Collaborative peer learning and review sessions", icon: "/icons/Icon%20(6).svg" },
                        { title: "Excel-based Practice", desc: "Automating blueprints using spreadsheet formulas", icon: "/icons/Icon%20(7).svg" }
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 bg-[url('/images/Paper_03%202.png')] bg-cover bg-no-repeat rounded-tr-[50px] rounded-bl-[50px] shadow-sm border border-grey-4 flex flex-col items-start gap-6 overflow-hidden relative group h-full">
                            <div className="w-20 h-20 bg-white shadow-sm rounded-tr-[20px] rounded-bl-[20px] flex items-center justify-center">
                                <Image src={item.icon} alt={item.title} className="w-8 h-8" width={32} height={32} />
                            </div>
                            <div className="text-left">
                                <div className="text-grey-9 text-2xl font-medium font-delight leading-7 mb-4 tracking-tight">{item.title}</div>
                                <div className="text-grey-6 text-lg font-normal font-delight leading-7">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Workshop Highlights */}
            <div className="w-full max-w-[1040px] px-4 mt-20">
                <div className="text-center text-p-7 text-3xl font-normal font-gc-amelie italic leading-9 mb-12">Workshop Highlights</div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col md:flex-row gap-2">
                        <Image className="w-full md:flex-[2] h-80 object-cover" src="/images/Rectangle%20130.png" alt="Highlight 1" width={600} height={320} />
                        <Image className="w-full md:flex-1 h-80 object-cover" src="/images/Rectangle%20131.png" alt="Highlight 2" width={300} height={320} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                        <Image className="w-full md:flex-1 h-80 object-cover" src="/images/Rectangle%20132.png" alt="Highlight 3" width={300} height={320} />
                        <Image className="w-full md:flex-[2] h-80 object-cover" src="/images/Rectangle%20133.png" alt="Highlight 4" width={600} height={320} />
                    </div>
                </div>
            </div>

            {/* Statistics */}
            <div className="w-full max-w-[1040px] px-4 mt-12 mb-12">
                <div className="w-full p-8 bg-p-7 rounded-xl relative overflow-hidden">
                    {/* Decorative Images */}
                    <div className="hidden md:block absolute left-0 top-0 h-full w-[355px] pointer-events-none z-0">
                        <Image src="/images/open positions 1.png" alt="Decorative Left" fill className="object-cover" />
                    </div>
                    <div className="hidden md:block absolute left-[150px] bottom-0 h-[100px] w-[170px] pointer-events-none z-0">
                        <Image src="/images/open position 2.png" alt="Decorative Right Bottom" fill className="object-contain" />
                    </div>
                    <div className="hidden md:block absolute right-0 bottom-0 h-[300px] w-[300px] pointer-events-none z-0">
                        <Image src="/images/open position 3.png" alt="Decorative Right Bottom" fill className="object-contain" />
                    </div>
                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { val: "45+", label: "Faculty Participants" },
                            { val: "12", label: "Departments Involved" },
                            { val: "100%", label: "Completion Rate" },
                            { val: "4.8/5", label: "Average Feedback" }
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2">
                                <div className="text-white text-4xl font-normal font-mounsta">{stat.val}</div>
                                <div className="text-white/70 text-base font-normal font-delight uppercase tracking-wide text-center">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="w-full max-w-[1040px] px-4 mb-0">
                <div className="w-full  p-8 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="max-w-xl">
                        <div className="text-p-6 text-3xl font-normal font-gc-amelie italic mb-3">Interested in future workshops?</div>
                        <div className="text-slate-600 text-lg font-normal font-delight">Connect with the Medical Education Unit to stay updated on upcoming faculty development programs.</div>
                    </div>
                    <button className="px-6 py-3 bg-p-6 hover:bg-p-7 transition-colors text-white flex items-center gap-4 group">
                        <span className="text-base font-normal font-delight">Request information</span>
                        <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default BlueprintingContent;

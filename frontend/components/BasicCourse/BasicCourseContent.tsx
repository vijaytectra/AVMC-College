"use client";

import React from "react";
import Image from "next/image";


const BasicCourseContent: React.FC = () => {
    const [openDay, setOpenDay] = React.useState<number | null>(0);
    return (
        <div className="w-full bg-Background flex flex-col items-center overflow-hidden pb-10">
            {/* Hero Section */}
            <div className="w-full max-w-[1040px] flex flex-col items-center mt-12 px-4">
                <div className="px-5 py-2.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-p-2 inline-flex justify-center items-center gap-2.5 mb-6">
                    <div className="text-center justify-start text-p-6 text-xs font-normal font-delight uppercase leading-4 tracking-wide">
                        NMC Mandated Program
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-4 text-center">
                    <div className="text-p-7 text-4xl md:text-5xl font-normal font-gc-amelie italic leading-tight md:whitespace-nowrap">
                        Basic Course in Medical Education
                    </div>
                    <div className="text-grey-6 text-lg font-normal font-delight leading-8 md:max-w-[849px]">
                        An NMC mandated faculty development program to enhance teaching, assessment, and mentoring skills.
                    </div>
                </div>
                <Image
                    className="w-full h-auto md:h-96 object-cover mt-12"
                    src="/images/Rectangle%20129%20(1).png"
                    alt="Basic Course Workshop Banner"
                    width={1040}
                    height={384}
                />
            </div>

            {/* Info Bar */}
            <div className="w-full max-w-[700px] bg-white p-6 -mt-5 relative z-10 mx-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 px-2 pt-2 bg-p-1 inline-flex flex-col justify-start items-start">
                        <Image src="/icons/Icon.svg" alt="Date" className="w-5 h-5" width={20} height={20} />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-p-7 text-xs font-normal font-delight uppercase leading-4">Duration</div>
                        <div className="text-grey-10 text-sm font-normal font-delight leading-5">3 Days</div>
                    </div>
                </div>
                <div className="hidden md:block w-px h-9 bg-grey-5 mx-4"></div>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 px-2 pt-2 bg-p-1 inline-flex flex-col justify-start items-start">
                        <Image src="/icons/Icon%20(2).svg" alt="Audience" className="w-5 h-5" width={20} height={20} />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-p-7 text-xs font-normal font-delight uppercase leading-4">Conducted by</div>
                        <div className="text-grey-10 text-sm font-normal font-delight leading-5">Medical Education Unit (MEU)</div>
                    </div>
                </div>
                <div className="hidden md:block w-px h-9 bg-grey-5 mx-4"></div>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 px-2 pt-2 bg-p-1 inline-flex flex-col justify-start items-start">
                        <Image src="/icons/Icon%20(3).svg" alt="Format" className="w-5 h-5" width={20} height={20} />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-p-7 text-xs font-normal font-delight uppercase leading-4">Format</div>
                        <div className="text-grey-10 text-sm font-normal font-delight leading-5">Workshops & Activities</div>
                    </div>
                </div>
            </div>

            {/* What is BCME? */}
            <div className="w-full max-w-[1040px] px-4 mt-20">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-full flex-1 flex flex-col gap-6">
                        <div className="text-p-7 text-3xl font-normal font-gc-amelie italic leading-9">What is BCME?</div>
                        <div className="text-grey-7 text-lg font-normal font-delight leading-8 tracking-wide">
                            The Basic Course in Medical Education (BCME) is a structured faculty development program designed to equip medical teachers with essential pedagogical skills. Unlike traditional lecture-based workshops, BCME emphasizes practical, hands-on training through interactive sessions, group activities, and real-world teaching scenarios.
                        </div>
                    </div>
                </div>
            </div>

            {/* Why BCME Matters */}
            <div className="w-full max-w-[1040px] px-4 mt-20">
                <div className="md:hidden text-p-7 text-3xl font-normal font-gc-amelie italic leading-9 mb-6">Why BCME Matters for Faculty</div>
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <Image className="w-full md:w-[493px] h-auto object-cover" src="/images/Rectangle%20128%20(2).png" alt="Why BCME Matters for Faculty" width={493} height={300} />
                    <div className="flex-1 flex flex-col gap-8">
                        <div className="hidden md:block text-p-7 text-3xl font-normal font-gc-amelie italic leading-9">Why BCME Matters for Faculty</div>
                        <div className="flex flex-col gap-3.5">
                            {[
                                { title: "Teaching Effectiveness", desc: "Improves classroom and clinical teaching effectiveness evidence methods", icon: "/icons/Icon%20(4).svg" },
                                { title: "Assessment & Feedback", desc: "Builds confidence in assessment design and constructive feedback delivery", icon: "/icons/2.svg" },
                                { title: "Ethics & Professionalism", desc: "Strengthens communication, ethics, and professionalism in medical teaching", icon: "/icons/3.svg" },
                                { title: "Career Progression", desc: "Essential for academic growth, promotions, and meeting regulatory requirements", icon: "/icons/4.svg" }
                            ].map((item, idx) => (
                                <div key={idx} className="p-[5px] bg-white outline outline-1 outline-offset-[-1px] outline-p-2 flex items-center gap-3.5">
                                    <div className="w-14 h-14 p-2.5 bg-[#F9F6EE] outline outline-1 outline-offset-[-1px] outline-p-2 flex justify-center items-center gap-2.5">
                                        <Image src={item.icon} alt="Icon" className="w-6 h-6 text-p-5" width={24} height={24} />
                                    </div>
                                    <div className="flex-1 inline-flex flex-col justify-center items-start gap-1 min-w-0">
                                        <div className="self-stretch justify-start text-slate-700 text-base font-normal font-delight leading-5">
                                            {item.title}
                                        </div>
                                        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                                            <div className="flex-1 justify-start text-grey-6 text-xs font-normal font-delight leading-5 md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
                                                {item.desc}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Who Should Attend */}
            <div className="w-full max-w-[1040px] px-4 mt-20">
                <div className="w-full p-11 bg-[#F9F6EE] outline outline-1 outline-offset-[-1px] outline-p-2 relative overflow-hidden">
                    {/* DNA Background Element */}
                    <Image
                        className="hidden md:block absolute -right-[500px] -top-[5px] w-[1000px] h-auto rotate-[180deg] opacity-100 mix-blend-multiply pointer-events-none"
                        src="/images/image%208.png"
                        alt="DNA Background"
                        width={1000}
                        height={500}
                    />

                    <div className="relative z-10 flex flex-col gap-5 max-w-2xl">
                        <div className="text-p-7 text-3xl font-normal font-gc-amelie italic leading-9">Who Should Attend</div>
                        <div className="text-grey-7 text-lg font-normal font-delight leading-10">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Undergraduate and Postgraduate teaching faculty</li>
                                <li>Newly appointed faculty members</li>
                                <li>Faculty seeking NMC-mandated certification</li>
                                <li>Faculty involved in teaching, assessment, or mentoring</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Your Gains from BCME */}
            <div className="w-full mt-20 bg-p-8 py-12 flex justify-center">
                <div className="w-full max-w-[1040px] px-4">
                    <div className="text-center text-background-2 text-3xl font-normal font-gc-amelie italic leading-9 mb-8">Your Gains from BCME</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Teaching & Learning Foundations", items: ["Learning processes and adult learning principles", "Teaching-learning methods for large and small groups", "Competency-Based Medical Education (CBME) concepts"], icon: <Image src="/icons/gains-icon-2.png" alt="Icon" className="w-6 h-6" width={24} height={24} /> },
                            { title: "Assessment & Feedback", items: ["Formative and summative assessment methods", "Blueprinting, MCQs, SAQs, and essay questions", "Providing effective, constructive feedback"], icon: <Image src="/icons/gains-icon-1.png" alt="Icon" className="w-6 h-6" width={24} height={24} /> },
                            { title: "Clinical & Practical Skills Teaching", items: ["Skills lab usage and workplace-based assessment", "OSCE, OSPE, Mini-CEX, DOPS methods", "Simulation-based teaching techniques"], icon: <Image src="/icons/gains-icon-4.png" alt="Icon" className="w-6 h-6" width={24} height={24} /> },
                            { title: "Professional Skills", items: ["AETCOM: communication, ethics, professionalism", "Mentoring and academic guidance", "Self-Directed Learning (SDL) strategies"], icon: <Image src="/icons/gains-icon-3.png" alt="Icon" className="w-6 h-6" width={24} height={24} /> }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-p-6 p-2 outline outline-1 outline-offset-[-1px] outline-p-6/50">
                                <div className="bg-p-8 p-6 h-full flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2.5 bg-p-6 outline outline-1 outline-offset-[-1px] outline-p-6/50 flex items-center justify-center text-Background">
                                            {card.icon}
                                        </div>
                                        <div className="text-background-2 text-lg font-medium font-delight leading-none">{card.title}</div>
                                    </div>
                                    <div className="flex flex-col gap-2 pl-[0.8rem]">
                                        {card.items.map((it, i) => (
                                            <div key={i} className="text-grey-4 text-base font-normal font-delight leading-6 flex gap-2">
                                                <span>•</span>
                                                <span>{it}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* How the Course is Conducted */}
            <div className="w-full max-w-[1040px] px-4 mt-20">
                <div className="flex flex-col md:flex-row gap-11 items-start">
                    <div className="md:w-1/3 flex flex-col gap-6 sticky top-20">
                        <div className="text-p-7 text-4xl font-normal font-gc-amelie italic leading-10">How the Course is Conducted</div>
                        <div className="w-32 h-px bg-p-4"></div>
                        <div className="text-grey-7 text-base font-normal font-delight leading-6">
                            A blend of interactive methods designed for active engagement and practical skill development.
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { id: "01", text: "Interactive Lectures" },
                            { id: "02", text: "Group Discussions" },
                            { id: "03", text: "Assessment Labs" },
                            { id: "04", text: "Case-Based Learning" },
                            { id: "05", text: "Microteaching Stations" },
                            { id: "06", text: "Reflection & Feedback" },
                        ].map((step, idx) => (
                            <div key={idx} className="outline outline-1 outline-offset-[-1px] outline-p-2 p-6 border-l-[11px] border-p-5 flex items-center gap-6 bg-white hover:shadow-md transition-shadow">
                                <div className="text-p-2 text-4xl font-normal font-mounsta opacity-70 leading-10">{step.id}</div>
                                <div className="text-slate-900 text-base font-normal font-delight leading-7 whitespace-nowrap">{step.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Course Duration & Structure */}
            <div className="w-full max-w-[1040px] px-4 mt-20">
                <div className="flex flex-col items-center gap-11">
                    <div className="text-center flex flex-col gap-2 max-w-2xl">
                        <div className="text-p-7 text-4xl font-normal font-gc-amelie italic leading-10">Course Duration & Structure</div>
                        <div className="text-grey-7 text-base font-normal font-delight leading-6">A comprehensive 3-day program with focused learning themes each day.</div>
                    </div>

                    <div className="w-full flex flex-col gap-3">
                        {[
                            { day: "DAY 1", title: "Foundations of Teaching & Assessment", subtitle: "Teaching methods, learning principles, assessment basics", details: ["Introduction to medical education and CBME", "Adult learning principles and learning theories", "Large group and small group teaching methods", "Introduction to assessment in medical education", "Formative and summative assessment concepts"] },
                            { day: "DAY 2", title: "Skills, AETCOM & Advanced Assessment", subtitle: "Clinical skills teaching, SDL, blueprinting, MCQs", details: ["Clinical skills teaching", "Self-Directed Learning (SDL)", "Blueprinting", "Multiple Choice Questions (MCQs)"] },
                            { day: "DAY 3", title: "Academic Growth & Mentoring", subtitle: "Lesson planning, mentoring, competency alignment, networking", details: ["Lesson planning", "Mentoring", "Competency alignment", "Networking"] }
                        ].map((dayInfo, idx) => (
                            <div key={idx}
                                className="bg-white outline outline-1 outline-offset-[-1px] outline-grey-4 flex flex-col cursor-pointer transition-all duration-300"
                                onClick={() => setOpenDay(openDay === idx ? null : idx)}>

                                <div className="p-6 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                                    <div className="w-28 h-16 flex justify-center items-center shrink-0 bg-white rounded">
                                        <div className="text-p-4 text-xl font-normal font-mounsta leading-7">{dayInfo.day}</div>
                                    </div>
                                    <div className="flex-1 w-full flex justify-between items-start">
                                        <div className="flex flex-col gap-1">
                                            <div className="text-grey-9 text-xl font-medium font-delight leading-7">{dayInfo.title}</div>
                                            <div className="text-grey-7 text-lg font-normal font-delight leading-7">{dayInfo.subtitle}</div>
                                        </div>
                                        <Image
                                            src="/icons/arrow_drop_up.svg"
                                            alt="Toggle"
                                            className={`w-6 h-6 transition-transform duration-300 ${openDay === idx ? '' : 'rotate-180'}`}
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                </div>

                                <div className={`px-6 md:pl-[10.5rem] overflow-hidden transition-all duration-300 ease-in-out ${openDay === idx ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    {dayInfo.details.length > 0 && (
                                        <ul className="list-disc pl-5 space-y-1 text-grey-9 text-base font-normal font-delight leading-7">
                                            {dayInfo.details.map((d, i) => <li key={i}>{d}</li>)}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* NMC Accreditation */}
            <div className="w-full max-w-[1040px] px-4 mt-20">
                <div className="relative">
                    {/* Background Offset Border */}
                    <div className="absolute top-[14px] -left-[14px] w-full h-full border-2 border-p-5 rounded-[44px] bg-transparent"></div>

                    {/* Main Card */}
                    <div className="relative bg-white rounded-[44px] border-2 border-p-5 p-8 md:p-12 flex flex-col items-center gap-8 text-center z-10">
                        <div className="p-3 outline outline-2 outline-p-2 inline-flex justify-start items-center gap-2.5">
                            <div className="w-14 h-14 px-2.5 py-[5px] flex justify-start items-center gap-2.5">
                                <Image src="/icons/shield%20(1).svg" alt="Shield" className="w-10 h-12" width={40} height={48} />
                            </div>
                        </div>

                        <div className="max-w-2xl flex flex-col gap-5">
                            <div className="text-p-7 text-3xl font-normal font-gc-amelie italic leading-10">NMC Accreditation & Mandate</div>
                            <div className="text-base leading-7 tracking-wide text-grey-7 font-delight">
                                The Basic Course in Medical Education (BCME) is mandated by <span className="text-grey-8 font-semibold">the National Medical Commission (NMC)</span> for all medical faculty.
                            </div>
                        </div>

                        <div className="max-w-3xl text-grey-6 text-sm font-normal font-delight leading-7">
                            Successful completion is a prerequisite for academic progression and promotion within the institution. All certificates issued are recognized by the NMC for faculty development requirements.
                        </div>
                    </div>
                </div>
            </div>


            {/* CTA */}
            <div className="w-full max-w-[1040px] px-4 mt-20 mb-0">
                <div className="w-full p-8 flex flex-col md:flex-row justify-between items-center gap-8 rounded-lg">
                    <div className="max-w-xl flex flex-col gap-2">
                        <div className="text-p-7 text-3xl font-normal font-gc-amelie italic leading-10">Ready to enhance your academic journey?</div>
                        <div className="text-[#45556C] text-lg font-normal font-delight leading-7">Connect with the Medical Education Unit to stay updated on upcoming Basic Course in Medical Education (BCME).</div>
                    </div>
                    <button className="px-6 py-3 bg-p-6 hover:bg-p-7 transition-colors text-white flex items-center gap-4 group shadow-sm">
                        <span className="text-grey-1 text-base font-normal font-delight leading-5 tracking-tight">Contact the Medical Education Unit</span>
                        <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default BasicCourseContent;

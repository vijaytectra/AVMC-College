"use client";

import React from "react";
import Image from "next/image";

const MedicalEducationUnitContent: React.FC = () => {
    return (
        <div className="w-full bg-white flex flex-col items-center">
            {/* Top Image Section */}
            <div className="relative w-full h-auto">
                <Image
                    className="w-full h-auto block"
                    src="/images/unsplash_Ucr4Yp-t364.png"
                    alt="Medical Education Unit"
                    width={1440}
                    height={600}
                />
            </div>

            {/* Overlapping Content Section */}
            {/* Overlapping Content Section */}
            <div className="relative w-full flex justify-center -mt-20 md:-mt-32 z-10">
                <div className="w-[85%] md:w-[75%] max-w-[1040px] bg-white pt-8 px-4 md:pt-12 md:px-10 pb-20 flex flex-col items-center gap-11 shadow-[0px_-4px_24px_rgba(0,0,0,0.05)] ">

                    {/* Header Snippet from User */}
                    <div className="self-stretch inline-flex flex-col justify-start items-center gap-8">
                        <div className="w-full max-w-[482px] flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
                            <div data-property-1="Default" className="px-3 py-1.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-p-2 flex justify-start items-center gap-[5px]">
                                <Image src="/icons/license.svg" alt="License" className="w-4 h-4" width={16} height={16} />
                                <div className="text-center justify-start text-p-6 text-sm font-normal font-delight leading-6 tracking-tight">NMC Observed</div>
                            </div>
                            <div data-property-1="Default" className="px-3 py-1.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-p-2 flex justify-start items-center gap-[5px]">
                                <Image src="/icons/shield.svg" alt="UGC Mandated" className="w-4 h-4" width={16} height={16} />
                                <div className="text-center justify-start text-p-6 text-sm font-normal font-delight leading-6 tracking-tight">UGC Mandated</div>
                            </div>
                            <div data-property-1="Default" className="px-3 py-1.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-p-2 flex justify-start items-center gap-[5px]">
                                <Image src="/icons/task_alt.svg" alt="VMRF Approved" className="w-4 h-4" width={16} height={16} />
                                <div className="text-center justify-start text-p-6 text-sm font-normal font-delight leading-6 tracking-tight">VMRF Approved</div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-center gap-1">
                            <div className="self-stretch text-center justify-start text-p-7 text-5xl font-normal font-gc-amelie italic">Medical Education Unit</div>
                            <div className="self-stretch text-center justify-start text-grey-7 text-sm font-normal font-delight leading-6 tracking-tight">Empowering faculty and students with modern medical education methodologies aligned with NMC standards and Competency-Based Medical Education (CBME) framework.</div>
                        </div>
                    </div>

                    <div className="w-full max-w-[482px] md:w-80 h-12 px-5 py-2.5 bg-p-6 inline-flex justify-center items-center gap-2.5 cursor-pointer hover:bg-p-7 transition-colors">
                        <div className="flex justify-start items-center gap-60">
                            <div className="justify-center text-white text-base font-normal font-delight leading-5 tracking-tight">View MEU Programs</div>
                        </div>
                    </div>

                    {/* About Section - Inside the Card */}
                    <div className="w-full mt-16 flex flex-col md:flex-row gap-8 items-stretch">
                        {/* Left Content */}
                        <div className="flex-1 flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <div className="inline-flex items-center gap-3">
                                    <Image src="/icons/Vector%2010.svg" alt="Decoration" className="w-[60px] h-[5px] md:w-[200px] md:h-[10px]" width={200} height={10} />
                                    <span className="text-p-7 text-base font-normal font-gc-amelie leading-5 tracking-tight">About</span>
                                </div>
                                <div className="text-p-6 text-xl sm:text-2xl md:text-3xl font-normal font-gc-amelie italic text-left whitespace-nowrap">Medical Education Unit</div>
                            </div>

                            <div className="w-full md:hidden">
                                <Image
                                    src="/images/Rectangle%20128.png"
                                    alt="Medical Education Unit Session"
                                    width={567}
                                    height={490}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div className="self-stretch justify-start">
                                <span className="text-grey-6 text-base font-normal font-delight leading-7 tracking-tight">The Medical Education Unit (MEU) at Aarupadai Veedu Medical College & Hospital serves as the cornerstone for faculty development and educational innovation. Operating under the aegis of Vinayaka Mission&apos;s Research Foundation, our MEU is committed to transforming medical education through evidence-based practices.<br /><br />Our programs are designed in accordance with the guidelines set by the&nbsp;</span>
                                <span className="text-grey-10 text-base font-normal font-delight leading-7 tracking-tight">National Medical Commission (NMC)</span>
                                <span className="text-grey-6 text-base font-normal font-delight leading-7 tracking-tight">&nbsp;and aligned with the&nbsp;</span>
                                <span className="text-grey-10 text-base font-normal font-delight leading-7 tracking-tight">Competency-Based Medical Education (CBME</span>
                                <span className="text-grey-6 text-base font-normal font-delight leading-7 tracking-tight">) framework. We work closely with the NTTC, JIPMER Puducherry as our nodal center.<br /><br />Through structured workshops, induction programs, and continuous professional development initiatives, we equip faculty members and postgraduate students with the skills necessary for effective teaching, assessment, and mentoring.</span>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="hidden md:block w-full md:w-[450px]">
                            <Image
                                src="/images/Rectangle%20128.png"
                                alt="Medical Education Unit Session"
                                width={567}
                                height={490}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Training Programs Section */}
            <div className="w-[85%] md:w-[75%] max-w-[1040px] relative py-20 px-6 bg-cover bg-center mt-0" style={{ backgroundImage: "url('/images/paper%20bg%20for%20car.png')" }}>
                <div className="w-full mx-auto flex flex-col items-center gap-11">
                    <div className="self-stretch text-center justify-center text-p-6 text-3xl font-normal font-gc-amelie italic leading-5">2025 Training Programs</div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                        {[
                            {
                                tag: "Half-Day Workshop",
                                tagBg: "bg-[#FFF9E5]",
                                tagBorder: "border-[#FFE58F]",
                                title: "Blueprinting & Clinical Reasoning Workshop",
                                date: "17 April 2025",
                                members: "40 Faculty Members"
                            },
                            {
                                tag: "NMC Observed",
                                tagBg: "bg-[#FFF9E5]",
                                tagBorder: "border-[#FFE58F]",
                                title: "BCME – Basic Course in Medical Education",
                                date: "11-13 August 2025",
                                members: "27 Faculty Members"
                            },
                            {
                                tag: "UGC Mandated",
                                tagBg: "bg-[#FFF9E5]",
                                tagBorder: "border-[#FFE58F]",
                                title: "Gurudhakshatha – Faculty Induction Program",
                                date: "29-31 October 2025",
                                members: "37 New Faculty Members"
                            },
                            {
                                tag: "NMC/VMRF Compliant",
                                tagBg: "bg-[#FFF9E5]",
                                tagBorder: "border-[#FFE58F]",
                                title: "PG Medical Education Technology Workshop",
                                date: "8 December 2025",
                                members: "91 First-Year PG Students"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 flex flex-col justify-between items-start gap-8 shadow-sm hover:shadow-md transition-shadow h-80">
                                <div className="flex flex-col items-start gap-6 self-stretch">
                                    <div data-property-1="Default" className={`px-4 py-1.5 ${item.tagBg} outline outline-1 outline-offset-[-1px] outline-grey-4 inline-flex justify-start items-center gap-[5px]`}>
                                        <div className="text-center justify-start text-p-6 text-sm font-normal font-delight leading-6 tracking-tight">{item.tag}</div>
                                    </div>
                                    <div className="flex flex-col gap-5 self-stretch">
                                        <div className="text-p-7 text-lg font-medium font-delight leading-6 tracking-tight">{item.title}</div>
                                        <div className="flex flex-col gap-3.5">
                                            <div className="flex items-center gap-2">
                                                <Image src="/icons/calendar_today.svg" alt="Date" className="w-4 h-4 opacity-60" width={16} height={16} />
                                                <span className="text-grey-8 text-sm font-normal font-delight">{item.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-grey-8 opacity-60">
                                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-grey-8 text-sm font-normal font-delight">{item.members}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex justify-end items-center gap-2 cursor-pointer group">
                                    <span className="text-p-6 text-base font-normal font-delight">View Details</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-p-6 group-hover:translate-x-1 transition-transform">
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MEU Team Section */}
            <div className="w-[85%] md:w-[75%] max-w-[1040px] mx-auto py-20 flex flex-col items-center gap-12">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-center justify-center text-p-6 text-3xl font-normal font-gc-amelie italic leading-5">MEU Team</div>
                    <div className="justify-start text-grey-6 text-base font-normal font-delight leading-7 tracking-tight">Expert faculty leading medical education initiatives</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {[
                        {
                            name: "Dr. Ramesh Kumar",
                            role: "MEU Coordinator",
                            dept: "Department of Physiology",
                            qual: "MD, PhD, FAIMER Fellow",
                            img: "/images/image%2082.png"
                        },
                        {
                            name: "Dr. Priya Shankar",
                            role: "Dean – Academic Affairs",
                            dept: "AVMC Administration",
                            qual: "MS, MCh, FACS",
                            img: "/images/image%2083.png"
                        },
                        {
                            name: "Dr. Venkatesh Iyer",
                            role: "Associate MEU Coordinator",
                            dept: "Department of Anatomy",
                            qual: "MD, DNB, MCI Basic Workshop Certified",
                            img: "/images/image%2084.png"
                        }
                    ].map((member, index) => (
                        <div key={index} className="w-48 inline-flex flex-col justify-start items-center gap-6 mx-auto">
                            <div className="w-32 h-36 relative bg-p-2 rounded-xl overflow-hidden">
                                <Image
                                    className="w-40 h-56 left-[-6px] top-[-9px] absolute object-cover"
                                    src={member.img}
                                    alt={member.name}
                                    width={160}
                                    height={224}
                                />
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                                    <div className="w-44 text-center justify-start text-p-7 text-lg font-medium font-delight leading-6 tracking-tight">{member.name}</div>
                                    <div className="w-44 text-center justify-start text-grey-9 text-sm font-normal font-delight leading-6 tracking-tight">{member.role}</div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-center">
                                    <div className="w-48 text-center justify-start text-grey-6 text-sm font-normal font-delight leading-6 tracking-tight">{member.dept}</div>
                                    <div className="w-48 text-center justify-start text-grey-6 text-xs font-normal font-delight leading-6 tracking-tight">{member.qual}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Accreditations & Affiliations Section */}
            <div className="w-[85%] md:w-[75%] max-w-[1040px] mx-auto pb-20">
                <div className="w-full p-8 relative bg-p-7 rounded-xl flex flex-col justify-start items-center gap-11 overflow-hidden">
                    <div className="w-72 h-64 origin-top-left rotate-[-36.63deg] bg-white/10 absolute top-0 left-0" />
                    <div className="w-full md:w-[523px] flex flex-col justify-start items-center gap-3 relative z-10">
                        <div className="self-stretch text-center justify-center text-white text-3xl font-normal font-gc-amelie italic leading-10">Accreditations & Affiliations</div>
                        <div className="w-full text-center justify-start text-grey-5 text-base font-normal font-delight leading-7 tracking-tight">Our institution maintains the highest standards of medical education as recognized by leading accreditation bodies.</div>
                    </div>
                    <div className="self-stretch flex justify-center items-center gap-2 flex-wrap content-center relative z-10">
                        {[
                            "NMC Recognized",
                            "NAAC Accredited",
                            "NABH Accredited",
                            "VMRF (Deemed University)",
                            "NTTC, JIPMER Nodal Center"
                        ].map((item, index) => (
                            <div key={index} className="px-3 py-1.5 bg-p-6 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-p-5 flex justify-start items-center gap-[5px]">
                                <div className="text-center justify-start text-white text-sm font-normal font-delight leading-6 tracking-tight">{item}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MedicalEducationUnitContent;

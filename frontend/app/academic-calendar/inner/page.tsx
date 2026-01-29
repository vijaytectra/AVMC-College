import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, FileText, Download } from 'lucide-react';

export default function InnerAcademicCalendarPage() {
    return (
        <div className="w-full min-h-screen bg-grey-1 flex flex-col font-delight">
            {/* Hero Section */}
            <div className="relative w-full h-[400px] md:h-72 overflow-hidden bg-p-7 shrink-0">
                {/* Concentric Geometric Pattern */}
                <div className="absolute left-1/2 top-[315px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                    <div className="relative flex items-center justify-center">
                        {[1471, 1353, 1236, 1119, 1002, 885, 768, 651, 534, 417, 300, 183].map((size, i) => (
                            <div
                                key={i}
                                className="absolute border border-[#4B46A9] rounded-full"
                                style={{ width: size, height: size }}
                            />
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-8">
                    <h1 className="text-white text-3xl md:text-5xl font-normal font-gc-amelie italic mb-4">Academic Calendar 2026 - 2027</h1>
                    <p className="w-full max-w-[472px] text-grey-4 text-sm font-normal leading-5 tracking-wide">
                        Your comprehensive guide to the academic year, including key dates, examinations, clinical rotations, and institutional holidays.
                    </p>
                </div>

                {/* Back Button */}
                <Link href="/academic-calendar" className="absolute top-6 left-4 md:left-[200px] z-20 flex items-center gap-2 text-p-1 hover:text-white transition-colors">
                    <div className="p-1">
                        <Image src="/icons/arrow_left_alt.svg" width={20} height={20} alt="Back" />
                    </div>
                    <span className="text-sm font-normal">Back</span>
                </Link>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-[1040px] mx-auto px-4 md:px-0 py-8 flex flex-col gap-12 pb-24">

                {/* Batch Selection */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3.5 text-[#262366]">
                        <Image src="/icons/calendar_today.svg" width={20} height={20} alt="Select Batch" />
                        <span className="text-base font-normal">Select Batch</span>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-4">
                        {[
                            { year: '2025', active: true },
                            { year: '2024', active: false },
                            { year: '2023', active: false },
                            { year: '2022', active: false }
                        ].map((batch, i) => (
                            <button
                                key={i}
                                className={`flex-1 h-14 p-2.5 flex justify-center items-center gap-2.5 text-base
                                    ${batch.active
                                        ? 'bg-[#2D2A74] text-white font-medium'
                                        : 'bg-[#E8E7F4] text-grey-7 font-normal'
                                    }
                                `}
                            >
                                Batch {batch.year}
                            </button>
                        ))}
                    </div>
                </div>

                {/* I MBBS Info Card */}
                <div className="flex flex-col">
                    {/* Header */}
                    <div className="w-full p-8 bg-[#2D2A74] flex flex-col md:flex-row justify-between items-center">
                        <div className="w-64 flex flex-col justify-start items-start gap-5">
                            <div className="w-full justify-center text-white text-xl font-medium">I MBBS</div>
                            <div className="w-full flex flex-col justify-start items-start gap-2.5">
                                <div className="w-full justify-center text-white text-xl font-medium">Academic Year 2026-2027</div>
                                <div className="w-full justify-center text-white text-sm font-medium">Phase I (Pre-Clinical)</div>
                            </div>
                        </div>
                        <div className="px-5 py-2.5 bg-[#262366] rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#4B46A9] inline-flex justify-center items-center gap-2.5">
                            <div className="justify-center text-white text-sm font-medium font-delight">150 Students</div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="p-3 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                            <InfoCard
                                label="Institution"
                                value="AARUPADAI VEEDU MEDICAL COLLEGE & HOSPITAL"
                                icon="/icons/ac_institution.png"
                            />
                            <InfoCard
                                label="Duration"
                                value="October 2025 - August 2026"
                                icon="/icons/ac_duration.png"
                            />
                            <InfoCard
                                label="Students"
                                value="150 Enrolled"
                                icon="/icons/ac_students.png"
                            />
                            <InfoCard
                                label="Phase"
                                value="Phase I (Pre-Clinical)"
                                icon="/icons/ac_phase.png"
                            />
                        </div>
                        <div className="mt-3 flex justify-start items-center">
                            <p className="text-grey-6 text-sm">Subject to University / Regulatory authority changes</p>
                        </div>
                    </div>
                </div>

                {/* Month-wise Calendar Title */}
                <div className="flex items-center gap-3.5 text-[#262366]">
                    <Image src="/icons/calendar_today.svg" width={25} height={25} alt="Calendar" className="w-6 h-6" />
                    <h2 className="text-2xl font-normal">I MBBS - Month-wise Academic Calendar</h2>
                </div>

                {/* Calendar List */}
                <div className="flex flex-col gap-8">
                    <CalendarMonth
                        month="October"
                        events={[
                            { date: '01.06.2026 to 06.06.2026', type: 'Exam', typeColor: 'exam', desc: '1st Internal Assessment (IA-1)', status: 'Completed', icon: '/icons/ac_exam_pencil.png' }
                        ]}
                    />
                    <CalendarMonth
                        month="December"
                        events={[
                            { date: '15.12.2025 to 20.12.2025', type: 'vacation', typeColor: 'vacation', desc: '1st Internal Assessment (IA-1)', status: 'Upcoming', icon: '/icons/ac_vacation.png' },
                            { date: '01.06.2026 to 06.06.2026', type: 'Exam', typeColor: 'exam', desc: 'Circular issued - Master Timetable, Academic Calendar & Schedules', status: 'Upcoming', icon: '/icons/ac_exam_book.png' }
                        ]}
                    />
                    <CalendarMonth
                        month="January"
                        events={[
                            { date: '01.06.2026 to 06.06.2026', type: 'Ptm', typeColor: 'ptm', desc: '1st Internal Assessment (IA-1)', status: 'Upcoming', icon: '/icons/ac_ptm.png' }
                        ]}
                    />
                    <CalendarMonth
                        month="March"
                        events={[
                            { date: '01.06.2026 to 06.06.2026', type: 'Exam', typeColor: 'exam', desc: '1st Internal Assessment (IA-1)', status: 'Upcoming', icon: '/icons/ac_exam_pencil.png' }
                        ]}
                    />
                    <CalendarMonth
                        month="April"
                        events={[
                            { date: '01.06.2026 to 06.06.2026', type: 'Exam', typeColor: 'exam', desc: '1st Internal Assessment (IA-1)', status: 'Upcoming', icon: '/icons/ac_exam_pencil.png' }
                        ]}
                    />
                    <CalendarMonth
                        month="May"
                        events={[
                            { date: '01.06.2026 to 06.06.2026', type: 'Exam', typeColor: 'exam', desc: '1st Internal Assessment (IA-1)', status: 'Upcoming', icon: '/icons/ac_exam_pencil.png' }
                        ]}
                    />
                    <CalendarMonth
                        month="June"
                        events={[
                            { date: '01.06.2026 to 06.06.2026', type: 'Exam', typeColor: 'exam', desc: '1st Internal Assessment (IA-1)', status: 'Upcoming', icon: '/icons/ac_exam_pencil.png' }
                        ]}
                    />
                    <CalendarMonth
                        month="July"
                        events={[
                            { date: '01.06.2026 to 06.06.2026', type: 'Exam', typeColor: 'exam', desc: '1st Internal Assessment (IA-1)', status: 'Upcoming', icon: '/icons/ac_exam_pencil.png' },
                            { date: '01.06.2026 to 06.06.2026', type: 'Exam', typeColor: 'exam', desc: 'Circular issued - Master Timetable, Academic Calendar & Schedules', status: 'Completed', icon: '/icons/ac_exam_book.png' },
                            { date: '01.06.2026 to 06.06.2026', type: 'Exam', typeColor: 'exam', desc: 'Circular issued - Master Timetable, Academic Calendar & Schedules', status: 'Completed', icon: '/icons/ac_exam_book.png' }
                        ]}
                    />
                    <CalendarMonth
                        month="August"
                        events={[
                            { date: '01.06.2026 to 06.06.2026', type: 'Exam', typeColor: 'exam', desc: '1st Internal Assessment (IA-1)', status: 'Upcoming', icon: '/icons/ac_exam_pencil.png' }
                        ]}
                    />
                </div>

                {/* Examination Details */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3.5 text-[#262366]">
                        <Image src="/icons/calendar_today.svg" width={25} height={25} alt="Calendar" className="w-6 h-6" />
                        <h2 className="text-2xl font-normal">I MBBS - Month-wise Academic Calendar</h2>
                    </div>
                    <div className="w-full overflow-x-auto">
                        <div className="min-w-[900px] flex flex-col">
                            <div className="bg-[#2D2A74] p-6 flex gap-4 text-white text-base font-medium">
                                <div className="w-44 shrink-0">Date</div>
                                <div className="w-80 shrink-0">Examination Type</div>
                                <div className="flex-1">Details / Portions</div>
                            </div>
                            <ExamRow
                                date="15.12.2025 - 20.12.2025"
                                type="1st Internal Assessment (IA-1)"
                                details="Anatomy: General Anatomy, General Histology, General Embryology, Upper Limb; Physiology: General Physiology, Body Fluid, Blood, Immunity, Nerve & Muscle; Biochemistry: Cell, Carbohydrate Chemistry, Lipid Chemistry, Amino Acid & Protein Chemistry, Plasma proteins, Immunology, Hemoglobin chemistry & Metabolism, Enzymes"
                            />
                            <ExamRow
                                date="23.03.2026 - 30.03.2026"
                                type="2nd Internal Assessment (IA-2)"
                                details="Physiology: CVS, RS, Endocrine, Reproduction; Biochemistry: Carbohydrate and Lipid Metabolism, Vitamins, Regulation of blood glucose & DM, TCA & ETC; Anatomy: Lower limb, Thorax, Endocrine & Reproductive system"
                            />
                            <ExamRow
                                date="01.06.2026 - 06.06.2026"
                                type="3rd Internal Assessment (IA-3)"
                                details="Biochemistry: Protein metabolism, minerals, nutrition, acid base balance, Organ function tests, Molecular Biology; Anatomy: Head and Neck, Abdomen, Neuroanatomy; Physiology: CNS, Special senses, GIT, Renal"
                            />
                            <ExamRow
                                date="06.07.2026 - 14.07.2026"
                                type="Send-up Examination (Theory)"
                                details="Complete syllabus - All subjects"
                            />
                            <ExamRow
                                date="16.07.2026 - 18.07.2026"
                                type="Send-up Examination (Practicals)"
                                details="All practical components"
                            />
                            <ExamRow
                                date="August 2026 (1st or 2nd week - tentative)"
                                type="University Examination"
                                details="Theory & Practical"
                            />
                        </div>
                    </div>
                </div>

                {/* Holidays & Policies Grid */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-[#262366] text-2xl font-normal">Holidays & Vacations</h2>
                    <p className="text-grey-6 text-sm">Official holidays and vacation periods for the academic year 2025-2026.</p>

                    {/* Academic Breaks */}
                    <div className="bg-white p-6 flex flex-col gap-6 border border-grey-2 w-full">
                        <h3 className="text-[#2D2A74] text-xl font-normal">Academic Breaks</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <BreakCard title="Mid-Semester Break" date="Oct 13-17, 2025" />
                            <BreakCard title="Winter Vacation" date="Dec 15-26, 2025" />
                            <BreakCard title="Spring Break" date="Mar 23-27, 2026" />
                            <BreakCard title="Summer Vacation" date="Jun 1 - Jul 31, 2026" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* National Holidays */}
                        <div className="bg-white p-6 flex flex-col gap-6 border border-grey-2">
                            <h3 className="text-[#2D2A74] text-xl font-normal">National Holidays</h3>
                            <div className="flex flex-col bg-grey-1 px-3">
                                <HolidayRow name="Independence Day" date="Aug 15, 2025" />
                                <HolidayRow name="Gandhi Jayanti" date="Oct 2, 2025" />
                                <HolidayRow name="Children's Day" date="Nov 14, 2025" />
                                <HolidayRow name="New Year" date="Jan 1, 2026" />
                                <HolidayRow name="Republic Day" date="Jan 26, 2026" />
                                <HolidayRow name="Ambedkar Jayanti" date="Apr 14, 2026" />
                                <HolidayRow name="May Day" date="May 1, 2026" />
                            </div>
                        </div>

                        {/* Religious Holidays */}
                        <div className="bg-white p-6 flex flex-col gap-6 border border-grey-2">
                            <h3 className="text-[#2D2A74] text-xl font-normal">Religious & Cultural Holidays</h3>
                            <div className="flex flex-col bg-grey-1 px-3">
                                {/* Placeholder list as duplicative in original design text, assuming standard set or placeholder needed. Using duplicates from design to match exactly if desired, or unique ones. Design repeated the National Holidays list. I will repeat as per design text or clean up? User requested EXACT design usually. I'll stick to the provided text which repeated them. */}
                                <HolidayRow name="Independence Day" date="Aug 15, 2025" />
                                <HolidayRow name="Gandhi Jayanti" date="Oct 2, 2025" />
                                <HolidayRow name="Children's Day" date="Aug 15, 2025" />
                                <HolidayRow name="New Year" date="Aug 15, 2025" />
                                <HolidayRow name="Republic Day" date="Aug 15, 2025" />
                                <HolidayRow name="Ambedkar Jayanti" date="Aug 15, 2025" />
                                <HolidayRow name="May Day" date="Aug 15, 2025" />
                            </div>
                        </div>
                    </div>
                    <p className="text-grey-6 text-xs">* Dates for religious holidays are tentative and will be confirmed based on the lunar calendar. Additional holidays may be declared by the university or government</p>
                </div>

                {/* Academic Policies */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-[#262366] text-2xl font-normal">Academic Policies</h2>
                    <p className="text-grey-6 text-sm">Important policies and regulations governing academic activities. Students are expected to familiarize themselves with all policies.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <PolicyCard title="Attendance Policy" />
                        <PolicyCard title="Examination Regulations" />
                        <PolicyCard title="Leave & Absence Policy" />
                        <PolicyCard title="Academic integrity" />
                    </div>
                </div>

                {/* Handbook Download */}
                <div className="bg-slate-50 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 rounded-lg">
                    <h3 className="text-[#2D2A74] text-2xl md:text-3xl font-normal font-gc-amelie italic max-w-lg text-center md:text-left">
                        For the complete Student Handbook with all policies and procedures
                    </h3>
                    <button className="bg-[#262366] text-white px-6 py-3 flex items-center gap-3 hover:bg-[#1F1C58] transition-colors ">
                        <span>Download Student handbook (PDF)</span>
                        <Download size={16} />
                    </button>
                </div>

            </div>
        </div>
    );
}

// Sub-components for cleaner code

function InfoCard({ label, value, icon }: { label: string, value: string, icon: string }) {
    return (
        <div className="h-44 p-6 bg-[#E8E7F4] flex flex-col justify-between">
            <div className="flex items-center gap-3">
                <Image src={icon} width={32} height={32} alt={label} className="w-8 h-8 object-contain" />
                <span className="text-[#2D2A74] text-base font-normal font-delight">{label}</span>
            </div>
            <div className="text-grey-8 text-sm md:text-base font-normal font-delight leading-6 uppercase">{value}</div>
        </div>
    );
}

interface CalendarEvent {
    date: string;
    type: string;
    typeColor: string;
    desc: string;
    status: string;
    icon?: string;
}

function CalendarMonth({ month, events }: { month: string, events: CalendarEvent[] }) {
    return (
        <div className="flex flex-col items-end w-full">
            <div className="w-full px-6 py-3.5 bg-[#E8E7F4] text-[#2D2A74] text-base font-normal">
                {month}
            </div>

            <div className="w-full overflow-x-auto">
                <div className="min-w-[900px]">
                    {/* Header */}
                    <div className="w-full bg-[#2D2A74] p-6 grid grid-cols-[11rem_11rem_1fr_11rem] gap-4 items-center text-white text-base font-medium">
                        <div>Date</div>
                        <div>Type</div>
                        <div>Activity Description</div>
                        <div>Status</div>
                    </div>

                    {events.map((ev, i) => (
                        <div key={i} className="w-full p-6 bg-white border-b border-grey-4/50 grid grid-cols-[11rem_11rem_1fr_11rem] gap-4 items-center">
                            <div className="text-grey-8 text-sm font-medium">{ev.date}</div>
                            <div>
                                <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border transform transition-transform hover:scale-105
                                    ${ev.typeColor === 'exam' ? 'bg-[#E8E7F4] text-[#2D2A74] border-[#4B46A9]' : ''}
                                    ${ev.typeColor === 'vacation' ? 'bg-[#E8E7F4] text-[#2D2A74] border-[#4B46A9]' : ''}
                                    ${ev.typeColor === 'ptm' ? 'bg-[#E8E7F4] text-[#2D2A74] border-[#4B46A9]' : ''}
                                `}>
                                    {ev.icon ? (
                                        <div className="relative w-4 h-4 shrink-0">
                                            <Image
                                                src={ev.icon}
                                                alt={ev.type}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <span className="w-2 h-2 rounded-full bg-current shrink-0"></span>
                                    )}
                                    <span className="leading-none">{ev.type}</span>
                                </span>
                            </div>
                            <div className="text-black text-sm">{ev.desc}</div>
                            <div>
                                <span className={`px-4 py-2 rounded-full text-xs border 
                                    ${ev.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-grey-1 text-grey-7 border-grey-4'}
                                `}>
                                    {ev.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ExamRow({ date, type, details }: { date: string, type: string, details: string }) {
    return (
        <div className="w-full p-6 bg-white border-b border-grey-4/50 flex gap-4">
            <div className="w-44 shrink-0 text-grey-7 text-sm font-medium">{date}</div>
            <div className="w-80 shrink-0 text-[#262366] text-sm">{type}</div>
            <div className="flex-1 text-grey-7 text-sm leading-5">{details}</div>
        </div>
    );
}

function BreakCard({ title, date }: { title: string, date: string }) {
    return (
        <div className="p-4 bg-grey-1 border border-grey-3 flex flex-col gap-1">
            <span className="text-grey-6 text-sm">{title}</span>
            <span className="text-grey-10 text-base">{date}</span>
        </div>
    );
}

function HolidayRow({ name, date }: { name: string, date: string }) {
    return (
        <div className="py-4 border-b last:border-0 border-grey-4 flex justify-between items-center text-grey-8 text-base">
            <span>{name}</span>
            <span>{date}</span>
        </div>
    );
}

function PolicyCard({ title }: { title: string }) {
    return (
        <div className="w-full p-4 bg-white border border-grey-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-grey-1 rounded-lg flex items-center justify-center text-[#2D2A74]">
                    <FileText size={20} />
                </div>
                <span className="text-grey-8 text-base">{title}</span>
            </div>
            <ChevronLeft className="rotate-180 text-grey-5" />
        </div>
    );
}

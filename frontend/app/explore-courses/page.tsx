'use client';
import { useState, ReactNode } from 'react';
import Image from 'next/image';


// Define the Course Interface
interface Course {
    category: string;
    tag: string;
    tagBg: string; // Tailwind class
    tagColor: string; // Tailwind class
    title: string;
    description: string;
    // Detail fields
    bannerImage?: string; // Optional banner inside modal
    subtitle?: string;
    about?: string;
    learningOutcomes?: string[];
    eligibility?: string;
    structure?: {
        format: string;
        conductedBy: string;
        assessment: string;
    };
    academicValue?: string[];
    nextSteps?: string;
}

export default function ExploreCoursesPage() {
    const [activeTab, setActiveTab] = useState('All');
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const courses: Course[] = [
        {
            category: 'Undergraduate',
            tag: 'Undergraduate',
            tagBg: 'bg-p-7',
            tagColor: 'text-white',
            title: 'Advanced Cardiac Life Support for PGs',
            description: 'Learn advanced cardiovascular emergency care skills for postgraduate students.',
            subtitle: 'Enhance your ACLS skills through hands-on-training and simulation exercises.',
            about: 'This comprehensive course equips postgraduate students with advanced skills in clinical research design, ethical considerations, and data analysis methodologies essential for conducting impactful medical research.',
            learningOutcomes: [
                'Design rigorous clinical research protocols.',
                'Navigate IRB and ethical approval processes.',
                'Apply advanced biostatistical methods.',
                'Interpret and publish research findings effectively.',
                'Understand regulatory requirements for clinical trials.'
            ],
            eligibility: 'All Undergraduate medical students.',
            structure: {
                format: 'Interactive Workshops case-based learning and hands-on prototype development.',
                conductedBy: 'Department of Community Medicine & Research Cell.',
                assessment: 'As per institutional guidelines with project-based evaluation.'
            },
            academicValue: [
                'Offered as a Value Added Course alongside the core curriculum',
                'Aligned with NMC and NAAC academic standards',
                'Course completion certificate awarded upon completion.'
            ],
            nextSteps: 'For course schedules and enrolment details, please contact the respective department or the Academic Office.'
        },
        {
            category: 'CRMI / CRRI',
            tag: 'CRRI',
            tagBg: 'bg-[#F9F6EE]',
            tagColor: 'text-p-6',
            title: 'Advanced Cardiac Life Support for CRMI',
            description: 'Hands-on ACLS skills for CRMI doctors to manage cardiac emergencies.',
            subtitle: 'Critical care skills for CRMI.',
            about: 'Designed for CRMI practitioners to master ACLS protocols.',
            learningOutcomes: ['Master ACLS algorithms', 'Team dynamics in resuscitation', 'Post-cardiac arrest care'],
            eligibility: 'CRMI / CRRI candidates.',
            structure: {
                format: 'Simulation labs and theory.',
                conductedBy: 'Dept of Emergency Medicine.',
                assessment: 'Practical Exam.'
            },
            academicValue: ['Certificate of Proficiency', 'CME Credits'],
            nextSteps: 'Contact the Emergency Department.'
        },
        {
            category: 'Postgraduate',
            tag: 'Postgraduate',
            tagBg: 'bg-[#F9F6EE]',
            tagColor: 'text-p-6',
            title: 'Basic Cardiac Life Support for PGs',
            description: 'Hands-on ACLS skills for CRMI doctors to manage cardiac emergencies.',
            subtitle: 'Fundamental life support skills.',
            about: 'Basic life support techniques including CPR and AED use.',
            learningOutcomes: ['CPR Proficiency', 'AED Usage', 'Choking management'],
            eligibility: 'Postgraduates.',
            structure: {
                format: 'Half-day workshop.',
                conductedBy: 'Dept of Anaesthesia.',
                assessment: 'Skill demonstration.'
            },
            academicValue: ['Mandatory for clinical practice'],
            nextSteps: 'Register via Intranet.'
        },
        {
            category: 'CRMI / CRRI',
            tag: 'CRMI',
            tagBg: 'bg-[#F9F6EE]',
            tagColor: 'text-p-6',
            title: 'Basic Cardiac Life Support for CRMI',
            description: 'Hands-on ACLS skills for CRMI doctors to manage cardiac emergencies.',
            subtitle: 'BCLS for interns.',
            about: 'Life saving skills for interns.',
            learningOutcomes: ['High quality CPR', 'Airway management'],
            eligibility: 'CRMI',
            structure: { format: 'Workshop', conductedBy: 'Skill Lab', assessment: 'OSCE' },
            academicValue: ['Skill enhancement'],
            nextSteps: 'Walk-in registration.'
        },
        {
            category: 'Undergraduate',
            tag: 'Undergraduate',
            tagBg: 'bg-p-7',
            tagColor: 'text-white',
            title: 'Foundation Course in Palliative Care',
            description: 'Introduction to palliative care principles for undergraduate students.',
            subtitle: 'Care beyond cure.',
            about: 'Sensitization to palliative care philosophy.',
            learningOutcomes: ['Communication skills', 'Pain management basics'],
            eligibility: 'MBBS Students',
            structure: { format: 'Lectures and Role play', conductedBy: 'Palliative Care Unit', assessment: 'Assignment' },
            academicValue: ['Holistic care approach'],
            nextSteps: 'Contact Palliative Unit.'
        }
    ];

    const filteredCourses = activeTab === 'All' ? courses : courses.filter(course => course.category === activeTab);

    return (
        <div className="w-full bg-white flex flex-col min-h-screen font-['Delight'] pb-12 relative">
            {/* Title Section - Reduced gaps */}
            <div className="w-full flex flex-col items-center justify-center pt-8 pb-4 gap-2 text-center px-4">
                <h1 className="text-p-7 text-3xl md:text-[32px] font-['GC_Amelie_Promised_Demo'] italic">
                    Explore Courses
                </h1>
                <p className="text-grey-7 text-sm md:text-base font-normal tracking-wide whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-4">
                    Enhances the core curriculum with clinical practice, research support, and professional readiness.
                </p>
            </div>

            {/* Hero Section with Overlapping Cards - Reduced mb */}
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[150px] mb-12 relative">
                {/* Main Hero Image */}
                <div className="w-full max-w-[1040px] mx-auto h-[400px] md:h-[550px] relative overflow-hidden bg-gray-100">
                    <Image
                        src="/images/explore course hero.png"
                        alt="Explore Courses Hero"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>

                {/* Overlapping Cards */}
                <div className="w-full max-w-[1040px] mx-auto mt-[-80px] md:mt-[-120px] relative z-10 px-4 md:px-[31px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <FeatureCard
                            title="Hands on clinical and emergency skill"
                            iconSrc="/icons/hands on icon.svg"
                        />
                        <FeatureCard
                            title={<>Research and analytics <br /> skill enhancement</>}
                            iconSrc="/icons/research explore course icon.svg"
                        />
                        <FeatureCard
                            title="Professional ethics and awareness"
                            iconSrc="/icons/professional ethics icon.svg"
                        />
                        <FeatureCard
                            title="Career readiness and core curriculum"
                            iconSrc="/icons/career readiness icon.svg"
                        />
                    </div>
                </div>
            </div>

            {/* Main Content Container - Reduced gap */}
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[150px] flex flex-col gap-12">

                {/* Browse Courses Section - Functional */}
                <div className="w-full relative overflow-hidden p-6 md:p-14 min-h-[600px]">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/only browse course bg border 200 gap both side left and right.png"
                            alt="Background"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative z-10 flex flex-col gap-8">
                        {/* Header & Tabs */}
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                            <h2 className="text-p-6 text-3xl font-['GC_Amelie_Promised_Demo'] italic">
                                Browse Course
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {['All', 'Postgraduate', 'CRMI / CRRI', 'Undergraduate'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-8 py-2 text-xs tracking-wider border transition-colors ${activeTab === tab
                                            ? 'bg-p-7 text-white border-p-7'
                                            : 'bg-white border-[#D1D1D6] text-p-8 hover:bg-gray-50'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Course Grid - Dynamic */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredCourses.map((course, index) => (
                                <CourseCard
                                    key={index}
                                    course={course}
                                    onViewDetails={() => setSelectedCourse(course)}
                                />
                            ))}
                            {filteredCourses.length === 0 && (
                                <div className="col-span-1 md:col-span-2 text-center text-gray-500 py-10">
                                    No courses available for this category.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Start Enhancing Skills Section */}
                <div className="flex flex-col items-center gap-8 text-center">
                    <h2 className="text-p-7 text-3xl md:text-[32px] font-['GC_Amelie_Promised_Demo'] italic">
                        Start Enhancing Your Skills Today !
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
                        <StatItem count="7+" label="Value added courses" iconSrc="/icons/value added icon.svg" />
                        <StatItem count="15+" label="Lab quality module" iconSrc="/icons/lab quality icon.svg" />
                        <StatItem count="3+" label="Forensic modules" iconSrc="/icons/forensic module icon.svg" />
                        <StatItem count="28" label="Partner Countries" iconSrc="/icons/partner countries explore course.svg" />
                    </div>
                </div>

                {/* Student Testimonials - Reduced gap */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-p-7 text-3xl font-['GC_Amelie_Promised_Demo'] italic text-center">
                        What Our Student Says
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TestimonialCard
                            name="Ritesh Kumar"
                            role="Advanced Cardiac Support for PGs"
                            quote="Hands-on sessions made response faster for me."
                            imageSrc="/images/ritesh kumar explore.jpg"
                        />
                        <TestimonialCard
                            name="Ananya Patel"
                            role="Research Methodology for PGs"
                            quote="Simplified course & basics , data understanding."
                            imageSrc="/images/ananya patel explore.jpg"
                        />
                    </div>
                </div>

                {/* Contact & Help */}
                <div className="w-full flex justify-center pb-8">
                    <div className="w-full max-w-[831px] relative">

                        {/* Back Border (Offset) */}
                        <div
                            className="absolute inset-0 translate-y-[14px] -translate-x-[14px] border-2 border-p-5 rounded-tr-[44px] rounded-br-[44px] rounded-bl-[44px] pointer-events-none"
                        />

                        {/* Front Card */}
                        <div className="relative w-full bg-white border-2 border-p-5 rounded-tr-[44px] rounded-br-[44px] rounded-bl-[44px] p-8 md:p-12">
                            <div className="flex flex-col gap-10">
                                {/* Header */}
                                <div className="flex flex-col gap-1 items-center text-center">
                                    <h2 className="text-p-8 text-3xl font-['GC_Amelie_Promised_Demo'] italic w-full text-center">
                                        Contact & Help
                                    </h2>
                                    <p className="text-grey-6 text-base font-['Delight'] w-full text-center">
                                        Contact us for academic support, technical help, and general enquiries.
                                    </p>
                                </div>

                                {/* Body */}
                                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                    {/* Image */}
                                    <div className="w-[195px] h-[198px] bg-gray-200 relative flex-shrink-0">
                                        <Image src="/images/s .prabhakar explore.png" alt="Dr. S. Prabhakar" fill className="object-cover" />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 flex flex-col gap-8 w-full">
                                        <div className="flex flex-col gap-4">
                                            <div>
                                                <h3 className="text-grey-9 text-lg font-['Delight']">Dr. S. Prabhakar</h3>
                                                <p className="text-grey-6 text-sm font-['Delight']">Program Coordinator</p>
                                            </div>
                                            <div className="flex flex-col gap-2 text-grey-7">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex items-center justify-center rounded-sm p-0.5">
                                                        <Image src="/images/phone call explore course.svg" alt="Phone" width={12} height={12} />
                                                    </div>
                                                    <span className="text-base font-['Delight']">0413-2611245</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex items-center justify-center rounded-sm p-0.5">
                                                        <Image src="/images/mail explore courses.svg" alt="Mail" width={12} height={12} />
                                                    </div>
                                                    <span className="text-base font-['Delight']">dean@avmc.edu.in</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 w-full">
                                            <button className="flex-1 py-3 bg-p-7 text-white text-xs font-semibold tracking-wider text-center font-['Delight']">
                                                Connect Coordinator
                                            </button>
                                            <button className="flex-1 py-3 border border-[#D1D1D6] text-p-7 text-xs font-semibold tracking-wider text-center font-['Delight']">
                                                Send Enquiry
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Course Detail Modal */}
            {selectedCourse && (
                <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
            )}
        </div>
    );
}

function FeatureCard({ title, iconSrc }: { title: ReactNode, iconSrc: string }) {
    return (
        <div className="bg-white p-6 border border-[#D1D1D6] flex flex-col gap-6 min-h-[168px] h-full shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2.5 bg-p-2 w-fit">
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <Image src={iconSrc} alt="icon" fill className="object-contain" />
                </div>
            </div>
            <div>
                <h3 className="text-p-7 text-base font-medium font-['Delight'] leading-snug tracking-wide">
                    {title}
                </h3>
            </div>
        </div>
    )
}

function CourseCard({ course, onViewDetails }: { course: Course, onViewDetails: () => void }) {
    return (
        <div className="bg-white p-6 flex flex-col justify-between gap-6 min-h-[265px] border border-transparent hover:border-gray-200 transition-colors">
            <div className="flex flex-col gap-6">
                <span className={`px-4 py-1 self-start text-sm ${course.tagBg} ${course.tagColor}`}>
                    {course.tag}
                </span>
                <div className="flex flex-col gap-4">
                    <h3 className="text-p-7 text-lg font-medium leading-snug">
                        {course.title}
                    </h3>
                    <p className="text-grey-7 text-sm">
                        {course.description}
                    </p>
                </div>
            </div>

            <div
                className="flex items-center justify-end gap-2 text-p-6 cursor-pointer group"
                onClick={onViewDetails}
            >
                <span className="text-base tracking-wider group-hover:underline">View Details</span>
                <div className="w-6 h-6 flex items-center justify-center relative">
                    <Image src="/images/arrow_right_alt expllore courses.svg" alt="arrow" width={20} height={20} />
                </div>
            </div>
        </div>
    )
}

function StatItem({ count, label, iconSrc }: { count: string, label: string, iconSrc: string }) {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="w-[60px] h-[60px] bg-p-2 flex items-center justify-center ">
                <div className="w-8 h-8 relative">
                    <Image src={iconSrc} alt={label} fill className="object-contain" />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-p-7 text-3xl font-medium tracking-widest">{count}</span>
                <span className="text-grey-6 text-sm tracking-wide">{label}</span>
            </div>
        </div>
    )
}

function TestimonialCard({ name, role, quote, imageSrc }: { name: string, role: string, quote: string, imageSrc: string }) {
    return (
        <div className="bg-white p-6 border border-[#D1D1D6] flex gap-6 items-end">
            <div className="w-[99px] h-[124px] bg-[#D9D9D9] flex-shrink-0 relative">
                <Image src={imageSrc} alt={name} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 pb-2">
                <div>
                    <h4 className="text-grey-9 text-lg tracking-wide">{name}</h4>
                    <p className="text-grey-9 text-sm opacity-80">{role}</p>
                </div>
                <p className="text-p-7 font-semibold text-sm leading-tight mt-1">
                    &quot;{quote}&quot;
                </p>
                {/* Stars */}
                <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="relative w-4 h-4">
                            <Image src="/images/star explore courses.svg" alt="star" fill className="object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Sidebar Modal Component
function CourseModal({ course, onClose }: { course: Course, onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 transition-opacity" onClick={onClose} />

            {/* Slide-over Panel */}
            <div className="relative w-full max-w-[687px] bg-white h-full overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300">
                <div className="p-8 md:p-[50px] flex flex-col gap-10">

                    {/* Header Section */}
                    <div className="flex flex-col gap-8">
                        {/* Tags and Close */}
                        <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                                <span className="px-4 py-1.5 rounded-full border border-[#D2D0EA] text-[#262366] text-sm flex items-center gap-2">
                                    <div className="w-4 h-4 relative">
                                        <Image src="/icons/inner browse course icon.svg" alt="icon" fill className="object-contain" />
                                    </div>
                                    {course.tag}
                                </span>
                                <span className="px-4 py-1.5 rounded-full bg-[#262366] text-white text-sm">
                                    New Course
                                </span>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                                {/* Close X Icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="flex flex-col gap-3">
                            <h2 className="text-[#262366] text-[32px] font-['GC_Amelie_Promised_Demo'] italic leading-tight">
                                {course.title}
                            </h2>
                            <p className="text-[#525252] text-sm leading-6">
                                {course.subtitle || course.description}
                            </p>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="flex flex-col gap-12">

                        {/* About the Course */}
                        {course.about && (
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 bg-[#D2D0EA] w-fit">
                                        <div className="w-5 h-5 relative">
                                            <Image src="/icons/about the.svg" alt="About" fill className="object-contain" />
                                        </div>
                                    </div>
                                    <h3 className="text-[#2D2A74] text-xl font-['GC_Amelie_Promised_Demo'] italic tracking-wide">
                                        About the Course
                                    </h3>
                                </div>
                                <p className="text-[#737373] text-base leading-relaxed">
                                    {course.about}
                                </p>
                            </div>
                        )}

                        {/* What You Will Learn */}
                        {course.learningOutcomes && (
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 bg-[#D2D0EA] w-fit">
                                        <div className="w-5 h-5 relative">
                                            <Image src="/icons/what you will icon.svg" alt="Learning" fill className="object-contain" />
                                        </div>
                                    </div>
                                    <h3 className="text-[#2D2A74] text-xl font-['GC_Amelie_Promised_Demo'] italic tracking-wide">
                                        What You Will Learn
                                    </h3>
                                </div>
                                <ul className="flex flex-col gap-3 pl-2">
                                    {course.learningOutcomes.map((item, i) => (
                                        <li key={i} className="text-[#737373] text-base flex gap-3 items-start">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#737373] flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Eligibility */}
                        {course.eligibility && (
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 bg-[#D2D0EA] w-fit">
                                        <div className="w-5 h-5 relative">
                                            <Image src="/icons/eligibility icon.svg" alt="Eligibility" fill className="object-contain" />
                                        </div>
                                    </div>
                                    <h3 className="text-[#2D2A74] text-xl font-['GC_Amelie_Promised_Demo'] italic tracking-wide">
                                        Eligibility
                                    </h3>
                                </div>
                                <p className="text-[#737373] text-base">
                                    {course.eligibility}
                                </p>
                            </div>
                        )}

                        {/* Course Structure */}
                        {course.structure && (
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 bg-[#D2D0EA] w-fit">
                                        <div className="w-5 h-5 relative">
                                            <Image src="/icons/course structure icon.svg" alt="Structure" fill className="object-contain" />
                                        </div>
                                    </div>
                                    <h3 className="text-[#2D2A74] text-xl font-['GC_Amelie_Promised_Demo'] italic tracking-wide">
                                        Course Structure
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <h4 className="text-[#262366] text-lg font-medium mb-2">Training Format</h4>
                                        <p className="text-[#737373] text-base">{course.structure.format}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#262366] text-lg font-medium mb-2">Conducted By</h4>
                                        <p className="text-[#737373] text-base">{course.structure.conductedBy}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#262366] text-lg font-medium mb-2">Assessment</h4>
                                        <p className="text-[#737373] text-base">{course.structure.assessment}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Academic Value Box */}
                        {course.academicValue && (
                            <div className="bg-[#F8F8F6] p-6 flex flex-col gap-4 border-l-4 border-[#2D2A74]">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-2 bg-[#D2D0EA]">
                                        <div className="w-4 h-4 relative">
                                            <Image src="/icons/academic value icon.svg" alt="Academic Value" fill className="object-contain" />
                                        </div>
                                    </div>
                                    <h3 className="text-[#2D2A74] text-xl font-['GC_Amelie_Promised_Demo'] italic tracking-wide">
                                        Academic Value
                                    </h3>
                                </div>
                                <ul className="flex flex-col gap-3">
                                    {course.academicValue.map((val, i) => (
                                        <li key={i} className="text-[#737373] text-base flex gap-3">
                                            <span className="text-[#2D2A74] font-bold">✓</span>
                                            {val}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Next Steps Box */}
                        <div className="bg-[#F8F8F6] p-6 flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-[#D2D0EA]">
                                        <div className="w-4 h-4 relative">
                                            <Image src="/icons/next steps icon.svg" alt="Next Steps" fill className="object-contain" />
                                        </div>
                                    </div>
                                    <h3 className="text-[#2D2A74] text-xl font-['GC_Amelie_Promised_Demo'] italic tracking-wide">
                                        Next Steps
                                    </h3>
                                </div>
                                <p className="text-[#737373] text-base">
                                    {course.nextSteps || 'For course schedules and enrolment details, please contact the respective department or the Academic Office.'}
                                </p>
                            </div>
                            <button className="w-fit px-6 py-3 bg-[#262366] text-white text-xs font-semibold tracking-wider">
                                Contact Academic Office
                            </button>
                        </div>

                    </div>
                    {/* End Content Sections */}
                </div>
            </div>
        </div>
    );
}

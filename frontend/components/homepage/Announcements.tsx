import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";

export function Announcements() {
    return (
        <section className="w-full pt-20 pb-0 relative overflow-hidden">
            {/* 
                Background Image for the entire section 
                Replacing the solid background color with 'knowledge bg.png' as requested.
            */}
            <div className="absolute inset-0 w-full h-full -z-10">
                <Image
                    src="/images/announcement bg.png"
                    alt="Section Background"
                    fill
                    className="object-cover" // Adjusted opacity for texture effect
                />
            </div>

            <div className="container mx-auto px-4 relative flex flex-col items-center">

                {/* 
                   Banner Background - Wide & Absolute 
                   Positioned to cover the top area where Heading/Search will sit.
                */}
                <div className="w-full max-w-[1241px] h-[175px] absolute top-0 bg-p-8 rounded-xl overflow-hidden shadow-lg -z-0">
                    {/* Decorative Background Elements */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-70">
                        {/* 1 (Left) */}
                        <div className="absolute left-0 top-0 w-[40%] h-full">
                            <Image
                                src="/images/announcement 1.png"
                                alt="Watermark 1"
                                fill
                                className="object-contain object-left-bottom"
                            />
                        </div>
                        {/* 2 (Smaller, Below 1) */}
                        <div className="absolute left-[20%] -bottom-4 w-[120px] h-[80px]">
                            <Image
                                src="/images/announcement 2.svg"
                                alt="Watermark 2"
                                fill
                                className="object-contain"
                            />
                        </div>
                        {/* 3 (Right) */}
                        <div className="absolute right-0 top-0 w-[40%] h-full">
                            <Image
                                src="/images/announcement 3.svg"
                                alt="Watermark 3"
                                fill
                                className="object-contain object-right-top"
                            />
                        </div>
                    </div>
                </div>

                {/* 
                   Content Column 
                   - Centered visually on page.
                   - 'w-fit' allows Filter width to dictate the column width.
                   - 'mt-16' to push content down into the banner area correctly.
                */}
                <div className="relative z-10 flex flex-col gap-6 w-fit mt-12 mb-8">

                    {/* 
                       Header Group (Heading + Search) 
                       - Visually inside the Banner.
                       - Width matches the column (dictated by filters/list).
                    */}
                    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto items-start">
                        {/* Heading - Left Aligned to Search Box */}
                        <h2 className="text-[var(--color-background-2)] text-5xl font-normal font-['GC_Amelie_Promised_Demo'] text-left tracking-tighter">
                            Announcements
                        </h2>

                        {/* Search Bar - Full Width of Container */}
                        <div className="bg-white flex items-center gap-3 w-full px-4 py-3 shadow-sm rounded-none">
                            <Search className="w-5 h-5 text-[#A3A3A3]" />
                            <input
                                type="text"
                                placeholder="Search college updates"
                                className="flex-1 bg-transparent border-none outline-none text-[#737373] text-sm font-normal font-['DM_Sans'] placeholder-[#A3A3A3]"
                            />
                        </div>
                    </div>

                    {/* Filters - Defines the 'natural' width of the column */}
                    {/* Gap-2, Square corners */}
                    <div className="flex flex-wrap items-center justify-center gap-2 w-full mt-4">
                        <button className="px-6 py-2 bg-p-8 text-white text-sm font-medium font-['DM_Sans'] shadow-sm whitespace-nowrap rounded-none">
                            All
                        </button>
                        {["Exams", "Admissions", "Events", "Results", "New"].map((tab) => (
                            <button key={tab} className="px-6 py-2 bg-white border border-gray-200 text-gray-500 text-sm font-medium font-['DM_Sans'] shadow-sm hover:bg-gray-50 transition-colors whitespace-nowrap rounded-none">
                                {tab}
                            </button>
                        ))}
                        <button className="px-6 py-2 bg-white border border-gray-200 flex items-center gap-2 text-gray-500 text-sm font-medium font-['DM_Sans'] shadow-sm hover:bg-gray-50 whitespace-nowrap rounded-none">
                            Year
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>

                    {/* List Items - matches width */}
                    <div className="w-full p-6 bg-white outline outline-1 outline-offset-[-1px] outline-[#D4D4D4] flex flex-col justify-center items-center overflow-hidden rounded-none shadow-sm">
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <div key={index} className="w-full px-6 py-3 border-b border-[#D4D4D4] last:border-none flex flex-col justify-start items-start gap-2 hover:bg-gray-50 transition-colors cursor-pointer group">
                                <div className="w-full flex justify-between items-start gap-4">
                                    <div className="flex-1 text-[#171717] text-base font-medium font-['DM_Sans'] leading-5 text-left max-w-prose">
                                        Information for Candidates Seeking Admission to MD/MS Degree Programmes for the Year 2025–2026
                                    </div>
                                    {(index === 0 || index === 1) && (
                                        <div className="px-1.5 bg-[#3B82F6] flex justify-center items-center gap-2.5 h-fit">
                                            <div className="text-[#FAFAFA] text-xs font-semibold font-['DM_Sans'] leading-5">NEW</div>
                                        </div>
                                    )}
                                </div>
                                <div className="text-[#737373] text-base font-medium font-['DM_Sans'] leading-5 text-left w-full">2min ago</div>
                            </div>
                        ))}

                        {/* View More */}
                        <Link href="#" className="mt-4 text-[#3B82F6] text-xs font-semibold font-['DM_Sans'] underline leading-5 hover:text-blue-800">
                            View more
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}

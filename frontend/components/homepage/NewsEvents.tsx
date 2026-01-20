import Link from "next/link";
import Image from "next/image";


export function NewsEvents() {
    return (
        <section className="w-full h-auto pt-10 pb-[124.5px] bg-orange-50">
            <div className="container mx-auto px-4 flex flex-col gap-6">
                {/* Header */}
                {/* Header */}
                <div className="self-stretch flex flex-col md:flex-row justify-between items-start gap-6">
                    <div className="flex-1 flex flex-col justify-start items-start gap-3 max-w-3xl">
                        <div className="justify-start text-p-8 text-2xl lg:text-4xl font-normal font-mounsta capitalize leading-10 whitespace-nowrap">News & latest happenings</div>
                        <div className="self-stretch justify-start text-p-8 text-xs font-normal font-['DM_Sans']">
                            Aarupadai Veedu Medical College and Hospital is constantly involved in various activities. Check the<br className="hidden lg:block" /> recent happenings academic events, Curricular and Extra-Curricular events, CMEs, Workshops,<br className="hidden lg:block" /> Seminars, Webinar Series, and Outreach activities.
                        </div>
                    </div>
                    <div className="w-40 h-12 px-6 py-3 bg-p-8 shadow-[-4px_4px_0px_0px_rgba(203,200,206,1.00)] outline outline-1 outline-white flex justify-center items-center gap-3 cursor-pointer hover:bg-p-9 transition-colors self-start md:self-center">
                        <div className="w-36 text-center justify-start text-white text-sm font-bold font-['DM_Sans'] uppercase">View more</div>
                    </div>
                </div>

                {/* News Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                    {[1, 2, 3].map((item, index) => (
                        <div key={index} className="w-full max-w-[384px] p-3 bg-white shadow-[-9px_9px_0px_0px_rgba(4,42,77,0.12)] border border-[#CBC8CE] flex flex-col gap-3 group hover:shadow-lg transition-shadow">

                            {/* Image Container with Blur Overlay */}
                            <div className="relative w-full h-[250px] overflow-hidden group/image">
                                {/* Image Part - Full Height */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={`/images/news event ${index + 1}.png`}
                                        alt="News Thumbnail"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                                    />
                                </div>
                                {/* Blur Overlay Bar at Bottom - Hidden by default (translate-y-full), slides up on hover */}
                                <div className="absolute bottom-0 left-0 w-full h-[60px] bg-white/30 backdrop-blur-md flex justify-between items-center px-4 border-t border-white/20 transition-transform duration-300 translate-y-full group-hover/image:translate-y-0">
                                    <span className="text-[#171717] text-sm font-semibold font-['DM_Sans']">Student Activity</span>
                                    <span className="text-[#171717] text-xs font-normal font-['DM_Sans']">November 21, 2025</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[#171717] text-base font-bold font-['DM_Sans'] leading-tight line-clamp-2">
                                        White Coat Ceremony 2025: AVMC Welcomes the New MBBS Batch
                                    </h3>
                                    <p className="text-[#737373] text-xs font-normal font-['DM_Sans'] leading-relaxed line-clamp-2">
                                        AVMC Hosts White Coat Ceremony for MBBS Batch 2025–26: A Commitment to Compassion, Excellence, and Lifelong LearningPuducherry, November 12, 2025 — Aarupadai Veedu Medical College
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2 mt-1">
                                    <div className="h-px bg-[#CBC8CE] w-full" />
                                    <div className="flex items-center gap-2 cursor-pointer group/link">
                                        <Link href="#" className="flex items-center gap-2 group/link">
                                            <span className="text-[#374151] text-sm font-semibold font-['DM_Sans'] group-hover/link:text-black">Read more</span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#374151] group-hover/link:text-black">
                                                <path d="M7 17L17 7" />
                                                <path d="M7 7h10v10" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full bg-[#100E3A] text-white pt-16 pb-8 font-sans">
            <div className="container mx-auto px-4 xl:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">

                    {/* Column 1: Brand, Description, Social, Useful Links, Search */}
                    <div className="flex flex-col gap-8 w-full lg:w-1/4">
                        <div className="flex flex-col gap-6">
                            {/* Logo */}
                            <div className="w-36 h-12 relative">
                                <Image
                                    src="/icons/AVMC White.svg"
                                    alt="AVMC Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-[#F5F5F5] text-base font-normal leading-relaxed font-['Inter'] max-w-[280px]">
                                A place where learning, research, and healthcare come together to support students and the community.
                            </p>

                            {/* Social Icons */}
                            <div className="flex items-center gap-5">
                                <Link href="#" className="w-6 h-6 relative hover:opacity-80 transition-opacity">
                                    <Image src="/icons/fb.svg" alt="Facebook" fill className="object-contain" />
                                </Link>
                                <Link href="#" className="w-6 h-6 relative hover:opacity-80 transition-opacity">
                                    <Image src="/icons/Twitter.svg" alt="Twitter" fill className="object-contain" />
                                </Link>
                                <Link href="#" className="w-6 h-6 relative hover:opacity-80 transition-opacity">
                                    <Image src="/icons/instagram.svg" alt="Instagram" fill className="object-contain" />
                                </Link>
                                <Link href="#" className="w-6 h-6 relative hover:opacity-80 transition-opacity">
                                    <Image src="/icons/LinkedIN.svg" alt="LinkedIn" fill className="object-contain" />
                                </Link>
                                <Link href="#" className="w-6 h-6 relative hover:opacity-80 transition-opacity">
                                    <Image src="/icons/Youtube.svg" alt="YouTube" fill className="object-contain" />
                                </Link>
                            </div>
                        </div>

                        {/* Useful Links */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#F5F5F5] text-xl font-normal font-dm-sans">Useful Links</h3>
                            <ul className="text-[#F5F5F5] text-sm font-normal font-dm-sans list-disc pl-5 space-y-2">
                                <li><Link href="#" className="hover:underline">Swayam Link</Link></li>
                                <li><Link href="#" className="hover:underline">UGC e-resources Portal</Link></li>
                            </ul>
                        </div>

                        {/* Search Bar */}
                        <div className="w-72 p-1.5 bg-p-8 flex justify-start items-center gap-2 rounded-sm overflow-hidden">
                            <div className="flex-1 h-8 bg-[var(--color-p-2)] px-3 flex items-center text-[#A3A3A3] text-base font-normal font-dm-sans">
                                Search
                            </div>
                            <div className="w-8 h-8 flex justify-center items-center relative">
                                <div className="w-4 h-4 relative">
                                    <Image src="/icons/search_footer.svg" alt="Search" fill className="object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links Container */}
                    <div className="flex flex-col md:flex-row gap-12 w-full lg:flex-1">

                        {/* Middle Column */}
                        <div className="flex flex-col gap-10 w-full md:w-1/2">
                            {/* Quick Links (Library Group) */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-[#F5F5F5] text-xl font-normal font-dm-sans">Quick Links</h3>
                                <ul className="text-[#F5F5F5] text-sm font-normal font-dm-sans list-disc pl-5 space-y-3">
                                    <li><Link href="#" className="hover:underline">Library</Link></li>
                                    <li><Link href="#" className="hover:underline">Eportfolio</Link></li>
                                    <li><Link href="#" className="hover:underline">Clinical Key</Link></li>
                                    <li><Link href="#" className="hover:underline">Student Information System</Link></li>
                                    <li><Link href="#" className="hover:underline">Virtual Reality Lab</Link></li>
                                    <li><Link href="#" className="hover:underline">Skill Lab</Link></li>
                                </ul>
                            </div>

                            {/* Quick Links (Feedback Group) */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-[#F5F5F5] text-xl font-normal font-dm-sans">Quick Links</h3>
                                <ul className="text-[#F5F5F5] text-sm font-normal font-dm-sans list-disc pl-5 space-y-3">
                                    <li><Link href="#" className="hover:underline">Feedback</Link></li>
                                    <li><Link href="#" className="hover:underline">Grievance Redressal</Link></li>
                                    <li><Link href="#" className="hover:underline">Careers</Link></li>
                                    <li><Link href="#" className="hover:underline">Internal Complaints Committee</Link></li>
                                    <li><Link href="#" className="hover:underline">University Guidelines for ICC</Link></li>
                                    <li className="list-item">
                                        <span className="block">ICC - To register online complaints email to</span>
                                        <a href="mailto:icc@avmc.edu.in" className="hover:underline">icc@avmc.edu.in</a>
                                    </li>
                                    <li><Link href="#" className="hover:underline">Committees</Link></li>
                                    <li><Link href="#" className="hover:underline">Tobacco free Education Institution - Conflict of Interest Declaration</Link></li>
                                    <li><Link href="#" className="hover:underline">GoI Guidelines for TEFI</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col justify-between gap-12 w-full md:w-1/2">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-[#F5F5F5] text-xl font-normal font-dm-sans">Quick Links</h3>
                                <ul className="text-[#F5F5F5] text-sm font-normal font-dm-sans list-disc pl-5 space-y-3">
                                    <li><Link href="#" className="hover:underline">NCW Helpline</Link></li>
                                    <li className="list-item">
                                        24x7 NCW Women's Helpline, tel: <span className="whitespace-nowrap">7827-170-170</span>
                                    </li>
                                    <li><Link href="#" className="hover:underline">Cybercrime Website</Link></li>
                                    <li><Link href="#" className="hover:underline">Handbook on Sexual Harassment of Women at Workplace</Link></li>
                                    <li><Link href="#" className="hover:underline">Tele MANAS - 24x7 Toll Free Number 14416</Link></li>
                                    <li className="list-item">
                                        Anti Ragging Help Line 24x7 Toll Free Number <span className="whitespace-nowrap">1800-180-5522</span>
                                    </li>
                                    <li><Link href="#" className="hover:underline">Anti Ragging Help Line</Link></li>
                                    <li className="list-item">(helpline@antiragging.in)</li>
                                    <li><Link href="#" className="hover:underline">Anti Ragging Regulations</Link></li>
                                    <li><Link href="#" className="hover:underline">Anti Ragging Website</Link></li>
                                    <li><Link href="#" className="hover:underline">Anti Ragging Monitoring Cell</Link></li>
                                    <li><Link href="/anti-ragging" className="hover:underline">Anti Ragging Committee</Link></li>
                                    <li><Link href="#" className="hover:underline">Anti Ragging Squad</Link></li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-[#F5F5F5] text-xl font-normal font-dm-sans leading-tight">National Helplines for Mental Health <br />& De-addiction</h3>
                                <ul className="text-[#F5F5F5] text-sm font-normal font-dm-sans leading-relaxed list-disc pl-5 space-y-3">
                                    <li>
                                        14446 - National De-addiction Helpline: <br />
                                        Confidential counseling (DoSJE).
                                    </li>
                                    <li>
                                        14416 - Tele-MANAS: Free mental health <br />
                                        support (MoHFW).
                                    </li>
                                    <li>
                                        1933 - MANAS: Report drug-related activities <br />
                                        anonymously (MHA & NCB).
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/5">
                    <div className="text-[var(--color-grey-4)] text-base font-normal font-['Inter'] text-center md:text-left">
                        Copyright © {new Date().getFullYear()} AVMC - Aarupadai Veedu Medical College & Hospital
                    </div>
                </div>
            </div>
        </footer>
    );
}

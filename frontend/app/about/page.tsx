
import AboutSidebar from "@/components/AboutUs/AboutSidebar";
import HospitalServices from "@/components/AboutUs/HospitalServices";
import InstitutionalDistinctiveness from "@/components/AboutUs/InstitutionalDistinctiveness";
import CampusExcellence from "@/components/AboutUs/CampusExcellence";
import StayInTouch from "@/components/AboutUs/StayInTouch";
import Image from "next/image";


export default function AboutPage() {
    return (
        <div className="w-full bg-grey-1 text-grey-10">
            {/* Hero Section */}
            <section className="relative w-full h-[50vh] md:h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/about-hero-bw.png')" }}
                >
                    {/* Dark overlay to ensure text contrast if needed, though design shows just the glass box */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Central Card Overlay */}
                <div className="relative z-10 w-[90%] md:w-96 h-auto md:h-36 bg-white/20 border-l-[11px] border-s6 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl font-amelie italic">
                        Who We Are
                    </h1>
                    <div className="self-stretch flex justify-center text-center text-grey-4/80 text-sm  font-delight uppercase tracking-wide">
                        home &gt; About
                    </div>

                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 relative">
                {/* Background Texture (Simulated) */}
                <div
                    className="absolute inset-0 bg-cover opacity-50 pointer-events-none mix-blend-multiply"
                    style={{ backgroundImage: "url('/images/about-content-bg.png')" }}
                ></div>

                <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-[100px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px] items-start">

                        {/* Left Content Column */}
                        <div className="lg:col-span-7 space-y-16">

                            {/* Founding Vision */}
                            <div className="space-y-8">
                                <h2 className="self-stretch justify-center text-grey-10 text-2xl font-bold font-delight leading-6 ">Founding Vision</h2>

                                {/* Quote Block */}
                                <div className="flex gap-6 items-center">
                                    <div className="w-2 h-32 lg:h-22 bg-p-5 shrink-0"></div>
                                    <div className="w-full max-w-[683px] text-primary-6 text-2xl font-normal font-amelie leading-9 tracking-wide">
                                        &quot;The encouragement of research and the advancement of individual scholars, who by their excellence will advance medicine and the communities they serve.&quot;
                                    </div>
                                </div>
                            </div>

                            {/* What are we aiming at? */}
                            <div className="w-full max-w-[711px] min-h-[510px] relative flex flex-col justify-start items-start gap-11">
                                {/* Decorative background strip */}
                                <div className="hidden lg:block w-[709px] h-7 left-[-9px] top-[200px] absolute bg-primary-2 -z-10"></div>

                                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                                    <div className="self-stretch justify-center text-grey-10 text-2xl font-bold font-delight leading-6">What are we aiming at?</div>
                                    <div className="self-stretch justify-center text-grey-10 text-xl font- font-delight leading-6 lg:whitespace-nowrap">That’s the question our Founder Chancellor, Dr. A. Shanmugasundaram, </div>
                                </div>

                                <div className="self-stretch flex-1 justify-center">
                                    <span className="text-grey-10 text-xl font-bold font-delight leading-8">His answer : </span>
                                    <span className="text-grey-10 text-xl font-normal font-delight leading-8"> The encouragement of research and the advancement of individual scholars, who by their excellence will advance medicine and the communities they serve. He believed that teaching and research go hand in <span className="bg-p-2">hand—that success in one depends on success in the other—and that a</span> modern medical college must excel in both while sharing knowledge and discoveries to improve lives.</span>
                                </div>

                                <div className="self-stretch flex-1 justify-center text-grey-10 text-xl font-light font-delight leading-8">
                                    Aarupadai Veedu Medical College and Hospital (AVMCH) delivers quality medical education and patient care through its affiliation with Vinayaka Mission’s Research Foundation Deemed to be University. The institution emphasizes community service, advanced research, and sustainable practices on its 44-acre green campus.
                                </div>
                            </div>

                            {/* Our Story */}
                            <div className="w-full bg-p-8 p-8 md:p-12 shadow-[12px_12px_0px_0px_#cccccc]">
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-5">
                                        <h3 className="text-grey-1 text-3xl font-normal font-amelie italic leading-8 whitespace-nowrap">Our Story</h3>
                                        {/* Horizontal Line */}
                                        <div className="flex-1 h-px bg-white/40"></div>
                                    </div>
                                    <p className="text-grey-3/80 text-lg font-[100] font-delight leading-7 text-justify">
                                        Thirumuruga Kirupananda Variyar Thavathiru Sundara Swamigal Medical Educational and Charitable Trust was founded in 1981 by Dr. A. Shanmugasundaram to serve society&apos;s needy. AVMCH opened as the trust&apos;s first medical college in 2000 on Pondicherry-Cuddalore Road, initially affiliated with Pondicherry University and later with Vinayaka Mission&rsquo;s Research Foundation in 2004
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Right Sidebar Column */}
                        <div className="lg:col-span-4 lg:col-start-9 w-full">
                            <AboutSidebar />
                        </div>

                    </div>

                    {/* Cards Section */}
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* Card 1: MBBS */}
                        <div className="w-full shadow-[0px_0px_50px_0px_rgba(0,0,0,0.07)] flex flex-col justify-start items-start bg-white">
                            <div className="w-full h-64 relative bg-grey-2">
                                {/* Placeholder Image matching user snippet */}
                                <Image className="object-cover" src="/images/mbbs-card.png" alt="MBBS" fill />
                            </div>
                            <div className="self-stretch  p-6 bg-white flex flex-col justify-start items-start gap-2.5">
                                <div className="self-stretch justify-center text-black text-xl font-normal font-amelie italic uppercase leading-8">MBBS</div>
                                <div className="self-stretch justify-center text-grey-8/70 text-sm font-light font-delight leading-5 tracking-tight">Annual intake of 150 students since 2000-2001, forming the core undergraduate program.</div>
                            </div>
                        </div>

                        {/* Card 2: POSTGRADUATE */}
                        <div className="w-full shadow-[0px_0px_50px_0px_rgba(0,0,0,0.07)] flex flex-col justify-start items-start bg-white">
                            <div className="w-full h-64 relative bg-grey-2">
                                <Image className="object-cover" src="/images/postgrad-card.png" alt="Postgraduate" fill />
                            </div>
                            <div className="self-stretch  p-6 bg-white flex flex-col justify-start items-start gap-2.5">
                                <div className="self-stretch justify-center text-black text-xl font-normal font-amelie italic uppercase leading-8">POSTGRADUATE</div>
                                <div className="self-stretch justify-center text-grey-8/70 text-sm font-light font-delight leading-5 tracking-tight">19 disciplines with 99 seats annually, supporting specialized medical training.</div>
                            </div>
                        </div>

                        {/* Card 3: STUDENTS & MORE */}
                        <div className="w-full shadow-[0px_0px_50px_0px_rgba(0,0,0,0.07)] flex flex-col justify-start items-start bg-white">
                            <div className="w-full h-64 relative bg-grey-2">
                                <Image className="object-cover" src="/images/students-card.png" alt="Students" fill />
                            </div>
                            <div className="self-stretch  p-6 bg-white flex flex-col justify-start items-start gap-2.5">
                                <div className="self-stretch justify-center text-black text-xl font-normal font-amelie italic uppercase leading-8">STUDENTS & MORE</div>
                                <div className="self-stretch justify-center text-grey-8/70 text-sm font-light font-delight leading-5 tracking-tight">Over 750 UG/PG students enrolled; includes Ph.D. programs, nursing, allied health sciences, and physiotherapy for interprofessional learning</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hospital Services Section */}
            <HospitalServices />

            {/* Institutional Distinctiveness Section */}
            <InstitutionalDistinctiveness />

            {/* Campus Excellence Section */}
            <CampusExcellence />

            {/* Stay In Touch Section */}
            <StayInTouch />
        </div >
    );
}

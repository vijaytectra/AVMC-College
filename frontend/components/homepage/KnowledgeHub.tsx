import Image from "next/image";
import Link from "next/link";

export function KnowledgeHub() {
    return (
        <section className="relative w-full bg-white py-20 overflow-visible">
            {/* Background Image */}
            <div className="absolute -top-[150px] w-full h-[calc(100%+150px)]">
                <Image
                    src="/images/knowledge bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4 xl:px-8 relative z-10">
                <div className="flex flex-col ">

                    {/* Top: Cards / Grid - Spanning End to End (Static, No Scroll) */}
                    <div className="w-full flex flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between gap-6 lg:gap-0">

                        {/* Card 1: Program and Admission - Short */}
                        <div
                            className="w-full md:w-[48%] lg:w-1/5 h-[260px] md:h-[300px] lg:h-[340px] p-4 lg:p-6 lg:pb-15 flex flex-col justify-center lg:justify-end gap-3 lg:gap-6 bg-[#8CACF4] relative group cursor-pointer hover:brightness-110 transition-all duration-300 overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))' }}
                        >
                            {/* Background Icon (Watermark) */}
                            <div className="absolute top-4 right-[-22] text-[#1E1B4B] w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]">
                                <Image src="/icons/program and admissions icon 2.svg" alt="Icon Watermark" width={120} height={120} className="w-full h-full object-contain" />
                            </div>
                            <div className="relative z-10 w-full flex flex-col gap-2 lg:gap-0">
                                <div className="flex flex-row lg:flex-col items-center lg:items-start justify-center lg:justify-start gap-3 lg:gap-6">
                                    {/* Foreground Icon */}
                                    <div className="w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] shrink-0">
                                        <div className="w-full h-full bg-[#1B184D]" style={{ maskImage: "url('/icons/program and admissions icon 1.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/icons/program and admissions icon 1.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                                    </div>
                                    <h3 className="text-[#1B184D] text-lg lg:text-2xl font-semibold font-['Inter'] leading-tight text-left lg:text-left">Program and<br />Admission</h3>
                                </div>
                                <p className="lg:mt-3 text-[#1B184D] text-[11px] lg:text-xs font-medium font-['Inter'] leading-4 max-w-[90%] lg:max-w-[80%] text-center lg:text-left self-center lg:self-start">Explore your Program and Admission opportunities</p>
                            </div>
                        </div>

                        {/* Card 2: Academics - Medium/Long */}
                        <div
                            className="w-full md:w-[48%] lg:w-1/5 h-[280px] md:h-[340px] lg:h-[380px] p-4 lg:p-6 lg:pb-10 flex flex-col justify-center lg:justify-end gap-3 lg:gap-6 bg-p-8 relative group cursor-pointer hover:brightness-110 transition-all duration-300 overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))' }}
                        >
                            <div className="absolute top-10 right-[-22] text-white w-[100px] h-[100px] lg:w-[145px] lg:h-[145px]">
                                <Image src="/icons/academics icon 2.svg" alt="Icon Watermark" width={145} height={145} className="w-full h-full object-contain" />
                            </div>
                            <div className="relative z-10 w-full flex flex-col gap-2 lg:gap-0">
                                <div className="flex flex-row lg:flex-col items-center lg:items-start justify-center lg:justify-start gap-3 lg:gap-6">
                                    <div className="w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] shrink-0">
                                        <Image src="/icons/academics icon 1.svg" alt="Academics Icon" width={56} height={56} className="w-full h-full object-contain brightness-0 invert" />
                                    </div>
                                    <h3 className="text-[#D4D4D4] text-lg lg:text-2xl font-semibold font-['Inter'] leading-tight text-left lg:text-left">Academics</h3>
                                </div>
                                <p className="lg:mt-3 text-[#D4D4D4] text-[11px] lg:text-xs font-medium font-['Inter'] leading-4 max-w-[100%] text-center lg:text-left self-center lg:self-start">Scholarly Publications of<br />AVMC Community</p>
                            </div>
                        </div>

                        {/* Card 3: Hospital Service - Medium */}
                        <div
                            className="w-full md:w-[48%] lg:w-1/5 h-[310px] md:h-[380px] lg:h-[420px] p-4 lg:p-6 lg:pb-10 flex flex-col justify-center lg:justify-end gap-3 lg:gap-6 bg-[#8CACF4] relative group cursor-pointer hover:brightness-110 transition-all duration-300 overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))' }}
                        >
                            <div className="absolute top-4 right-[-44] text-[#1E1B4B] w-[120px] h-[120px] lg:w-[186px] lg:h-[186px]">
                                <Image src="/icons/hospital icon 2.svg" alt="Icon Watermark" width={186} height={186} className="w-full h-full object-contain" />
                            </div>
                            <div className="relative z-10 w-full flex flex-col gap-2 lg:gap-0">
                                <div className="flex flex-row lg:flex-col items-center lg:items-start justify-center lg:justify-start gap-3 lg:gap-6">
                                    <div className="w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] shrink-0">
                                        <div className="w-full h-full bg-[#1B184D]" style={{ maskImage: "url('/icons/hospital icon 1.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/icons/hospital icon 1.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                                    </div>
                                    <h3 className="text-[#1B184D] text-lg lg:text-2xl font-semibold font-['Inter'] leading-tight text-left lg:text-left">Hospital Service</h3>
                                </div>
                                <p className="lg:mt-3 text-[#1B184D] text-[11px] lg:text-xs font-medium font-['Inter'] leading-4 max-w-[100%] text-center lg:text-left self-center lg:self-start">Encompasses the activities related<br />to induction, training and<br />further development</p>
                            </div>
                        </div>

                        {/* Card 4: Research and Innovation - Long */}
                        <div
                            className="w-full md:w-[48%] lg:w-1/5 h-[340px] md:h-[420px] lg:h-[460px] p-4 lg:p-6 lg:pb-10 flex flex-col justify-center lg:justify-end gap-3 lg:gap-6 bg-p-8 relative group cursor-pointer hover:brightness-110 transition-all duration-300 overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))' }}
                        >
                            <div className="absolute top-10 right-[-54] w-[130px] h-[130px] lg:w-[209px] lg:h-[209px]">
                                <Image src="/icons/research icon 2.svg" alt="Icon Watermark" width={120} height={120} className="w-full h-full object-contain" />
                            </div>
                            <div className="relative z-10 w-full flex flex-col gap-2 lg:gap-0">
                                <div className="flex flex-row lg:flex-col items-center lg:items-start justify-center lg:justify-start gap-3 lg:gap-6">
                                    <div className="w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] shrink-0">
                                        <Image src="/icons/research icon 1.svg" alt="Research Icon" width={56} height={56} className="w-full h-full object-contain brightness-0 invert" />
                                    </div>
                                    <h3 className="text-[#D4D4D4] text-lg lg:text-2xl font-semibold font-['Inter'] leading-tight text-left lg:text-left">Research and<br />Innovation.</h3>
                                </div>
                                <p className="lg:mt-3 text-[#D4D4D4] text-[11px] lg:text-xs font-medium font-['Inter'] leading-4 max-w-[100%] text-center lg:text-left self-center lg:self-start">Information under clause A 1.16<br />of NMC Regulations 1999 and<br />as amended</p>
                            </div>
                        </div>

                        {/* Card 5: NMC MANDATE - Longest */}
                        <div
                            className="w-full md:w-[48%] lg:w-1/5 h-[370px] md:h-[460px] lg:h-[500px] p-4 lg:p-6 lg:pb-10 flex flex-col justify-center lg:justify-end gap-3 lg:gap-6 bg-[#8CACF4] relative group cursor-pointer hover:brightness-110 transition-all duration-300 overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))' }}
                        >
                            <div className="absolute top-10 right-[-38] text-[#1E1B4B] w-[140px] h-[140px] lg:w-[232px] lg:h-[232px]">
                                <Image src="/icons/nmc icon 2.svg" alt="Icon Watermark" width={232} height={232} className="w-full h-full object-contain" />
                            </div>
                            <div className="relative z-10 w-full flex flex-col gap-2 lg:gap-0">
                                <div className="flex flex-row lg:flex-col items-center lg:items-start justify-center lg:justify-start gap-3 lg:gap-6">
                                    <div className="w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] shrink-0">
                                        <div className="w-full h-full bg-[#1B184D]" style={{ maskImage: "url('/icons/nmc icon 1.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/icons/nmc icon 1.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                                    </div>
                                    <h3 className="text-[#1B184D] text-lg lg:text-2xl font-semibold font-['Inter'] leading-tight text-left lg:text-left">NMC MANDATE</h3>
                                </div>
                                <p className="lg:mt-3 text-[#1B184D] text-[11px] lg:text-xs font-medium font-['Inter'] leading-4 max-w-[100%] text-center lg:text-left self-center lg:self-start">Information under clause A 1.16 of NMC Regulations 1999 and <br />as amended</p>
                            </div>
                        </div>

                    </div>

                    {/* Bottom: Heading & Description - Aligned Left */}
                    {/* Bottom: Heading & Description - Aligned Left */}
                    <div className="flex flex-col gap-3 max-w-lg mt-8 lg:-mt-16">
                        <div className="text-neutral-600 text-sm font-normal font-['Inter'] leading-5">
                            Knowledge Hub
                        </div>
                        <div className="h-px bg-gray-300 w-full" />
                        <div className="text-black text-2xl md:text-4xl font-normal font-['Inter'] leading-tight md:leading-medium">
                            Academic Resources & Professional Development
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

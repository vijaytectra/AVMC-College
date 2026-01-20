import Image from "next/image";

export function CampusLife() {
    return (
        <section className="w-full bg-p-8 py-20 overflow-hidden">
            <div className="container mx-auto px-4 flex justify-center">
                {/* 
                   Grid Container 
                   Using flex-row per HTML design: 3 columns
                */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-2">

                    {/* Left Column: 2 Vertical Images */}
                    <div className="w-full lg:w-60 flex flex-col gap-2">
                        <div className="relative w-full h-96">
                            <Image src="/images/campus%20life%201.png" alt="Campus Life 1" fill className="object-cover" />
                        </div>
                        <div className="relative w-full h-[355px]">
                            <Image src="/images/campus%20life%202.png" alt="Campus Life 2" fill className="object-cover" />
                        </div>
                    </div>

                    {/* Middle Column: 3 Horizontal Rows */}
                    <div className="w-full lg:w-[772px] flex flex-col gap-2">

                        {/* Row 1: 2 horizontal images */}
                        <div className="flex gap-2 h-[237px]">
                            <div className="relative w-[531px] h-full">
                                <Image src="/images/campus%20life%203.png" alt="Campus Life 3" fill className="object-cover" />
                            </div>
                            <div className="relative flex-1 h-full">
                                <Image src="/images/campus%20life%204.png" alt="Campus Life 4" fill className="object-cover" />
                            </div>
                        </div>

                        {/* Row 2: Image + Red Block + Text Overlay */}
                        <div className="flex gap-2 h-[237px]">
                            <div className="relative w-80 h-full shrink-0">
                                <Image src="/images/campus%20life%205.png" alt="Campus Life 5" fill className="object-cover" />
                            </div>
                            <div className="flex-1 h-full bg-[#DC292B] relative p-6 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-white text-[64px] font-medium font-delight leading-[60px] tracking-tight">
                                        Campus<br />Life
                                    </h2>
                                    <div className="w-4 h-4 bg-white mt-2" />
                                </div>
                                <div className="max-w-lg">
                                    <p className="text-white text-[13px] font-normal font-dm-sans leading-snug opacity-90">
                                        AVMC is a green campus with 33% greenery. It promotes eco-friendly practices including a plastic-free zone, shaded walkways, vehicle-free areas, e-cycles, rainwater harvesting, recycling, and solar power. The campus also offers a spa, gym, media rooms, supermarket, ATM, cafeteria, and fast-food options for residents’ comfort.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 3: 2 horizontal images */}
                        <div className="flex gap-2 h-[237px]">
                            <div className="relative w-56 h-full">
                                <Image src="/images/campus%20life%206.png" alt="Campus Life 6" fill className="object-cover" />
                            </div>
                            <div className="relative flex-1 h-full">
                                <Image src="/images/campus%20life%207.png" alt="Campus Life 7" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 2 Vertical Images */}
                    <div className="w-full lg:w-80 flex flex-col gap-2">
                        <div className="relative w-full h-96">
                            <Image src="/images/campus%20life%208.png" alt="Campus Life 8" fill className="object-cover" />
                        </div>
                        <div className="relative w-full h-[312px]">
                            <Image src="/images/campus%20life%20left%20to%20campus%20life%20.png" alt="Campus Life 9" fill className="object-cover" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

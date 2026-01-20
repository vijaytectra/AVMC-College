import Image from "next/image";

export function ChancellorMessage() {
    return (
        <section className="relative w-full bg-white py-40 overflow-hidden flex justify-center items-center">

            {/* 
                Background/Decorative Image 
                User request: w-[2078px] h-[800px] origin-top-left rotate-90 mix-blend-multiply
                Since it's rotate-90, it will be vertical. w=2078 become height, h=800 becomes width.
                This effectively makes a tall vertical strip of 800px width.
                Positioning: "below the campuslife" - likely meant the section itself is below.
                If this image is a background, it should be absolute.
                The 'origin-top-left' means it rotates around top-left.
                I will position it somewhat centrally or to the side based on "perfectly center" instruction for the content.
                Let's assume it's a large abstract background.
            */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute inset-0 w-full h-full opacity-100">
                    <Image
                        src="/images/announcement bg.png"
                        alt="Background Texture"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 w-full h-full opacity-70">
                    <Image
                        src="/images/chancellor msg.png"
                        alt="Background Decoration"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="container relative z-10 flex flex-col items-center justify-center gap-11">

                {/* Decorative Squares */}
                <div className="flex flex-col items-center gap-2">
                    <div className="relative w-16 h-16">
                        <Image
                            src="/icons/chancellor icon.svg"
                            alt="Chancellor Icon"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Main Content Group */}
                <div className="flex flex-col items-center gap-10">

                    {/* Quote */}
                    <div className="max-w-[900px] text-center italic">
                        <span className="text-black text-4xl md:text-5xl font-normal font-['GC_Amelie_Promised_Demo']">To Dream Is </span>
                        <span className="text-red-600 text-4xl md:text-5xl font-normal font-['GC_Amelie_Promised_Demo']">Not Enough, </span>
                        <span className="text-black text-4xl md:text-5xl font-normal font-['GC_Amelie_Promised_Demo']">To Dream</span>
                        <br className="hidden md:block" />
                        <span className="text-black text-4xl md:text-5xl font-normal font-['GC_Amelie_Promised_Demo']">and Achieve is what Required</span>
                    </div>

                    {/* Chancellor Card */}
                    <div className="pl-3 pr-5 py-3 bg-white/30 rounded-[100px] border border-[#A3A3A3] flex items-center gap-3 backdrop-blur-sm">
                        <div className="w-11 h-11 relative rounded-full overflow-hidden bg-zinc-300">
                            {/* Placeholder for Chancellor Image */}
                            <Image
                                src="/images/chancellor image .png"
                                alt="Dr. A. S. Ganesan"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start">
                            <div className="text-[#404040] text-xl font-semibold font-['DM_Sans'] whitespace-nowrap">DR. A. S. GANESAN</div>
                            <div className="text-[#737373] text-base font-semibold font-['DM_Sans']">CHANCELLOR</div>
                        </div>
                    </div>

                </div>

            </div>
        </section >
    );
}

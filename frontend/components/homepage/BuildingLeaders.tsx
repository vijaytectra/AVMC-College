import Image from "next/image";

export function BuildingLeaders() {
    return (
        <section className="relative w-full h-[1050px] lg:h-[850px] 2xl:h-[1055px] overflow-hidden bg-transparent -mt-[320px] z-20">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/section.png"
                    alt="Building Leaders Background"
                    fill
                    className="object-cover object-[75%_center] lg:object-center"
                    quality={100}
                    priority
                    unoptimized
                />
            </div>

            <div className="relative z-10 w-full h-full flex flex-col justify-start lg:justify-center items-start px-4 md:px-20 lg:px-28 pt-48 md:pt-56 lg:pt-20 lg:pb-40">
                <div className="max-w-3xl text-white">
                    <div className="self-stretch text-[var(--color-background-2)] text-[40px] md:text-[60px] lg:text-[85.41px] font-normal font-['GC_Amelie_Promised_Demo'] italic leading-[1.14] lg:leading-[97.42px] font-weight-[400] mb-6 md:mb-16 break-words">
                        Building <br />Healthcare Leaders
                    </div>
                    <div className="w-full max-w-[604px] h-[420px] md:h-[400px] lg:h-64 relative mt-10">
                        <div className="w-[200px] md:w-[360px] lg:w-full left-0 top-0 absolute justify-start text-[var(--color-p-2)] text-[12px] md:text-base font-medium font-dm-sans">
                            Aarupadai Veedu Medical College & Hospital stands as a beacon of excellence in medical education and clinical innovation. Recognized by NABH and affiliated with top research bodies, AVMC nurtures aspiring health professionals with a curriculum rooted in scientific rigor, hands-on clinical training, and holistic student development. Our lush, modern campus in Puducherry provides state-of-the-art facilities, expert faculty mentorship,
                        </div>
                        <div className="w-40 h-12 px-6 py-3 left-[8px] top-[296px] md:top-[316px] lg:top-[192px] absolute bg-[var(--color-p-7)] shadow-[-4px_4px_0px_0px_rgba(255,255,255,1.00)] outline outline-1 outline-white inline-flex justify-center items-center gap-3 cursor-pointer hover:bg-[#1E1B4B] transition-colors">
                            <div className="w-36 text-center justify-start text-white text-sm font-bold font-dm-sans uppercase">View more</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
import Image from "next/image";

export function NIRFSection() {
    return (
        <section className="w-full bg-orange-50 py-5">
            <div className="container mx-auto px-4 xl:px-12 flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-6">
                {/* Logo 1 - NIRF 1 */}
                <div className="relative w-[45%] h-20 md:w-96 md:h-24">
                    <Image
                        src="/images/nirf 1.png"
                        alt="NIRF Logo 1"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Logo 2 - NIRF 2 */}
                <div className="relative w-[45%] h-20 md:w-80 md:h-36">
                    <Image
                        src="/images/nirf 2.png"
                        alt="NIRF Logo 2"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Link */}
                <Link href="#" className="w-full md:w-auto text-center md:text-left justify-start text-[#1C1C1C] text-base font-medium font-['DM_Sans'] underline leading-5 hover:text-black">
                    View NIRF Data here
                </Link>
            </div>
        </section>
    );
}


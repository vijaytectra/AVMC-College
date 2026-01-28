"use client";

import Link from "next/link";

export default function StayInTouch() {
    return (
        <section className="w-full h-auto pt-10 pb-24 bg-gradient-to-b from-white to-transparent overflow-hidden">
            <div className="w-full max-w-[1440px] mx-auto px-6 flex flex-col justify-center items-center gap-14">

                {/* Header */}
                <div className="flex flex-col justify-start items-center gap-4 text-center">
                    <h2 className="text-primary-7 text-4xl font-normal font-amelie italic tracking-tight">
                        Let’s stay in touch!
                    </h2>
                    <p className="text-primary-7 text-sm font-light font-delight leading-5 tracking-wide">
                        Join our mailing list to learn more about AVMC
                    </p>
                </div>

                {/* Buttons Container */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-7">

                    {/* Request Information Button */}
                    <Link href="#" className="w-80 h-11 px-5 py-2.5 bg-p-8 flex justify-center items-center gap-2.5 hover:bg-primary-7 transition-colors duration-300">
                        <span className="text-grey-1 text-base font-normal font-delight leading-5 tracking-tight">
                            Request information
                        </span>
                    </Link>

                    {/* Connect Button */}
                    <Link href="#" className="h-11 px-5 py-2.5 outline outline-1 outline-offset-[-1px] outline-primary-7 flex justify-center items-center gap-2.5 hover:bg-primary-7 hover:outline-primary-7 group transition-all duration-300">
                        <span className="text-primary-7 text-base font-normal font-delight leading-5 tracking-tight group-hover:text-white transition-colors">
                            Connect with an admission counselor
                        </span>
                    </Link>

                </div>
            </div>
        </section>
    );
}

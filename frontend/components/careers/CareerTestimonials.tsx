"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * CareerTestimonials Component
 * Displays "What Our Team Says" section with faculty testimonials.
 * Matches the provided Figma HTML snippet styling.
 */
const CareerTestimonials: React.FC = () => {
    const rawTestimonials = [
        {
            quote: "The mentorship program here is outstanding. I've grown from a junior faculty.",
            name: "Dr. Rajesh Kumar",
            role: "Associate Professor, Pediatrics",
            bgImage: "/images/career what our team says 1.png",
            profileImage: "/images/career what our team says pro pic 1.png"
        },
        {
            quote: "The mentorship program here is outstanding. I've grown from a junior faculty.",
            name: "Dr. Rajesh Kumar",
            role: "Associate Professor, Pediatrics",
            bgImage: "/images/career what our team says 2.png",
            profileImage: "/images/career what our team says pro pic 2.png"
        },
        {
            quote: "The mentorship program here is outstanding. I've grown from a junior faculty.",
            name: "Dr. Rajesh Kumar",
            role: "Associate Professor, Pediatrics",
            bgImage: "/images/career what our team says 3.png",
            profileImage: "/images/career what our team says pro pic 3.png"
        }
    ];

    // Duplicate logic for carousel effect
    const testimonials = [...rawTestimonials, ...rawTestimonials, ...rawTestimonials];

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.children[0]?.clientWidth || 300;
            const scrollAmount = cardWidth + 20; // card width + gap
            if (direction === "left") {
                scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <div className="w-full flex flex-col gap-[52px] py-[50px] pb-[100px]">

            {/* Header Section */}
            <div className="w-full max-w-4xl mx-auto px-4 lg:px-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
                <div className="w-full max-w-[536px] flex flex-col gap-3 md:gap-4">
                    <div className="text-grey-7 text-sm md:text-base font-delight font-normal">
                        What Our Team Says
                    </div>
                    <div className="text-p-6 text-2xl md:text-[32px] font-gc-amelie italic font-normal tracking-[0.64px] leading-tight">
                        Hear from our faculty and staff about their experiences
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-[13px] self-end md:self-auto">
                    <button
                        onClick={() => scroll("left")}
                        className="w-11 h-11 p-2.5 outline outline-1 outline-grey-5 flex justify-center items-center gap-2.5 hover:bg-gray-50 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-grey-5" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-11 h-11 p-2.5 outline outline-1 outline-p-7 flex justify-center items-center gap-2.5 hover:bg-p-7/10 transition-colors"
                    >
                        <ArrowRight className="w-5 h-5 text-p-7" />
                    </button>
                </div>
            </div>

            {/* Testimonials Carousel */}
            <div
                ref={scrollRef}
                className="w-full flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 md:px-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[320px] md:min-w-[498px] flex flex-col gap-4 shrink-0"
                    >

                        {/* Images Container */}
                        <div className="w-full flex flex-col relative">
                            {/* Banner Image */}
                            <div className="relative w-full h-[220px] md:h-[330.75px]">
                                <Image
                                    src={item.bgImage}
                                    alt="Background"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Profile Image */}
                            <div className="absolute bottom-[-10px] left-6 w-20 h-20 z-10 shadow-sm">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={item.profileImage}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-3 mt-4">
                            <p className="text-grey-8 text-sm font-delight font-light leading-relaxed tracking-wide text-justify">
                                {item.quote}
                            </p>
                            <div className="flex flex-col gap-1">
                                <div className="text-black text-base font-delight font-bold tracking-wide">
                                    {item.name}
                                </div>
                                <div className="text-grey-6 text-xs font-delight font-normal tracking-wide">
                                    {item.role}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default CareerTestimonials;

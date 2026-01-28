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
            quote: "The mentorship program here is outstanding.\nI've grown from a junior faculty.",
            name: "Dr. Rajesh Kumar",
            role: "Associate Professor, Pediatrics",
            bgImage: "/images/career what our team says 1.png",
            profileImage: "/images/career what our team says pro pic 1.png"
        },
        {
            quote: "The mentorship program here is outstanding.\nI've grown from a junior faculty.",
            name: "Dr. Rajesh Kumar",
            role: "Associate Professor, Pediatrics",
            bgImage: "/images/career what our team says 2.png",
            profileImage: "/images/career what our team says pro pic 2.png"
        },
        {
            quote: "The mentorship program here is outstanding.\nI've grown from a junior faculty.",
            name: "Dr. Rajesh Kumar",
            role: "Associate Professor, Pediatrics",
            bgImage: "/images/career what our team says 3.png",
            profileImage: "/images/career what our team says pro pic 3.png"
        }
    ];

    const testimonials = rawTestimonials;
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleNavigation = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const cardWidth = container.children[0]?.clientWidth || 0;
        const gap = 20; // 20px gap
        const scrollAmount = cardWidth + gap;

        if (direction === "left") {
            const newIndex = Math.max(0, currentIndex - 1);
            setCurrentIndex(newIndex);
            container.scrollTo({ left: newIndex * scrollAmount, behavior: "smooth" });
        } else {
            const newIndex = Math.min(testimonials.length - 1, currentIndex + 1);
            setCurrentIndex(newIndex);
            container.scrollTo({ left: newIndex * scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="w-full flex flex-col gap-[52px] py-[50px] pb-[100px]">

            {/* Header Section */}
            <div className="w-full px-4 md:px-8 xl:px-[200px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
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
                        onClick={() => handleNavigation("left")}
                        disabled={currentIndex === 0}
                        className={`w-11 h-11 p-2.5 outline outline-1 flex justify-center items-center gap-2.5 transition-colors ${currentIndex === 0 ? 'outline-grey-3 bg-grey-1/10 cursor-not-allowed' : 'outline-grey-5 hover:bg-gray-50'}`}
                    >
                        <ArrowLeft className={`w-5 h-5 ${currentIndex === 0 ? 'text-grey-4' : 'text-grey-5'}`} />
                    </button>
                    <button
                        onClick={() => handleNavigation("right")}
                        disabled={currentIndex === testimonials.length - 1}
                        className={`w-11 h-11 p-2.5 outline outline-1 flex justify-center items-center gap-2.5 transition-colors ${currentIndex === testimonials.length - 1 ? 'outline-grey-3 bg-grey-1/10 cursor-not-allowed' : 'outline-p-7 hover:bg-p-7/10'}`}
                    >
                        <ArrowRight className={`w-5 h-5 ${currentIndex === testimonials.length - 1 ? 'text-grey-4' : 'text-p-7'}`} />
                    </button>
                </div>
            </div>

            {/* Testimonials Carousel */}
            <div
                ref={scrollRef}
                className="w-full flex gap-5 overflow-x-hidden scroll-smooth pb-4 px-4 md:px-8 xl:px-[100px]"
            >
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="w-[320px] md:w-[489px] flex flex-col gap-4 shrink-0"
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
                            <div className="absolute bottom-[-10px] left-6 w-20 h-20 z-10 shadow-sm ">
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
                            <p className="text-grey-8/70 text-sm font-delight font-light leading-relaxed tracking-wider text-justify">
                                {item.quote}
                            </p>
                            <div className="flex flex-col gap-1">
                                <div className="text-black text-base font-delight font-normal tracking-wide">
                                    {item.name}
                                </div>
                                <div className="text-grey-6/70 text-xs font-delight font-normal tracking-wide">
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

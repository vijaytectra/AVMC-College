"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsletters } from "../data";
import { notFound } from "next/navigation";
import { Share, Mail } from "lucide-react";
import NewsletterCard from "@/components/NewsletterCard";

export default function NewsletterDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    const newsletter = newsletters.find((n) => n.id === id);

    if (!newsletter) {
        notFound();
    }

    // Get other newsletters for "Research Spotlight" (excluding current one)
    const otherNewsletters = newsletters.filter(n => n.id !== id).slice(0, 6); // Show top 6

    const handleShare = () => {
        if (typeof window !== 'undefined') {
            if (navigator.share) {
                navigator.share({
                    title: newsletter.title,
                    text: newsletter.description,
                    url: window.location.href,
                }).catch((error) => console.log('Error sharing', error));
            } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
            }
        }
    };

    return (
        <div className="w-full flex flex-col items-center bg-white min-h-screen">
            {/* Header/Breadcrumb Section - Matching styling from design */}
            {/* Header/Breadcrumb Section - Matching styling from design */}
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[44px] xl:px-[150px] pt-8 pb-4">
                <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium font-delight uppercase tracking-wide">
                    <Link href="/" className="hover:text-violet-950">home</Link>
                    <span>&gt;</span>
                    <Link href="/about" className="hover:text-violet-950">About</Link>
                    <span>&gt;</span>
                    <Link href="/newsletter" className="hover:text-violet-950">news letter</Link>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[44px] xl:px-[150px] flex flex-col gap-8 pb-20">
                {/* Title Block - Moved out of columns to span full width */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-violet-950 text-3xl font-normal font-gc-amelie italic">{newsletter.title}</h1>
                    <div className="w-full flex justify-between items-center bg-white pb-2">
                        <p className="text-violet-950 text-sm font-normal font-delight tracking-tight">{newsletter.date}</p>
                        <button onClick={handleShare} className="h-8 px-4 flex items-center gap-2 bg-white outline outline-1 outline-offset-[-0.50px] outline-zinc-300 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                            <Share className="w-3.5 h-3.5 text-violet-950" />
                            <span className="text-violet-950 text-xs font-semibold font-delight tracking-tight">Share</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Main Content */}
                    <div className="flex-1 flex flex-col gap-8">

                        {/* Main Image with Description Overlay logic from snippet */}
                        <div className="w-full relative border border-zinc-300 p-0.5">
                            <div className="flex flex-col items-center gap-3">
                                <div className="relative w-full max-w-[608px] h-56">
                                    <Image
                                        src={newsletter.image}
                                        alt={newsletter.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="w-full p-2.5 flex justify-center items-center">
                                    <p className="text-neutral-500 text-sm font-normal font-delight tracking-tight text-center">
                                        {newsletter.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* PDF Viewer Placeholder / Content Area */}
                        {/* Snippet shows a blue box (bg-p2) followed by white box and lines indicating document structure */}
                        {/* PDF Viewer Placeholder / Content Area */}
                        {/* Snippet shows a blue box (bg-p2) followed by white box and lines indicating document structure */}
                        <div className="w-[608px] h-[608px] relative bg-p2 outline outline-1 outline-offset-[-0.50px] outline-zinc-300">
                            {/* Toolbar - User Snippet */}
                            <div className="w-[608px] h-14 relative bg-blue-950 outline outline-1 outline-offset-[-0.50px] outline-zinc-300">
                                <div className="w-[608px] h-14 left-0 top-0 absolute inline-flex justify-start items-center gap-96 overflow-hidden">
                                    {/* Note: gap-96 might be too large for 608px, but keeping structure per user snippet request, rely on overflow hidden or flex crunch */}
                                    <div className="w-24 h-8 pl-[5px] right-4 top-[14px] absolute bg-zinc-300 flex justify-center items-center gap-0.5">
                                        <div className="w-3.5 h-3.5 px-0.5 py-1.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                                            <Image src="/icons/news letter hamburger.svg" alt="Menu" width={12} height={2} className="object-contain" />
                                        </div>
                                        <div className="h-8 p-2.5 flex justify-center items-center gap-2.5">
                                            <div className="justify-start text-neutral-500 text-xs font-normal font-delight tracking-tight">100</div>
                                        </div>
                                        <div className="w-3.5 h-3.5 p-[3px] flex justify-start items-center gap-2.5 overflow-hidden">
                                            <Image src="/icons/news key arrow down.svg" alt="Arrow" width={8} height={8} className="object-contain" />
                                        </div>
                                    </div>
                                    <div className="w-56 h-10 relative">
                                        <div className="px-3 left-0 top-0 absolute inline-flex justify-start items-center gap-3">
                                            <div className="w-6 px-[3px] py-1.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                                                <Image src="/icons/news letter hamburger.svg" alt="Hamburger" width={16} height={12} className="object-contain" />
                                            </div>
                                            <div className="p-2.5 flex justify-center items-center gap-2.5">
                                                <div className="justify-start text-white text-sm font-normal font-delight">{newsletter.title}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2.5 flex justify-start items-center gap-2.5">
                                        <div className="p-[3px] flex justify-start items-center gap-2.5 overflow-hidden">
                                            <Image src="/icons/inner world.png" alt="Layer" width={16} height={16} className="object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Inner Page Content: Sample PDF */}
                            <div className="w-[550px] h-[501px] left-[29px] top-[80px] absolute bg-white outline outline-1 outline-offset-[-0.50px] outline-zinc-300 overflow-hidden">
                                <iframe
                                    src="/resource/sample.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                    className="w-full h-full border-none"
                                    title="Newsletter PDF"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="w-full lg:w-[320px] xl:w-[360px] flex flex-col gap-8 flex-shrink-0">

                        {/* Subscribe Widget */}
                        <div className="w-full border border-zinc-300 p-8 flex flex-col gap-8 bg-white">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-violet-950 text-xl font-semibold font-inter">Subscribe To Update</h3>
                                <p className="text-neutral-500 text-xs font-normal font-delight">Get latest medical research news and college updates.</p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="w-full h-9 border border-gray-300 flex items-center px-2 gap-2">
                                    <Mail className="w-4 h-4 text-neutral-500" />
                                    <input type="email" placeholder="Email Address" className="w-full text-xs font-delight outline-none text-neutral-600 placeholder:text-neutral-400" />
                                </div>
                                <button className="w-full bg-blue-950 text-white h-8 text-xs font-semibold font-delight hover:bg-blue-900 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Related Newsletter Widget */}
                        <div className="w-full border border-zinc-300 p-8 flex flex-col gap-6 bg-white">
                            <div className="flex justify-between items-center">
                                <h3 className="text-violet-950 text-xl font-semibold font-inter">Related Newsletter</h3>
                                <Link href="/newsletter" className="text-neutral-500 text-xs font-normal font-delight hover:text-violet-950">View all</Link>
                            </div>

                            <div className="flex flex-col gap-4">
                                {/* Mini Cards */}
                                {otherNewsletters.slice(0, 2).map((item, idx) => (
                                    <Link href={`/newsletter/${item.id}`} key={idx} className="flex gap-4 border border-gray-200 p-1 hover:bg-gray-50 transition-colors">
                                        <div className="relative w-24 h-16 flex-shrink-0">
                                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                                        </div>
                                        <div className="flex flex-col justify-center gap-1">
                                            <h4 className="text-blue-950 text-xs font-semibold font-delight line-clamp-1">{item.title}</h4>
                                            <span className="text-neutral-500 text-xs font-normal font-delight">{item.date}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Research Spotlight Section - Full width within margins */}
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[44px] xl:px-[150px] pb-20 flex flex-col items-start gap-4">
                <h2 className="text-violet-950 text-3xl font-normal font-gc-amelie self-start">Research Spotlight</h2>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
                    {otherNewsletters.slice(0, 6).map((item, index) => (
                        <Link href={`/newsletter/${item.id}`} key={index} className="contents">
                            <NewsletterCard
                                date={item.date}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

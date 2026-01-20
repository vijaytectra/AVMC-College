import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300">
            {/* Top Bar - Scrollable on mobile */}

            <div className="bg-white/90 backdrop-blur-md border-b border-gray-100 dark:bg-black/80 dark:border-gray-800 w-full shadow-sm">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                            {/* Placeholder Logo */}
                            <span>AV</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-none text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                AVMC
                            </span>
                            <span className="text-xs text-gray-500 font-medium tracking-wide">
                                MEDICAL COLLEGE
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {[
                            ['Home', '/'],
                            ['About', '/about'],
                            ['Courses', '/courses'],
                            ['Admissions', '/admissions'],
                            ['Departments', '/departments'],
                            ['Contact', '/contact'],
                        ].map(([label, href]) => (
                            <Link
                                key={label}
                                href={href}
                                className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors relative group"
                            >
                                {label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors text-gray-600 dark:text-gray-300">
                            <Search size={18} />
                        </button>
                        <Link
                            href="/admissions"
                            className="hidden sm:flex px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
                        >
                            Apply Now
                        </Link>
                        {/* Mobile Menu Toggle */}
                        <button className="lg:hidden p-2 text-gray-600 dark:text-gray-300">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

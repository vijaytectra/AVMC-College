import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900 text-white">
            {/* Background Image (Placeholder) */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                {/* In a real scenario, use <Image fill ... /> here */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1631248055158-edec7a3c072b?q=80&w=2061&auto=format&fit=crop')] bg-cover bg-center" />
            </div>

            <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-fade-in-up">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm font-medium backdrop-blur-sm">
                        Admissions Open for 2026-27
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                        Excellence in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                            Medical Education
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                        Join a premier institution dedicated to shaping compassionate healers and innovative researchers for tomorrow's healthcare challenges.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/admissions"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
                        >
                            Apply Now
                        </Link>
                        <Link
                            href="/about"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 font-semibold rounded-full transition-all flex items-center justify-center gap-2"
                        >
                            Learn More
                        </Link>
                    </div>

                    <div className="flex items-center gap-8 pt-8 border-t border-white/10 text-sm text-gray-400">
                        <div>
                            <span className="block text-2xl font-bold text-white">25+</span>
                            <span>Years of Excellence</span>
                        </div>
                        <div className="w-px h-10 bg-white/20"></div>
                        <div>
                            <span className="block text-2xl font-bold text-white">5k+</span>
                            <span>Graduates</span>
                        </div>
                    </div>
                </div>

                {/* Right side decoration or empty for image spacing */}
                <div className="hidden md:block relative h-full min-h-[500px]">
                    {/* Abstract shapes or additional imagery could go here */}
                </div>
            </div>
        </section>
    );
}

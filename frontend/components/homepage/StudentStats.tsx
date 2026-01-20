import Image from "next/image";

export function StudentStats() {
    const stats = [
        {
            number: "1800+",
            label: "ENROLLED STUDENTS",
            image: "/images/paper%20bg%20for%20car.png"
        },
        {
            number: "20",
            label: "DIFFERENT COURSES",
            image: "/images/paper%20bg%20for%20car.png"
        },
        {
            number: "30+",
            label: "ACRES",
            image: "/images/paper%20bg%20for%20car.png"
        },
        {
            number: "24x7",
            label: "WIFI AND OTHER FACILITES",
            image: "/images/paper%20bg%20for%20car.png"
        }
    ];

    return (
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="w-full h-40 md:h-48 p-4 md:p-6 relative bg-white rounded-tr-3xl rounded-bl-3xl shadow-[0px_10px_9px_0px_rgba(0,0,0,0.25)] outline outline-[3px] outline-[#D4D4D4] flex flex-col justify-center items-center gap-1.5 overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                    {/* Background Image (Texture/Watermark) */}
                    {/* Background Image (Texture/Watermark) */}
                    <div className="absolute w-[300%] h-[300%] left-[-100%] top-[-100%] pointer-events-none opacity-100">
                        <Image
                            src={stat.image}
                            alt="Background Texture"
                            fill
                            className="object-cover"
                            unoptimized
                            priority
                        />
                    </div>

                    <div className="self-stretch text-center justify-start text-p-8 text-3xl md:text-5xl font-extrabold font-['DM_Sans'] relative z-10">
                        {stat.number}
                    </div>
                    <div className="self-stretch text-center justify-start text-[#2D2A74] text-[10px] md:text-sm font-bold font-['DM_Sans'] relative z-10 uppercase leading-tight">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
}

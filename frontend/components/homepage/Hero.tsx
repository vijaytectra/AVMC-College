import Image from "next/image";

const SIDEBAR_ICONS = [
    "/icons/NABL.svg",
    "/icons/PEOPLE.png",
    "/icons/NIRF.svg",
    "/icons/NABH.png",
    "/icons/UGC.svg"
];

export function Hero() {
    return (
        <div className="relative w-full h-[900px] overflow-hidden bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 -top-[120px] w-full h-full object-cover opacity-70 object-[60%_center] lg:object-[center_30%]"
                >
                    <source src="/images/hero.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
            </div>

            {/* Left Sidebar Floating Icons */}
            <div className="absolute left-5 top-10 flex flex-col items-center gap-[18px] z-10">
                {SIDEBAR_ICONS.map((icon, index) => {
                    const size = index === 3 ? 80 : 100;
                    return (
                        <div
                            key={index}
                            className={`flex items-center justify-center hover:scale-105 transition-transform cursor-pointer`}
                            style={{ width: `${size}px`, height: `${size}px` }}
                        >
                            <Image
                                src={icon}
                                alt={`Accreditation Icon ${index + 1}`}
                                width={size}
                                height={size}
                                className="object-contain"
                            />
                        </div>
                    );
                })}
            </div>

            {/* Bottom Right Action Button */}
            <div className="absolute bottom-72 right-10 z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-full border border-white/40 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors p-4">
                    <Image
                        src="/elements/chat hero svg.svg"
                        alt="Chat"
                        width={42}
                        height={42}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

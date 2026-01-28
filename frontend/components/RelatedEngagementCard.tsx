import React from "react";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface RelatedEngagementCardProps {
    imageSrc: string;
    tag: string;
    date: string;
    location: string;
    title: string;
}

const RelatedEngagementCard: React.FC<RelatedEngagementCardProps> = ({
    imageSrc,
    tag,
    date,
    location,
    title,
}) => {
    return (
        <div className="bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="h-64 relative overflow-hidden group">
                <Image className="object-cover transition-transform duration-500 group-hover:scale-105" src={imageSrc} alt={title} fill />
                <div className="absolute top-4 left-4 bg-[#FFF6E5] px-2.5 py-1 box-border">
                    <span className="text-p7 text-xs font-medium uppercase tracking-wide">{tag}</span>
                </div>
            </div>
            <div className="p-6 flex flex-col gap-6 border border-t-0 border-gray-100">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-xs text-grey-6">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-grey-5" />
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-grey-5" />
                            <span>{location}</span>
                        </div>
                    </div>
                    <h3 className="text-grey-9 text-base leading-snug">{title}</h3>
                </div>
                <div className="flex justify-between items-center pt-0">
                    <span className="text-p-7 text-xs tracking-wide cursor-pointer hover:underline">View Details</span>
                    <Image src="/images/arrow_forward below international card.svg" alt="Arrow Right" width={18} height={18} />
                </div>
            </div>
        </div>
    );
};

export default RelatedEngagementCard;

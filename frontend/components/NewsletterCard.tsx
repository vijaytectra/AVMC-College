import React from 'react';
import Image from 'next/image';

interface NewsletterCardProps {
    date: string;
    title: string;
    description: string;
    image: string;
}

const NewsletterCard: React.FC<NewsletterCardProps> = ({ date, title, description, image }) => {
    return (
        <div className="w-full bg-white outline outline-1 outline-offset-[-0.50px] outline-zinc-300 flex flex-col items-center gap-2 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="relative w-full h-52 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="w-full px-2.5 pb-4 flex flex-col items-start gap-2.5">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch text-neutral-600 text-base font-normal font-delight tracking-[0.02em]">
                            {date}
                        </div>
                        <h3 className="self-stretch text-violet-950 text-lg font-semibold font-delight tracking-[0.02em] line-clamp-2">
                            {title}
                        </h3>
                    </div>
                    <p className="self-stretch text-neutral-500 text-xs font-normal font-delight tracking-[0.02em] line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsletterCard;

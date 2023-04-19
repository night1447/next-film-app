import Image from 'next/image';
import style from './SliderImages.module.scss';
import React, { FC } from 'react';
import Link from 'next/link';

interface ISliderImages {
    type: string;
    className: string;
}

interface Iitem{
    href: string;
    src: string
}

export const SliderImages: FC<ISliderImages> = ({ type, className }) => {
    let items: Iitem[] = [];

    const movies = [
        { href: '/', src: '/images/header/img_1.jpg' },
        { href: '/', src: '/images/header/img_2.jpg' },
        { href: '/', src: '/images/header/img_3.jpg' },
    ];

    const series = [
        { href: '/', src: '/images/header/img_1.jpg' },
        { href: '/', src: '/images/header/img_2.jpg' },
        { href: '/', src: '/images/header/img_3.jpg' },
    ];

    const cartoons = [
        { href: '/', src: '/images/header/img_1.jpg' },
        { href: '/', src: '/images/header/img_2.jpg' },
        { href: '/', src: '/images/header/img_3.jpg' },
    ];
    
    const tv = [
        { href: '/', src: '/images/header/img_1.jpg' },
        { href: '/', src: '/images/header/img_2.jpg' },
        { href: '/', src: '/images/header/img_3.jpg' },
    ];

    if (type === 'movies') items = movies;
    if (type === 'series') items = series;
    if (type === 'cartoons') items = cartoons;
    if (type === 'tv') items = tv;


    return (
        <div className={className}>
            <span>
                {items.map((item: Iitem) => (
                    <Link key={item.src} href={item.href}>
                        <Image
                            src={item.src}
                            alt="img"
                            width={130}
                            height={75}
                        />
                    </Link>
                ))}
            </span>
            <span>
                {items.map((item) => (
                    <Link key={item.src} href={item.href}>
                        <Image
                            src={item.src}
                            alt="img"
                            width={130}
                            height={75}
                        />
                    </Link>
                ))}
            </span>
        </div>
    );
};

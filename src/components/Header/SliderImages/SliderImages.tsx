import Image from 'next/image';
import style from './sliderImages.module.scss';
import React, { FC } from 'react';
import Link from 'next/link';
import { getTypeForHeaderDrop } from '@/utils/getTypeForHeaderDrop';

interface SliderImageProps {
    type: string;
    direction: 'left' | 'right';
}

interface ISLide {
    href: string;
    src: string;
}

export const SliderImages: FC<SliderImageProps> = ({ type, direction }) => {
    let items: ISLide[] = getTypeForHeaderDrop(type, 'images');
    items = direction === 'left' ? items.slice(0, 3) : items.slice(3, 6);

    return (
        <div
            className={`${style.container} ${
                direction === 'left' ? style.left : style.right
            }`}
        >
            <span>
                {items.map((item: ISLide) => (
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

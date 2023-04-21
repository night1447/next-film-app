import React, { FC } from 'react';
import DefaultSwiper from '@/components/Swiper/DefaultSwiper/DefaultSwiper';
import Image from 'next/image';
import styles from './swiper.module.scss';
import { v4 as uuid } from 'uuid';
import { Button } from '@/components/UI/Button/Button';
import Link from 'next/link';
import { SrOnly } from '@/components/UI/SrOnly/SrOnly';

interface Slide {
    image: string;
    href: string;
}

interface FirstSwiperProps {
    className: string;
}

const generateNodes = (slides: Slide[]): React.ReactNode[] => {
    return slides.map(slide =>
        <div className={styles.slide} key={uuid()}>
            <Image src={slide.image} alt={'фильм'} fill className={styles.image} />
            <Button variants={'accent'} className={styles.button} href={'/about'}>
                Смотреть по подписке
            </Button>
            <Link href={slide.href} className={styles.href_abs} target={'_self'}>
                <SrOnly title={'перейти к фильму'} />
            </Link>
        </div>,
    );
};

const FirstSwiper: FC<FirstSwiperProps> = ({ className }) => {
    const images: Slide[] = [{
        image: '/firstSwiper.jpeg',
        href: '/',
    }, {
        image: '/firstSwiper.jpeg',
        href: '/',
    }, {
        image: '/firstSwiper.jpeg',
        href: '/',
    }, {
        image: '/firstSwiper.jpeg',
        href: '/',
    }, {
        image: '/firstSwiper.jpeg',
        href: '/',
    }, {
        image: '/firstSwiper.jpeg',
        href: '/',
    }];
    const nodes = generateNodes(images);
    return <DefaultSwiper slides={nodes}
                          centered={true}
                          isInfinity={true}
                          autoPlay={true}
                          arrowBackground={true}
                          slidesPerView={1.2}
                          spaceBetween={30}
                          className={className}
    />;
};

export default FirstSwiper;

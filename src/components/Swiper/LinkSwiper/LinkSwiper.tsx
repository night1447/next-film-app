import React, { FC } from 'react';
import DefaultSwiper from '@/components/Swiper/DefaultSwiper/DefaultSwiper';
import { v4 as uuid } from 'uuid';
import { InteractiveType } from '@/models/InteractiveType';
import { LinkSlide } from '@/components/Slides';

interface LinkSwiperProps {
    info: InteractiveType[];
}

const getSlides = (info: InteractiveType[]) => info.map(item => <LinkSlide key={uuid()} info={item} />);
const LinkSwiper: FC<LinkSwiperProps> = ({ info }) => {

    return <DefaultSwiper
        arrowBackground={false}
        spaceBetween={24}
        slidesPerView={4}
        breakPoints={{
            1380: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            120: {
                slidesPerView: 1.1,
            },
        }}
        isInfinity={false}
        isCarousel={true}
        slides={getSlides(info)} />;
};
export default LinkSwiper;

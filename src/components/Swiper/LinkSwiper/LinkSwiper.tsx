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
        isInfinity={false}
        isCarousel={true}
        slides={getSlides(info)} />;
};
export default LinkSwiper;

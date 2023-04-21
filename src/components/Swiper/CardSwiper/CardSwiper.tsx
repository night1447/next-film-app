import React, { FC } from 'react';
import DefaultSwiper from '@/components/Swiper/DefaultSwiper/DefaultSwiper';
import { FilmCardMinimize } from '@/models/FilmCardMinimize';
import { v4 as uuid } from 'uuid';
import { FilmSlide } from '@/components/Slides';

interface CardSwiperProps {
    info: FilmCardMinimize[];
}

const getSlides = (info: FilmCardMinimize[]) => (info.map(item => <FilmSlide key={uuid()}
                                                                             isFullActions={true}
                                                                             item={item} />));

const CardSwiper: FC<CardSwiperProps> = ({ info }) => {
    return <DefaultSwiper slidesPerView={7}
                          slides={getSlides(info)}
                          spaceBetween={24}
                          isCarousel={true}
                          arrowBackground={false} />;
};

export default CardSwiper;

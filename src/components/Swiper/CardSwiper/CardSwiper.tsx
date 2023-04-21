import React, { FC } from 'react';
import DefaultSwiper from '@/components/Swiper/DefaultSwiper/DefaultSwiper';
import { FilmCardMinimize } from '@/models/FilmCardMinimize';
import FilmSlide from '@/components/Slides/FilmSlide/FilmSlide';
import { v4 as uuid } from 'uuid';

interface CardSwiperProps {
    info: FilmCardMinimize[];
}

const getSlides = (info: FilmCardMinimize[]) => (info.map(item => <FilmSlide key={uuid()} item={item} />));

const CardSwiper: FC<CardSwiperProps> = ({ info }) => {
    return <DefaultSwiper slidesPerView={7}
                          slides={getSlides(info)}
                          spaceBetween={24}
                          isCarousel={true}
                          arrowBackground={false} />;
};

export default CardSwiper;

import React, { FC } from 'react';
import DefaultSwiper from '@/components/Swiper/DefaultSwiper/DefaultSwiper';
import { FilmCardMinimize } from '@/models/FilmCardMinimize';
import { v4 as uuid } from 'uuid';
import { FilmSlide, MoreSlide } from '@/components/Slides';

interface CardSwiperProps {
    info: FilmCardMinimize[];
    moreHref: string;
}

const getSlides = (info: FilmCardMinimize[], moreHref: string): React.ReactNode[] => {
    const massive: React.ReactNode [] = info.map(item => <FilmSlide key={uuid()}
                                                                    isFullActions={true}
                                                                    item={item} />);
    massive.push(<MoreSlide href={moreHref} />);
    return massive;
};

const CardSwiper: FC<CardSwiperProps> = ({ info, moreHref }) => {
    return <DefaultSwiper slidesPerView={7}
                          slides={getSlides(info, moreHref)}
                          breakPoints={{
                              1380: {
                                  slidesPerView: 7,
                              },
                              1024: {
                                  slidesPerView: 5,
                              },
                              576: {
                                  slidesPerView: 4,
                              },
                              120: {
                                  slidesPerView: 2,
                              },
                          }}
                          spaceBetween={24}
                          isCarousel={true}
                          arrowBackground={false} />;
};

export default CardSwiper;

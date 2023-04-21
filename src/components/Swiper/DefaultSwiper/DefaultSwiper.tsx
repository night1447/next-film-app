import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { v4 as uuid } from 'uuid';
import styles from './swiper.module.scss';
import { SrOnly } from '@/components/UI/SrOnly/SrOnly';
import { Navigation } from 'swiper';

interface DefaultSwiperProps {
    className?: string;
    wrapperClassName?: string;
    slides: React.ReactNode[];
    isInfinity?: boolean;
    centered?: boolean;
    autoPlay?: boolean;
    spaceBetween: number;
    slidesPerView: number | 'auto';
    arrowBackground: boolean;
    isCarousel?: boolean;
    initialSlide?: number;
}

const DefaultSwiper: FC<DefaultSwiperProps> = ({
                                                   slides,
                                                   className,
                                                   centered,
                                                   isInfinity,
                                                   arrowBackground,
                                                   slidesPerView,
                                                   wrapperClassName,
                                                   spaceBetween,
                                                   initialSlide,
                                                   autoPlay,
                                                   isCarousel,
                                               }) => {
    return (
        <Swiper initialSlide={initialSlide}
                modules={[Navigation]}
                navigation={{
                    enabled: true,
                    nextEl: `.${styles.btn_next}`,
                    prevEl: `.${styles.btn_prev}`,
                }
                }
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                centeredSlides={centered || false}
                centeredSlidesBounds={centered || false}
                centerInsufficientSlides={centered || false}
                speed={1500}
                wrapperClass={`${wrapperClassName || ''} ${isCarousel ? styles.carousel : ''}`}
                autoplay={autoPlay ? { delay: 2000, waitForTransition: true } : false}
                className={`${className || ''} ${isCarousel ? styles.carouselSwiper : ''}`}
                loop={isInfinity || false}>


            {slides.map(slide => <SwiperSlide key={uuid()}
                                              className={`${styles.slide}`}>{slide}</SwiperSlide>)}
            <button
                className={`${styles.btn} ${styles.btn_prev} ${arrowBackground ? styles.bg : ''} ${isCarousel ? styles.carouselBtn_prev : ''}`}
                type={'button'}
            >
                <SrOnly title={'предыдущий слайд'} />
            </button>
            <button
                className={`${styles.btn} ${styles.btn_next} ${arrowBackground ? styles.bg : ''} ${isCarousel ? styles.carouselBtn_next : ''}`}
                type={'button'}
            >
                <SrOnly title={'следующий слайд'} />
            </button>
        </Swiper>);
};
export default DefaultSwiper;

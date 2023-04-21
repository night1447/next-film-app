import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { v4 as uuid } from 'uuid';
import styles from './swiper.module.scss';
import { SrOnly } from '@/components/UI/SrOnly/SrOnly';
import { Navigation } from 'swiper';

interface DefaultSwiperProps {
    className?: string;
    slides: React.ReactNode[];
    isInfinity?: boolean;
    centered?: boolean;
    autoPlay?: boolean;
    spaceBetween: number;
    slidesPerView: number | 'auto';
    arrowBackground: boolean;
    prevClass?: string;
    nextClass?: string;
}

const DefaultSwiper: FC<DefaultSwiperProps> = ({
                                                   slides,
                                                   className,
                                                   centered,
                                                   isInfinity,
                                                   arrowBackground,
                                                   slidesPerView,
                                                   spaceBetween,
                                                   prevClass,
                                                   nextClass,
                                                   autoPlay,
                                               }) => {
    return (<div className={styles.shell}>
        <Swiper initialSlide={1}
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
                autoplay={autoPlay ? { delay: 2000, waitForTransition: true } : false}
                className={`${className || ''}`}
                loop={isInfinity || false}>


            {slides.map(slide => <SwiperSlide key={uuid()}>{slide}</SwiperSlide>)}
            <button
                className={`${styles.btn} ${styles.btn_prev} ${arrowBackground ? styles.bg : ''} ${prevClass || ''}`}
                type={'button'}
            >
                <SrOnly title={'предыдущий слайд'} />
            </button>
            <button
                className={`${styles.btn} ${styles.btn_next} ${arrowBackground ? styles.bg : ''} ${nextClass || ''}`}
                type={'button'}
            >
                <SrOnly title={'следующий слайд'} />
            </button>
        </Swiper>
    </div>);
};
export default DefaultSwiper;

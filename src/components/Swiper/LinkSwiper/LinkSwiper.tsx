import React, { FC } from 'react';
import DefaultSwiper from '@/components/Swiper/DefaultSwiper/DefaultSwiper';
import { InteractiveType } from '@/components/Screens/InteractiveBlock/InteractiveType';
import LinkSlide from '@/components/Slides/LinkSlide/LinkSlide';
import { v4 as uuid } from 'uuid';
import styles from './swiper.module.scss';

interface LinkSwiperProps {
    info: InteractiveType[];
}

const getSlides = (info: InteractiveType[]) => info.map(item => <LinkSlide key={uuid()} info={item} />);
const LinkSwiper: FC<LinkSwiperProps> = ({ info }) => {

    return <DefaultSwiper
        arrowBackground={false}
        spaceBetween={24}
        slidesPerView={4}
        prevClass={`${styles.prev}`}
        nextClass={`${styles.next}`}
        className={styles.shell}
        isInfinity={false}
        slides={getSlides(info)} />;
};
export default LinkSwiper;

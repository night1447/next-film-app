import React, { FC } from 'react';
import styles from './film.module.scss';
import { FilmCardMinimize } from '@/models/FilmCardMinimize';
import Image from 'next/image';
import Title from '@/components/UI/Title/Title';
import Action from '@/components/Action/Action';

interface FilmSlideProps {
    item: FilmCardMinimize;
}

const FilmSlide: FC<FilmSlideProps> = ({ item }) => (
    <div className={styles.film}>
        <div className={styles.imageWrapper}>
            <Image alt={'картинка фильма'} src={item.urlImg} fill className={styles.img} />
            <div className={styles.ageLimit}>
                {item.limitAge}
            </div>
            <div className={styles.shell}>
                <ul className={styles.actions}>
                    <Action arial={'Смотреть позже'} />
                </ul>
            </div>
        </div>
        <Title title={item.title} htmlTagName={'h4'} linkSettings={{ isLink: false }} /><p
        className={`${styles.subscribe} ${item.isSubscribe ? styles.subscribe_active : ''}`}>{item.isSubscribe ? 'Подписка' : 'Бесплатно'}</p>

    </div>
);

export default FilmSlide;

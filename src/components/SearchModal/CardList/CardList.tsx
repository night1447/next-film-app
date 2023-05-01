import React, { FC, useEffect, useState } from 'react';
import styles from './cards.module.scss';
import { FilmCardMinimize } from '@/models/FilmCardMinimize';
import { FilmSlide } from '@/components/Slides';

interface CardListProps {
    value: string;
}

const initialState: FilmCardMinimize[] = [
    {
        title: 'Лунтик и его друзья',
        year: 2022,
        urlImg: '/luntik.jpeg',
        limitAge: '+0',
        rating: '7,5',
        country: 'USA',
        bestCharacteristic: 'сюжет',
        isSubscribe: true,
        duration: 0,
        isSeries: true,
        href: '/',
        mainGenre: 'Для детей',
        feature: 'all',
    }, {
        title: 'Лунтик и его друзья',
        year: 2022,
        urlImg: '/luntik.jpeg',
        limitAge: '+0',
        rating: '7,5',
        country: 'USA',
        bestCharacteristic: 'сюжет',
        isSubscribe: true,
        duration: 0,
        isSeries: true,
        href: '/',
        mainGenre: 'Для детей',
        feature: 'choice',
    }, {
        title: 'Лунтик и его друзья',
        year: 2022,
        urlImg: '/luntik.jpeg',
        limitAge: '+0',
        rating: '7,5',
        country: 'USA',
        bestCharacteristic: 'сюжет',
        isSubscribe: true,
        duration: 0,
        isSeries: true,
        href: '/',
        mainGenre: 'Для детей',
        feature: 'choice',
    }, {
        title: 'Лунтик и его друзья',
        year: 2022,
        urlImg: '/luntik.jpeg',
        limitAge: '+0',
        rating: '7,5',
        country: 'USA',
        bestCharacteristic: 'сюжет',
        isSubscribe: true,
        duration: 0,
        isSeries: true,
        href: '/',
        mainGenre: 'Для детей',
        feature: 'choice',
    }, {
        title: 'Лунтик и его друзья',
        year: 2022,
        urlImg: '/luntik.jpeg',
        limitAge: '+0',
        rating: '7,5',
        country: 'USA',
        bestCharacteristic: 'сюжет',
        isSubscribe: true,
        duration: 0,
        isSeries: true,
        href: '/',
        mainGenre: 'Для детей',
        feature: 'choice',
    }, {
        title: 'Лунтик и его друзья',
        year: 2022,
        urlImg: '/luntik.jpeg',
        limitAge: '+0',
        rating: '7,5',
        country: 'USA',
        bestCharacteristic: 'сюжет',
        isSubscribe: false,
        duration: 8,
        isSeries: true,
        href: '/',
        mainGenre: 'Для детей',
        feature: 'exclusive',
    }, {
        title: 'Лунтик и его друзья',
        year: 2022,
        urlImg: '/luntik.jpeg',
        limitAge: '+0',
        rating: '7,5',
        country: 'USA',
        bestCharacteristic: 'сюжет',
        isSubscribe: false,
        duration: 12,
        isSeries: false,
        href: '/',
        mainGenre: 'Для детей',
        feature: 'creating',
    },
];

const CardList: FC<CardListProps> = ({ value }) => {
    const [list, setList] = useState<FilmCardMinimize[]>(initialState);
    useEffect(() => {
    }, []);
    return (
        <ul className={styles.cards}>
            {list.map((item, index) =>
                <li key={index} className={styles.card}>
                    <FilmSlide item={item} isFullActions={true} />
                </li>)}
        </ul>
    );
};

export default CardList;

import style from './ListYears.module.scss';
import React, { FC } from 'react';
import ListLinks from '../ListLinks/ListLinks';
import useTranslation from 'next-translate/useTranslation';

interface IListYears {
    type: string;
}

interface IItemsList {
    href: string;
    value: string;
}

export const ListYears: FC<IListYears> = ({ type }) => {
    const { t } = useTranslation();
    let ListYears: IItemsList[] = [];

    const yearsForMovies = [
        { href: '/', value: 'common:header.yearsMovies.2023' },
        { href: '/', value: 'common:header.yearsMovies.2022' },
        { href: '/', value: 'common:header.yearsMovies.2021' },
        { href: '/', value: 'common:header.yearsMovies.2020' },
    ];

    const yearsForSeries = [
        { href: '/', value: 'common:header.yearsSeries.2023' },
        { href: '/', value: 'common:header.yearsSeries.2022' },
        { href: '/', value: 'common:header.yearsSeries.2021' },
        { href: '/', value: 'common:header.yearsSeries.2020' },
    ];

    const yearsForCartoons = [
        { href: '/', value: 'common:header.yearsCartoons.2023' },
        { href: '/', value: 'common:header.yearsCartoons.2022' },
        { href: '/', value: 'common:header.yearsCartoons.2021' },
        { href: '/', value: 'common:header.yearsCartoons.2020' },
    ];

    if (type === 'movies') ListYears = yearsForMovies;
    if (type === 'series') ListYears = yearsForSeries;
    if (type === 'cartoons') ListYears = yearsForCartoons;

    return (
        <div className={style.years}>
            <h3>{t('common:header.years')}</h3>
            <ListLinks items={ListYears} />
        </div>
    );
};

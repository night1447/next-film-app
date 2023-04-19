import style from './ListCountries.module.scss';
import React, { FC } from 'react';
import ListLinks from '../ListLinks/ListLinks';
import useTranslation from 'next-translate/useTranslation';

interface IListCountries {
    type: string;
}

interface IItemsList {
    href: string;
    value: string;
}

export const ListCountries: FC<IListCountries> = ({ type }) => {
    const { t } = useTranslation();
    let ListCountries: IItemsList[] = [];

    const countriesForMovies = [
        { href: '/', value: 'common:header.countries.Russians' },
        { href: '/', value: 'common:header.countries.Foreign' },
        { href: '/', value: 'common:header.countries.Soviet' },
    ];

    const countriesForSeries = [
        { href: '/', value: 'common:header.countries.Russians' },
        { href: '/', value: 'common:header.countries.Foreign' },
        { href: '/', value: 'common:header.countries.American' },
        { href: '/', value: 'common:header.countries.Ukrainian' },
        { href: '/', value: 'common:header.countries.Korean' },
        { href: '/', value: 'common:header.countries.Turkish' },
    ];

    const countriesForCartoons = [
        { href: '/', value: 'common:header.countries.Soviet' },
        { href: '/', value: 'common:header.countries.Russians' },
        { href: '/', value: 'common:header.countries.American' },
        { href: '/', value: 'common:header.countries.Foreign' },
    ];

    if (type === 'movies') ListCountries = countriesForMovies;
    if (type === 'series') ListCountries = countriesForSeries;
    if (type === 'cartoons') ListCountries = countriesForCartoons;

    return (
        <div className={style.countries}>
            <h3>{t("common:header.countries.countries")}</h3>
            <ListLinks items={ListCountries} />
        </div>
    );
};

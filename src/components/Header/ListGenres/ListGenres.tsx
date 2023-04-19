import style from './ListGenres.module.scss';
import React, { FC } from 'react';
import ListLinks from '../ListLinks/ListLinks';
import useTranslation from 'next-translate/useTranslation';

interface IListGenres {
    type: string;
}

interface IItemsList {
    href: string;
    value: string;
}

export const ListGenres: FC<IListGenres> = ({ type }) => {
    const { t } = useTranslation();
    let ListGenres: IItemsList[] = [];

    const movies = [
        { href: '/', value: 'common:header.genres.arthouse' },
        { href: '/', value: 'common:header.genres.militants' },
        { href: '/', value: 'common:header.genres.western' },
        { href: '/', value: 'common:header.genres.military' },
        { href: '/', value: 'common:header.genres.detectives' },
        { href: '/', value: 'common:header.genres.forTheWholeFamily' },
        { href: '/', value: 'common:header.genres.forChildren' },
        { href: '/', value: 'common:header.genres.documentaries' },
        { href: '/', value: 'common:header.genres.drama' },
        { href: '/', value: 'common:header.genres.historical' },
        { href: '/', value: 'common:header.genres.catastrophes' },
        { href: '/', value: 'common:header.genres.comedy' },
        { href: '/', value: 'common:header.genres.criminal' },
        { href: '/', value: 'common:header.genres.melodramas' },
        { href: '/', value: 'common:header.genres.mystical' },
        { href: '/', value: 'common:header.genres.basedOnComics' },
        { href: '/', value: 'common:header.genres.adventures' },
        { href: '/', value: 'common:header.genres.sport' },
        { href: '/', value: 'common:header.genres.thrillers' },
        { href: '/', value: 'common:header.genres.horror' },
        { href: '/', value: 'common:header.genres.fantastic' },
        { href: '/', value: 'common:header.genres.fantasy' },
    ];

    const series = [
        { href: '/', value: 'common:header.genres.biography' },
        { href: '/', value: 'common:header.genres.militants' },
        { href: '/', value: 'common:header.genres.military' },
        { href: '/', value: 'common:header.genres.detectives' },
        { href: '/', value: 'common:header.genres.forTheWholeFamily' },
        { href: '/', value: 'common:header.genres.documentaries' },
        { href: '/', value: 'common:header.genres.drama' },
        { href: '/', value: 'common:header.genres.historical' },
        { href: '/', value: 'common:header.genres.comedy' },
        { href: '/', value: 'common:header.genres.criminal' },
        { href: '/', value: 'common:header.genres.medical' },
        { href: '/', value: 'common:header.genres.melodramas' },
        { href: '/', value: 'common:header.genres.adventures' },
        { href: '/', value: 'common:header.genres.romantic' },
        { href: '/', value: 'common:header.genres.TVshow' },
        { href: '/', value: 'common:header.genres.thrillers' },
        { href: '/', value: 'common:header.genres.turkish' },
        { href: '/', value: 'common:header.genres.horror' },
        { href: '/', value: 'common:header.genres.fantastic' },
        { href: '/', value: 'common:header.genres.fantasy' },
    ];

    const cartoons = [
        { href: '/', value: 'common:header.genres.anime' },
        { href: '/', value: 'common:header.genres.action' },
        { href: '/', value: 'common:header.genres.detectives' },
        { href: '/', value: 'common:header.genres.forAdults' },
        { href: '/', value: 'common:header.genres.forTheWholeFamily' },
        { href: '/', value: 'common:header.genres.forChildren' },
        { href: '/', value: 'common:header.genres.drama' },
        { href: '/', value: 'common:header.genres.historical' },
        { href: '/', value: 'common:header.genres.comedy' },
        { href: '/', value: 'common:header.genres.criminal' },
        { href: '/', value: 'common:header.genres.musical' },
        { href: '/', value: 'common:header.genres.featureLength' },
        { href: '/', value: 'common:header.genres.adventures' },
        { href: '/', value: 'common:header.genres.educational' },
        { href: '/', value: 'common:header.genres.series' },
        { href: '/', value: 'common:header.genres.thrillers' },
        { href: '/', value: 'common:header.genres.fantastic' },
        { href: '/', value: 'common:header.genres.fantasy' },
    ];

    const tv = [
        {
            href: 'https://www.ivi.ru/tvplus',
            value: 'common:header.selections.TVchannels',
        },
        {
            href: 'https://www.ivi.ru/tvplus/razvlekatelnoe',
            value: 'common:header.selections.entertainment',
        },
        {
            href: 'https://www.ivi.ru/tvplus/deti',
            value: 'common:header.selections.children',
        },
        {
            href: 'https://www.ivi.ru/tvplus/sport',
            value: 'common:header.selections.sportsTV',
        },
        {
            href: 'https://www.ivi.ru/tvplus/documentalnoe',
            value: 'common:header.selections.documentary',
        },
    ];

    if (type === 'movies') ListGenres = movies;
    if (type === 'series') ListGenres = series;
    if (type === 'cartoons') ListGenres = cartoons;
    if (type === 'tv') ListGenres = tv;

    return (
        <div className={style.genres}>
            <h3>
                {type === 'tv'
                    ? t('common:header.selections.TVonline')
                    : t('common:header.genres.genres')}
            </h3>
            <ListLinks items={ListGenres} />
        </div>
    );
};

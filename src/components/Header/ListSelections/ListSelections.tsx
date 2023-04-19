import style from './ListSelections.module.scss';
import React, { FC } from 'react';
import ListLinks from '../ListLinks/ListLinks';

interface IListSelections {
    type: string;
}

interface Items {
    href: string;
    value: string;
}

export const ListSelections: FC<IListSelections> = ({ type }) => {
    let ListSlect: Items[] = [];

    const movies = [
        { href: '/', value: 'common:header.selections.new' },
        { href: '/', value: 'common:header.selections.collections' },
        { href: '/', value: 'common:header.selections.iviRating' },
        { href: '/', value: 'common:header.selections.comingSoonToIvi' },
        { href: '/', value: 'common:header.selections.trailers' },
        { href: '/', value: 'common:header.selections.whatToSee' },
        { href: '/', value: 'common:header.selections.moviesInHD' },
        { href: '/', value: 'common:header.selections.iviChoice' },
        { href: '/', value: 'common:header.selections.subscriptionNews' },
        { href: '/', value: 'common:header.selections.moviesAmediateka' },
        { href: '/', value: 'common:header.selections.popularFilms' },
        { href: '/', value: 'common:header.selections.iviFilms' },
    ];

    const series = [
        { href: '/', value: 'common:header.selections.new' },
        { href: '/', value: 'common:header.selections.iviRating' },
        { href: '/', value: 'common:header.selections.seriesInHD' },
        { href: '/', value: 'common:header.selections.freeSeries' },
        { href: '/', value: 'common:header.selections.seriesAmediateka' },
        { href: '/', value: 'common:header.selections.seriesParamountPlay' },
    ];

    const cartoons = [
        { href: '/', value: 'common:header.selections.new' },
        { href: '/', value: 'common:header.selections.cartoonsInHD' },
        { href: '/', value: 'common:header.selections.cartoonParamountPlay' },
        { href: '/', value: 'common:header.selections.cartoonDreamworks' },
        { href: '/', value: 'common:header.selections.cartoonsSTSKids' },
    ];

    if (type === 'movies') ListSlect = movies;
    if (type === 'series') ListSlect = series;
    if (type === 'cartoons') ListSlect = cartoons;

    return (
        <div className={style.selections}>
            <ListLinks items={ListSlect} />
        </div>
    );
};

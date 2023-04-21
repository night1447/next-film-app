import style from './ListGenres.module.scss';
import React, { FC } from 'react';
import ListLinks from '../ListLinks/ListLinks';
import useTranslation from 'next-translate/useTranslation';
import Title from '@/components/UI/Title/Title';
import { getTypeForHeaderDrop } from '@/utils/getTypeForHeaderDrop';

interface IListGenres {
    type: string;
}

export const ListGenres: FC<IListGenres> = ({ type }) => {
    const { t } = useTranslation();
    let ListGenres = getTypeForHeaderDrop(type, 'genres');

    return (
        <div className={style.genres}>
            <Title
                title={
                    type === 'tv'
                        ? t('common:header.selections.TVonline')
                        : t('common:header.genres.genres')
                }
                htmlTagName="h3"
                linkSettings={{ isLink: false }}
            />
            <ListLinks items={ListGenres} />
        </div>
    );
};

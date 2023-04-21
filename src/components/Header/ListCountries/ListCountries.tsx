import style from './ListCountries.module.scss';
import React, { FC } from 'react';
import ListLinks from '../ListLinks/ListLinks';
import useTranslation from 'next-translate/useTranslation';
import Title from '@/components/UI/Title/Title';
import { getTypeForHeaderDrop } from '@/utils/getTypeForHeaderDrop';

interface IListCountries {
    type: string;
}

export const ListCountries: FC<IListCountries> = ({ type }) => {
    const { t } = useTranslation();
    let ListCountries = getTypeForHeaderDrop(type, 'countries');

    return (
        <div className={style.countries}>
            <Title title={t("common:header.countries.countries")} htmlTagName='h3' linkSettings={{isLink:false}}/>
            <ListLinks items={ListCountries} />
        </div>
    );
};

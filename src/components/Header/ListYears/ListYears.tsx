import style from './ListYears.module.scss';
import React, { FC } from 'react';
import ListLinks from '../ListLinks/ListLinks';
import useTranslation from 'next-translate/useTranslation';
import Title from '@/components/UI/Title/Title';
import { getTypeForHeaderDrop } from '@/utils/getTypeForHeaderDrop';

interface IListYears {
    type: string;
}

export const ListYears: FC<IListYears> = ({ type }) => {
    const { t } = useTranslation();
    let ListYears = getTypeForHeaderDrop(type, "years");

    return (
        <div className={style.years}>
               <Title
                title={t('common:header.years')}
                htmlTagName="h3"
                linkSettings={{ isLink: false }}
            />
            <ListLinks items={ListYears} />
        </div>
    );
};

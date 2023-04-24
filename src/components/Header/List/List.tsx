import React, { FC } from 'react';
import Title from '@/components/UI/Title/Title';
import ListLinks from '@/components/Header/ListLinks/ListLinks';
import useTranslation from 'next-translate/useTranslation';
import { getTypeForHeaderDrop } from '@/utils/getTypeForHeaderDrop';
import styles from './list.module.scss';

interface ListProps {
    listType: 'genres' | 'countries' | 'years' | 'selections';
    type: string;
    className?: string;
}

const List: FC<ListProps> = ({ listType, type, className }) => {
    const { t } = useTranslation();
    let list = getTypeForHeaderDrop(type, listType);
    return (
        <div className={`${styles[listType]} ${className || ''}`}>
            {listType !== 'selections' ?
                <Title
                    className={styles.title}
                    title={type === 'tv' ? t('common:header.selections.TVonline') : t(`common:header.${listType}.title`)}
                    htmlTagName='h3' linkSettings={{ isLink: false }} />
                :
                <></>}
            <ListLinks items={list} />
        </div>
    );
};

export default List;

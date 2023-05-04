import React, { FC } from 'react';
import Title from '@/components/UI/Title/Title';
import ListLinks from '@/components/UI/ListLinks/ListLinks';
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
    // let list = getTypeForHeaderDrop(type, listType);
    return (
        <>
            {type === 'aboutUs' ? (
                <div className={`${styles[listType]} ${className || ''}`}>
                    <ListLinks type={type} listType={listType} />
                </div>
            ) : (
                <div className={`${styles[listType]} ${className || ''}`}>
                    {listType !== 'selections' ? (
                        <Title
                            className={styles.title}
                            title={
                                type === 'tv'
                                    ? t('common:header.selections.TVonline')
                                    : t(`common:header.${listType}.title`)
                            }
                            htmlTagName="h4"
                            linkSettings={{ isLink: false }}
                        />
                    ) : (
                        <></>
                    )}
                    <ListLinks type={type} listType={listType} />
                </div>
            )}
        </>
    );
};

export default List;

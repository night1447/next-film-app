import React, { FC } from 'react';
import styles from './links.module.scss';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { IGeneralItem } from '@/components/Header/types';
import { getTypeForHeaderDrop } from '@/utils/getTypeForHeaderDrop';



// interface ListLinkProps {
//     items: IGeneralItem[],
// }

interface ListProps {
    listType: 'genres' | 'countries' | 'years' | 'selections';
    type: string;
}

const ListLinks: FC<ListProps> = ({listType, type}) => {
    const { t } = useTranslation();
    let list = getTypeForHeaderDrop(type, listType);

    return (
            <ul className={styles.list}>
                {list.map((item:IGeneralItem) => (
                    <li key={item.value}>
                        <Link href={item.href}>{t(item.value)}</Link>
                    </li>
                ))}
            </ul>
    );
};

export default ListLinks;
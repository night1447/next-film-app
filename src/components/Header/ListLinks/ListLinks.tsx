import React, { FC } from 'react';
import styles from './links.module.scss';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { IGeneralItem } from '@/components/Header/types';



interface ListLinkProps {
    items: IGeneralItem[],
}

const ListLinks: FC<ListLinkProps> = ({items}) => {
    const { t } = useTranslation();
    return (
            <ul className={styles.list}>
                {items.map((item) => (
                    <li key={item.value}>
                        <Link href={item.href}>{t(item.value)}</Link>
                    </li>
                ))}
            </ul>
    );
};

export default ListLinks;
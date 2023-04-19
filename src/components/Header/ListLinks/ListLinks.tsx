import React, { FC } from 'react';
import styles from './ListLinks.module.scss';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

interface IItemsList {
    href: string;
    value: string;
}

interface IListLinks {
    items: IItemsList[],
}

const ListLinks: FC<IListLinks> = ({items}) => {
    const { t } = useTranslation();

    return (
        <>
            <ul className={styles.list}>
                {items.map((item) => (
                    <li key={item.value}>
                        <Link href={item.href}>{t(item.value)}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ListLinks;
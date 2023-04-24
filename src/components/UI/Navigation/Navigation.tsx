import React, { FC, MouseEvent } from 'react';
import styles from './Navigation.module.scss';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

interface IItemsList {
    href: string;
    value: string;
    onHover?: (e: MouseEvent<HTMLElement>) => void;
    onEver?: () => void;
}

interface NavigationProps {
    items: IItemsList[];
    flex?: boolean;
}

const Navigation: FC<NavigationProps> = ({ items, flex = false }) => {
    const { t } = useTranslation();

    return (
        <nav
            className={
                `${styles.navigation} ${flex ? styles.flex : styles.block}`
            }
        >
            <ul>
                {items?.map((item) => (
                    <li key={item.value}>
                        {item.onHover ? (
                            <Link
                                onMouseLeave={() => item.onEver!()}
                                onMouseEnter={(e) => item.onHover ? item.onHover(e) : ''}
                                href={item.href}
                            >
                                {t(item.value)}
                            </Link>
                        ) : (
                            <Link href={item.href}>{t(item.value)}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;

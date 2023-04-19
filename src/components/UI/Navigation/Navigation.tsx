import React, { FC } from 'react';
import styles from './Navigation.module.scss';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

interface IItemsList {
    href: string;
    value: any;
    onHover?: (e: any) => void;
    onEver?: () => void;
}

interface INavication {
    items?: IItemsList[];
    flex?: boolean;
}

const Navigation: FC<INavication> = ({ items, flex = false }) => {
    const { t } = useTranslation();
    
    return (
        <nav
            className={
                flex
                    ? `${styles.navigation} ${styles.flex}`
                    : `${styles.navigation} ${styles.block}`
            }
        >
            <ul>
                {items!.map((item) => (
                    <li key={item.value}>
                        {item.onHover
                            ? <Link onMouseLeave={() => item.onEver!()} onMouseEnter={(e) => item.onHover!(e)} href={item.href}>{t(item.value)}</Link>
                            : <Link href={item.href}>{t(item.value)}</Link>
                        }
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;

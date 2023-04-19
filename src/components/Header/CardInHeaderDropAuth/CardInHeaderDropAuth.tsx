import style from './CardInHeaderDropAuth.module.scss';
import React, { FC, PropsWithChildren } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

interface ICard {
    titel: string;
    href: string;
}

export const CardInHeaderDropAuth: FC<PropsWithChildren<ICard>> = ({
    children,
    titel,
    href,
}) => {
    const { t } = useTranslation();


    return (
        <Link
            className={style.card}
            href={href}
        >
            {children}
            <h3>{t(titel)}</h3>
        </Link>
    );
};

import style from './CardInHeaderDropAuth.module.scss';
import React, { FC, PropsWithChildren } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Title from '@/components/UI/Title/Title';

interface ICard {
    title: string;
    href: string;
}

export const CardInHeaderDropAuth: FC<PropsWithChildren<ICard>> = ({
    children,
    title,
    href,
}) => {
    const { t } = useTranslation();


    return (
        <Link
            className={style.card}
            href={href}
        >
            {children}
            <Title htmlTagName="h4" title={t(title)} linkSettings={{isLink:false}}></Title>
        </Link>
    );
};

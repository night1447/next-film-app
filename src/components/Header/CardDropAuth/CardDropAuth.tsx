import style from './cardDropAuth.module.scss';
import React, { FC, PropsWithChildren } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Title from '@/components/UI/Title/Title';

interface CardDropProps {
    title: string;
    href: string;
}

export const CardDropAuth: FC<PropsWithChildren<CardDropProps>> = ({ children, title, href }) => {
    const { t } = useTranslation();
    return (
        <Link
            className={style.card}
            href={href}
        >
            {children}
            <Title htmlTagName='h4' title={t(title)} linkSettings={{ isLink: false }} />
        </Link>
    );
};

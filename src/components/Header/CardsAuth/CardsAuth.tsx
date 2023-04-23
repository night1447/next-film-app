import style from './cardsAuth.module.scss';
import React, { FC } from 'react';
import { CardDropAuth } from '@/components/Header/CardDropAuth/CardDropAuth';
import { cardItems } from '@/components/Header/constants';


export const CardsAuth: FC = () => (
    <div className={style.container}>
        {cardItems.map((item) => (
            <CardDropAuth
                key={item.title}
                href={item.href}
                title={item.title}
            >
                <div className={style[item.className]}></div>
            </CardDropAuth>
        ))}
    </div>
);
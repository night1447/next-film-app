import style from './CardsAuth.module.scss';
import React, { FC } from 'react';
import { CardInHeaderDropAuth } from '../CardInHeaderDropAuth/CardInHeaderDropAuth';

export const CardsAuth: FC = () => {
    const items = [
        {
            href: 'https://www.ivi.ru/profile/purchases',
            titel: 'common:header.purchases',
            className: style.purchases,
        },
        {
            href: 'https://www.ivi.ru/profile/favorites',
            titel: 'common:header.watchLater',
            className: style.watch,
        },
        {
            href: 'https://www.ivi.ru/profile/watched',
            titel: 'common:header.browsingHistory',
            className: style.story,
        },
        {
            href: 'https://www.ivi.ru/profile/subscriptions',
            titel: 'common:header.subscriptions',
            className: style.subscriptions,
        },
        {
            href: 'https://www.ivi.ru/profile/watched',
            titel: 'common:header.certificateActivation',
            className: style.certificate,
        },
        {
            href: 'https://www.ivi.ru/profile/purchases',
            titel: 'common:header.loginByCode',
            className: style.entrance,
        },
        {
            href: 'https://www.ivi.ru/profile/cards',
            titel: 'common:header.paymentMethods',
            className: style.payment,
        },
        {
            href: 'https://www.ivi.ru/profile/referral',
            titel: 'common:header.inviteFriends',
            className: style.friends,
        },
    ];

    return (
        <div className={style.container}>
            {items.map((item) => (
                <CardInHeaderDropAuth
                    key={item.titel}
                    href={item.href}
                    titel={item.titel}
                >
                    <div className={item.className}></div>
                </CardInHeaderDropAuth>
            ))}
        </div>
    );
};

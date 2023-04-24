interface CardItem {
    title: string;
    href: string;
    className: string;
}
export const cardItems: CardItem[] = [
    {
        href: 'https://www.ivi.ru/profile/purchases',
        title: 'common:header.purchases',
        className: 'purchases',
    },
    {
        href: 'https://www.ivi.ru/profile/favorites',
        title: 'common:header.watchLater',
        className: 'watch',
    },
    {
        href: 'https://www.ivi.ru/profile/watched',
        title: 'common:header.browsingHistory',
        className: "story",
    },
    {
        href: 'https://www.ivi.ru/profile/subscriptions',
        title: 'common:header.subscriptions',
        className: "subscriptions",
    },
    {
        href: 'https://www.ivi.ru/profile/watched',
        title: 'common:header.certificateActivation',
        className: "certificate",
    },
    {
        href: 'https://www.ivi.ru/profile/purchases',
        title: 'common:header.loginByCode',
        className: "entrance",
    },
    {
        href: 'https://www.ivi.ru/profile/cards',
        title: 'common:header.paymentMethods',
        className: "payment",
    },
    {
        href: 'https://www.ivi.ru/profile/referral',
        title: 'common:header.inviteFriends',
        className: "friends",
    },
];
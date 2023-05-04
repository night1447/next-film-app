import imgSmart from '@/assets/icons/smart_tv_light.svg';
import imgDevices from '@/assets/icons/all_devices_light.svg';

const typesLists = [
    { type: 'movies', className: "movies" },
    { type: 'series', className: "series" },
    { type: 'cartoons', className: "cartoons" },
    { type: 'tv', className: "tv" },
];

const btnsTop = [
    {
        href: 'https://www.ivi.ru/subscribe?from=top_menu&redirect_url=%2Fmovies',
        className: "subscribe",
        text: 'common:mobileMenu.connectSubscription',
    },
    {
        href: 'https://www.ivi.ru/cert',
        className: "certificate",
        text: 'common:mobileMenu.certificateActivation',
    },
];

const btnsAboutUs = [
    {
        href: 'https://www.ivi.ru/pages/tvsmart/',
        className: "smartTV",
        text: 'common:mobileMenu.watchSmartTv',
        img: imgSmart,
    },
    {
        href: 'https://www.ivi.ru/devices',
        className: "allDevices",
        text: 'common:mobileMenu.allDevices',
        img: imgDevices,
    },
];

export {btnsAboutUs, btnsTop, typesLists}
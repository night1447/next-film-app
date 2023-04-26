import style from './MobileMenu.module.scss';
import React, { FC, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Button } from '@/components/UI/Button/Button';
import { useRouter } from 'next/router';

interface Item {
    href?: string;
    text: string;
    className: string;
}

export const MobileMenu: FC = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [stateBtnMore, setStateBtnMore] = useState(false);

    const items: Item[] = [
        { href: '/', text: 'common:mobileMenu.ivi', className: style.ivi },
        {
            href: '/',
            text: 'common:mobileMenu.catalog',
            className: style.catalog,
        },
        { text: 'common:mobileMenu.search', className: style.search },
        {
            href: 'https://www.ivi.ru/tvplus',
            text: 'common:mobileMenu.tv',
            className: style.tv,
        },
        {
            href: '/',
            text: stateBtnMore
                ? 'common:mobileMenu.close'
                : 'common:mobileMenu.more',
            className: stateBtnMore ? style.close : style.more,
        },
    ];

    const getItem = (item: Item) => {
        return (
            <Button
                key={item.text}
                className={style.btn}
                onClick={() => {
                    setStateBtnMore(
                        item.text === 'common:mobileMenu.close' ||
                            item.text === 'common:mobileMenu.more'
                            ? !stateBtnMore
                            : false,
                    );
                }}
                type="button"
                variants="transparent"
                href={item.href}
            >
                <div
                    className={`${style.btnImg} ${
                        router.pathname == item.href ? style.active : ''
                    }`}
                ></div>
                <div className={style.btnText}>
                    <div className={item.className}></div>
                    {t(item.text)}
                </div>
            </Button>
        );
    };

    return (
        <div className={style.container}>
            <Button
                type="button"
                className={style.openAppBtn}
                variants="accent-transparent"
                href="https://ivi.onelink.me/Z1xq/?af_channel=app_forcing_2&c=organic-google&pid=ab_button_to_mobileapp&g_source=organic-google&g_medium=iviru_mobile_web&g_campaign=(organic)&g_term=app_forcing_2&is_retargeting=true&af_adset=(organic)&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.ivi.ru%2F%3Fg_source%3Dorganic-google%26g_medium%3Diviru_mobile_web%26g_campaign%3D(organic)%26g_term%3D%26af_channel%3Dapp_forcing_2%26pid%3Dab_button_to_mobileapp%26g_content%3D&af_dp=ruiviclient%3A%2F%2Findex%2F"
            >
                {t('common:mobileMenu.btnOpenInApp')}
            </Button>
            <div className={style.mobileMenu}>
                <div className={style.btns}>
                    {items.map((item) => getItem(item))}
                </div>
            </div>
        </div>
    );
};

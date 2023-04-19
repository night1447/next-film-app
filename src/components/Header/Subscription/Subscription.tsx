import style from './Subscription.module.scss';
import React, { FC } from 'react';
import { SliderImages } from '../SliderImages/SliderImages';
import Image from 'next/image';
import { Button } from '@/components/UI/Button/Button';
import useTranslation from 'next-translate/useTranslation';

interface ISubscription {
    type: string;
}

export const Subscription: FC<ISubscription> = ({ type }) => {
    const { t } = useTranslation();

    return (
        <div className={style.container}>
            <div className={style.subscription}>
                <SliderImages type={type} className={style.row__one} />
                <SliderImages type={type} className={style.row__two} />
                <SliderImages type={type} className={style.row__three} />
                <div className={style.offer}>
                    <Image
                        src="/favicon.png"
                        alt="icon ivi"
                        width={60}
                        height={60}
                    />
                    <div>
                        <h2>{t('common:header.iviSubscription')}</h2>
                        <p>{t('common:header.price')}</p>
                    </div>
                </div>
                <div className={style.btn__subscribe}>
                    <Button
                        type="button"
                        variants="accent-transparent"
                        href="https://www.ivi.ru/profile/subscription"
                    >
                        {t('common:header.subscribe')}
                    </Button>
                    <p>{t('common:header.disable')}</p>
                </div>
            </div>
            <Button
                type="button"
                variants="gray-opacity"
                href="https://www.ivi.ru/profile/subscription"
            >
                <div></div>
                {t('common:header.watchOnSmartTV')}
            </Button>
        </div>
    );
};

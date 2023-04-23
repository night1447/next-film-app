import style from './subscription.module.scss';
import React, { FC } from 'react';
import { SliderImages } from '../SliderImages/SliderImages';
import Image from 'next/image';
import { Button } from '@/components/UI/Button/Button';
import useTranslation from 'next-translate/useTranslation';
import Title from '@/components/UI/Title/Title';

interface SubscriptionProps {
    type: string;
}

export const Subscription: FC<SubscriptionProps> = ({ type }) => {
    const { t } = useTranslation();

    return (
        <div className={style.container}>
            <div className={style.subscription}>
                <SliderImages type={type} direction="left" />
                <SliderImages type={type} direction="right" />
                <SliderImages type={type} direction="left" />
                <div className={style.offer}>
                    <Image
                        src="/favicon.png"
                        alt="icon ivi"
                        width={60}
                        height={60}
                    />
                    <div>
                        <Title
                            htmlTagName="h3"
                            title={t('common:header.iviSubscription')}
                            linkSettings={{ isLink: false }}
                        />
                        <p>{t('common:header.price')}</p>
                    </div>
                </div>
                <div className={style.button}>
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

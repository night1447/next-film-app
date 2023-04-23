import style from './headerDrop.module.scss';
import React, { FC } from 'react';
import { Subscription } from '../Subscription/Subscription';
import useTranslation from 'next-translate/useTranslation';
import { Button } from '@/components/UI/Button/Button';
import { CardsAuth } from '../CardsAuth/CardsAuth';
import List from '@/components/Header/List/List';
import { IHeaderDrop } from '@/components/Header/types';

interface IHeaderBottom {
    onHover: () => void;
    onEver: () => void;
    type: IHeaderDrop;
}

export const HeaderDrop: FC<IHeaderBottom> = ({ onHover, onEver, type }) => {
    const { t } = useTranslation();
    if (type === 'movies' || type === 'series' || type === 'cartoons') {
        return (
            <div
                className={style.modal}
                onMouseEnter={() => onHover()}
                onMouseLeave={() => onEver()}>
                <List type={type} listType={'genres'} />
                <div className={style.countries}>
                    <List type={type} listType={'countries'} />
                    <List type={type} listType={'years'} />
                </div>
                <List type={type} listType={'selections'} />
                <Subscription type={type} />
            </div>
        );
    }

    if (type === 'tv') {
        return (
            <div
                className={style.modal}
                onMouseEnter={() => onHover()}
                onMouseLeave={() => onEver()}
            >
                <div className={style.TVprog}>
                    <List type={type} listType={'genres'} className={style.tvList} />
                    <Button
                        className={style.tvButton}
                        type='button'
                        variants='gray-opacity'
                        href='https://www.ivi.ru/tvplus/tv-schedule-today'
                    >
                        {t('common:header.TVprogram')}
                    </Button>
                </div>
                <Subscription type={type} />
            </div>
        );
    }

    if (type === 'notifications') {
        return (
            <div
                className={`${style.notifications} ${style.modal}`}
                onMouseEnter={() => onHover()}
                onMouseLeave={() => onEver()}
            >
                <div className={style.notificationIcon}></div>
                <p className={style.notificationParagraph}>{t('common:header.messages')}</p>
            </div>
        );
    }

    return (
        <div
            className={`${style.auth} ${style.modal}`}
            onMouseEnter={() => onHover()}
            onMouseLeave={() => onEver()}
        >
            <CardsAuth />
            <div className={style.authButtons}>
                <Button type='button' variants='accent-transparent'>
                    {t('common:header.enterOrRegister')}
                </Button>
                <div className={style.authShell}>
                    <Button
                        className={style.authButton}

                        type='button'
                        variants='transparent'
                        href='https://www.ivi.ru/profile/settings'
                    >
                        {t('common:header.settings')}
                    </Button>
                    <Button
                        className={style.authButton}
                        type='button'
                        variants='transparent'
                        href='https://ask.ivi.ru/'
                    >
                        {t('common:header.help')}
                    </Button></div>
            </div>
        </div>
    );
};

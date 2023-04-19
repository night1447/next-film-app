import style from './HeaderDrop.module.scss';
import React, { FC } from 'react';
import { ListGenres } from '../ListGenres/ListGenres';
import { ListCountries } from '../ListCountries/ListCountries';
import { ListYears } from '../ListYears/ListYears';
import { ListSelections } from '../ListSelections/ListSelections';
import { Subscription } from '../Subscription/Subscription';
import useTranslation from 'next-translate/useTranslation';
import { Button } from '@/components/UI/Button/Button';
import { CardsAuth } from '../CardsAuth/CardsAuth';

interface IHeaderBottom {
    onHover: () => void;
    onEver: () => void;
    type: string;
}

export const HeaderDrop: FC<IHeaderBottom> = ({ onHover, onEver, type }) => {
    const { t } = useTranslation();
    if (type === 'movies' || type === 'series' || type === 'cartoons') {
        return (
            <div
                className={style.modal}
                onMouseEnter={() => onHover()}
                onMouseLeave={() => onEver()}
            >
                <ListGenres type={type} />
                <div className={style.countries}>
                    <ListCountries type={type} />
                    <ListYears type={type} />
                </div>
                <ListSelections type={type} />
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
                    <ListGenres type={type} />
                    <Button
                        type="button"
                        variants="gray-opacity"
                        href="https://www.ivi.ru/tvplus/tv-schedule-today"
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
                <div></div>
                <p>{t('common:header.messages')}</p>
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
            <div>
                <Button type="button" variants="accent-transparent">
                    {t('common:header.enterOrRegister')}
                </Button>
                <Button
                    type="button"
                    variants="transparent"
                    href="https://www.ivi.ru/profile/settings"
                >
                    {t('common:header.settings')}
                </Button>
                <Button
                    type="button"
                    variants="transparent"
                    href="https://ask.ivi.ru/"
                >
                    {t('common:header.help')}
                </Button>
            </div>
        </div>
    );
};

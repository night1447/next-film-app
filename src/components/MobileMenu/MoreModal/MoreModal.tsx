import React, { ChangeEvent, FC, useState } from 'react';
import Modal from '@/components/UI/Modal/Modal';
import Title from '@/components/UI/Title/Title';
import Input from '@/components/UI/Input/Input';
import { Button } from '@/components/UI/Button/Button';
import styles from './MoreModal.module.scss';
import Variants from '@/components/SearchModal/Variants/Variants';
import ResultList from '@/components/SearchModal/ResultList/ResultList';
import CardList from '@/components/SearchModal/CardList/CardList';
import More from '../More/More';
import { Header } from '@/components/Header/Header';
import DropDownList from '../DropDownList/DropDownList';
import List from '@/components/UI/List/List';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

interface SearchModalProps {
    showMore: boolean;
    onCloseModal?: () => void;
}

const MoreModal: FC<SearchModalProps> = ({ showMore, onCloseModal }) => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');
    const [showResult, setShowResult] = useState('');
    const [focus, setFocus] = useState(false);
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clearValueHandler = () => {
        setValue('');
        setShowResult('');
    };

    const setCurrentValueHandler = (value: string) => {
        setValue(value);
        setShowResult(value);
    };

    const focusHandler = () => {
        setFocus(true);
    };

    function blurHandler() {
        setFocus(false);
    }

    const typesLists = [
        { type: 'movies', className: styles.movies },
        { type: 'series', className: styles.series },
        { type: 'cartoons', className: styles.cartoons },
        { type: 'tv', className: styles.tv },
    ];

    return (
        <More showModal={showMore}>
            <Header />
            <div className={styles.btnsSubscription}>
                <Button
                    className={styles.subscribe}
                    type="button"
                    variants="violet"
                    href="https://www.ivi.ru/subscribe?from=top_menu&redirect_url=%2Fmovies"
                >
                    <div></div>Подключить подписку
                </Button>
                <Button
                    className={styles.certificate}
                    type="button"
                    variants="violet"
                    href="https://www.ivi.ru/cert"
                >
                    <div></div>Активация сертификата
                </Button>
            </div>
            <div className={styles.navigations}>
                <Button
                    className={styles.btn}
                    type="button"
                    href="/"
                    variants="transparent"
                >
                    {t('common:mobileMenu.ivi')}
                </Button>
                <Button
                    className={styles.btn}
                    type="button"
                    href="https://www.ivi.ru/new"
                    variants="transparent"
                >
                    {t('common:mobileMenu.new')}
                </Button>
                {typesLists.map((item) => (
                    <DropDownList
                        className={item.className}
                        key={item.type}
                        type={item.type}
                    />
                ))}
                <Button
                    className={styles.btn}
                    type="button"
                    href="https://www.ivi.ru/goodmovies"
                    variants="transparent"
                >
                    {t('common:mobileMenu.whatToSee')}
                </Button>
            </div>
            <div className={styles.rating}>
                <Button
                    className={styles.btn}
                    type="button"
                    href="https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready"
                    variants="transparent"
                >
                    {t('common:mobileMenu.ratingMovies')}
                </Button>
                <Button
                    className={styles.btn}
                    type="button"
                    href="https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready"
                    variants="transparent"
                >
                    {t('common:mobileMenu.ratingSeries')}
                </Button>
            </div>
            <div className={styles.a}>
                <DropDownList
                    className={styles.aboutUs}
                    key={"aboutUs"}
                    type={"aboutUs"}
                />
            </div>
        </More>
    );
};

export default MoreModal;

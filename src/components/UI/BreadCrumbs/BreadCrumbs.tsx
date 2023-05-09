import React, { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import styles from './BreadCrumbs.module.scss';
import { Button } from '../Button/Button';
import Container from '../Container/Container';
import { getBreadCrumbs } from '@/utils/getBreadCrumbs';

interface IBreadCrumbs {
    type?: 'movies' | 'series' | 'cartoons';
    filters?: { genres?: string[]; years?: string };
    moviePage?: boolean;
}

export const BreadCrumbs: FC<IBreadCrumbs> = ({
    type,
    filters,
    moviePage = false,
}) => {
    const router = useRouter();
    const { t } = useTranslation();
    const stylesForGetBreadCrumbs = {
        location: styles.location,
        btnMoviePage: styles.btnMoviePage,
        boxBtn: styles.boxBtn,
        button: styles.button,
    };

    if (router.pathname.includes('person')) {
        return (
            <Button
                variants="transparent"
                className={styles.back}
                onClick={() => router.back()}
            >
                <div className={styles.arrow} />
                <p>{t('common:back')}</p>
            </Button>
        );
    }

    if (!type) return <></>;

    return (
        <Container
            className={moviePage ? styles.containerMoviePage : styles.container}
        >
            <div className={styles.boxBtn}>
                <Button
                    variants="transparent"
                    className={moviePage ? styles.btnMoviePage : styles.button}
                    href="/"
                >
                    <p>{t('common:header.ivi')}</p>
                </Button>
            </div>
            {getBreadCrumbs(type, moviePage, stylesForGetBreadCrumbs, filters)}
        </Container>
    );
};

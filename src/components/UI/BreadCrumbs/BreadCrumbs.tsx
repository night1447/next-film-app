import React, { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import styles from './Breadcrumbs.module.scss';
import { Button } from '../Button/Button';
import Container from '../Container/Container';
import { getBreadcrumbs } from '@/utils/getBreadcrumbs';
import { useWindowSize } from '@/hooks/useWendowSize';

interface IBreadcrumbs {
    type?: 'movies' | 'series' | 'cartoons';
    filters?: { genres?: string[]; years?: string };
    moviePage?: boolean;
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({
    type,
    filters,
    moviePage = false,
}) => {
    const router = useRouter();
    const { t } = useTranslation();
    const size = useWindowSize();
    const stylesForGetBreadcrumbs = {
        location: styles.location,
        btnMoviePage: styles.btnMoviePage,
        boxBtn: styles.boxBtn,
        button: styles.button,
    };

    if (router.pathname.includes('person') || moviePage && size.width! <= 600) {
        return (
            <Container
                className={
                    moviePage ? styles.containerMoviePage : styles.container
                }
            >
                <Button
                    variants="transparent"
                    className={moviePage ? styles.backMoviePage : styles.back}
                    onClick={() => router.back()}
                >
                    <div className={styles.arrow} />
                    <p>{t('common:back')}</p>
                </Button>
            </Container>
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
            {getBreadcrumbs(type, moviePage, stylesForGetBreadcrumbs, filters)}
        </Container>
    );
};

import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@/components/layout/Layout';
import Container from '@/components/UI/Container/Container';
import styles from './person.module.scss';
import { Button } from '@/components/UI/Button/Button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Meta } from '@/seo/Meta';
import test from './test.json';
import { Person } from './types';
import FilmList from './FilmList/FilmList';

const PersonPage = () => {
    const { lang } = useTranslation();
    const router = useRouter();
    const { id } = router.query; // По айди будем получать информацию о персоне с бека
    const person: Person = test; // Пока для теста использую json

    return (
        <Meta title={lang === 'ru' ? person.name : person.enName}>
            <Layout>
                <Container>
                    <Button
                        variants="transparent"
                        className={styles.button}
                        onClick={() => router.back()}
                    >
                        <div className={styles.arrow} />
                        <p>Назад</p>
                    </Button>
                </Container>
                <Container className={styles.container}>
                    <Image
                        src={person.photo}
                        alt="photo"
                        width={120}
                        height={120}
                        layout="intrinsic"
                        className={styles.image}
                    />
                    <h1 className={styles.head}>
                        {lang === 'ru' ? person.name : person.enName}
                    </h1>
                    <FilmList person={person} />
                </Container>
            </Layout>
        </Meta>
    );
};

export default PersonPage;

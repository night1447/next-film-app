import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/components/layout/Layout';
import Container from '@/components/UI/Container/Container';
import styles from './Person.module.scss';
import { Button } from '@/components/UI/Button/Button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import test from './test.json';
import { Person } from '@/models/PersonType';
import FilmList from './FilmList/FilmList';

const Person = () => {
    const { t, lang } = useTranslation('person');
    const router = useRouter();
    const { id } = router.query; // По айди будем получать информацию о персоне с бека
    const person: Person = test; // Пока для теста использую json
    const name = lang === 'ru' ? person.name : person.enName;
    return (
        <Layout title={name}>
            <Container>
                <Button
                    variants="transparent"
                    className={styles.button}
                    onClick={() => router.back()}
                >
                    <div className={styles.arrow} />
                    <p>{t('back')}</p>
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
                <h1 className={styles.head}>{name}</h1>
                <FilmList person={person} />
            </Container>
        </Layout>
    );
};

export default Person;

import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@/components/layout/Layout';
import Container from '@/components/UI/Container/Container';
import styles from './person.module.scss';
import { Button } from '@/components/UI/Button/Button';
import { useRouter } from 'next/router';
import Image from 'next/image';

const PersonPage = () => {
    const { lang } = useTranslation();
    console.log(lang);
    const [selectedList, setSelectedList] = React.useState('продюсер');
    const router = useRouter();
    const person = {
        id: 37859,
        name: 'Леонардо ДиКаприо',
        enName: 'Leonardo DiCaprio',
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_37859.jpg',
        professions: [
            {
                id: 1,
                name: 'актеры',
                movies: [
                    {
                        id: 1,
                        name: 'Волк с Уолл-стрит',
                        enName: null,
                        type: 'movie',
                        rating: 7.1,
                        year: 2020,
                        poster: 'https://st.kp.yandex.net/images/film_big/462682.jpg',
                    },
                    {
                        id: 1,
                        name: 'Начало',
                        enName: null,
                        type: 'movie',
                        rating: 7.1,
                        year: 2020,
                        poster: 'https://st.kp.yandex.net/images/film_big/447301.jpg',
                    },
                    {
                        id: 1,
                        name: 'Остров проклятых',
                        enName: null,
                        type: 'movie',
                        rating: 7.1,
                        year: 2020,
                        poster: 'https://st.kp.yandex.net/images/film_big/397667.jpg',
                    },
                    {
                        id: 1,
                        name: 'Титаник',
                        enName: null,
                        type: 'movie',
                        rating: 7.1,
                        year: 2020,
                        poster: 'https://st.kp.yandex.net/images/film_big/2213.jpg',
                    },
                    {
                        id: 1,
                        name: 'Поймай меня, если сможешь',
                        enName: null,
                        type: 'movie',
                        rating: 7.1,
                        year: 2020,
                        poster: 'https://st.kp.yandex.net/images/film_big/324.jpg',
                    },
                    {
                        id: 1,
                        name: 'Джанго освобожденный',
                        enName: null,
                        type: 'movie',
                        rating: 7.1,
                        year: 2020,
                        poster: 'https://st.kp.yandex.net/images/film_big/586397.jpg',
                    },
                    {
                        id: 1,
                        name: 'Однажды в… Голливуде',
                        enName: null,
                        type: 'movie',
                        rating: 7.1,
                        year: 2020,
                        poster: 'https://st.kp.yandex.net/images/film_big/1047883.jpg',
                    },
                ],
            },
            {
                id: 7,
                name: 'продюсеры',
                movies: [
                    {
                        id: 1,
                        name: 'Волк с Уолл-стрит',
                        enName: null,
                        type: 'movie',
                        rating: 7.1,
                        year: 2020,
                        poster: 'https://st.kp.yandex.net/images/film_big/462682.jpg',
                    },
                ],
            },
        ],
    };
    const professions = person.professions.map((profession) =>
        profession.name.slice(0, -1),
    );
    const filmLists = ['Все', ...professions];
    interface Movie {
        id: number;
        name: string;
        enName: string | null;
        type: string;
        rating: number;
        year: number;
        poster: string;
    }

    interface Profession {
        id: number;
        name: string;
        movies: Movie[];
    }
    const allMovies: Movie[] = person.professions.reduce(
        (movies: Movie[], profession: Profession) => {
            profession.movies.forEach((movie: Movie) => {
                const movieAlreadyExists = movies.some(
                    (existingMovie: Movie) => existingMovie.name === movie.name,
                );
                if (!movieAlreadyExists) {
                    movies.push(movie);
                }
            });
            return movies;
        },
        [],
    );

    const filteredMovies: Movie[] =
        selectedList === 'Все'
            ? allMovies
            : person.professions.find(
                  (profession) => profession.name.slice(0, -1) === selectedList,
              )?.movies ?? [];

    return (
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
                />
                <h1>{lang === 'ru' ? person.name : person.enName}</h1>
                <h2>Полная фильмография</h2>
                <p>{allMovies.length} фильмов</p>
                <div className={styles.professions}>
                    {filmLists.map((list) => (
                        <Button
                            key={list}
                            variants="transparent"
                            onClick={() => setSelectedList(list)}
                        >
                            {list}
                        </Button>
                    ))}
                </div>
                <div>
                    {filteredMovies.map((movie: Movie) => (
                        <div key={movie.name}>
                            <Image
                                src={movie.poster}
                                alt="photo"
                                width={80}
                                height={80}
                                layout="intrinsic"
                            />
                            <div>
                                <p className={styles.year}>{movie.year}</p>
                                <p className={styles.name}>{movie.name}</p>
                                <p className={styles.rating}>
                                    Рейтинг: {movie.rating}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Layout>
    );
};

export default PersonPage;

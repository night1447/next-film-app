import React, { FC, useEffect } from 'react';
import styles from './FilmList.module.scss';
import { Movie, Person, Profession } from '../types';
import { Button } from '@/components/UI/Button/Button';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import FilmListItem from './FilmListItem/FilmListItem';

interface FilmListProps {
    person: Person;
}

const FilmList: FC<FilmListProps> = ({ person }) => {
    const { lang } = useTranslation();
    const [selectedList, setSelectedList] = React.useState('все');
    const [showAllMovies, setShowAllMovies] = React.useState(false);

    const professions = person.professions.map((profession) =>
        profession.name.slice(0, -1),
    );
    const filmLists = ['все', ...professions];

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

    const filteredMovies =
        selectedList === 'все'
            ? allMovies
            : person.professions.find(
                  (profession) => profession.name.slice(0, -1) === selectedList,
              )?.movies ?? [];

    useEffect(() => {
        setShowAllMovies(false);
    }, [selectedList]);

    const moviesToShow = showAllMovies
        ? filteredMovies
        : filteredMovies.slice(0, 5);

    function declOfNum(number: number, words: [string, string, string]) {
        return words[
            number % 100 > 4 && number % 100 < 20
                ? 2
                : [2, 0, 1, 1, 1, 2][
                      number % 10 < 5 ? Math.abs(number) % 10 : 5
                  ]
        ];
    }

    function declOfNumEn(number: number, words: [string, string]) {
        return words[number > 1 ? 1 : 0];
    }

    return (
        <div className={styles.FilmList}>
            <div className={styles.info}>
                <h1>
                    {lang === 'ru' ? 'Полная фильмография' : 'Full filmography'}
                </h1>
                <p>
                    {allMovies.length} {lang === 'ru' ? 'фильмов' : 'films'}
                </p>
            </div>
            <div className={styles.lists}>
                {filmLists.map((list) => (
                    <Button
                        key={list}
                        variants="transparent"
                        onClick={() => setSelectedList(list)}
                        className={`${styles.listButton} ${
                            list === selectedList ? styles.selected : ''
                        }`}
                    >
                        {list}
                    </Button>
                ))}
            </div>
            <div>
                {moviesToShow.map((movie: Movie) => (
                    <FilmListItem
                        key={movie.id}
                        img={movie.poster}
                        year={movie.year}
                        name={
                            lang === 'ru' || movie.enName === null
                                ? movie.name
                                : movie.enName
                        }
                        rating={movie.rating}
                        href={`/watch/${movie.id}`}
                    />
                ))}
            </div>
            {moviesToShow.length === filteredMovies.length ? (
                ''
            ) : (
                <Button
                    variants="transparent"
                    onClick={() => setShowAllMovies(true)}
                    className={styles.allMovies}
                >
                    {lang === 'ru' ? 'Еще' : 'Also'}{' '}
                    {filteredMovies.length - moviesToShow.length}{' '}
                    {lang === 'ru'
                        ? declOfNum(
                              filteredMovies.length - moviesToShow.length,
                              ['фильм', 'фильма', 'фильмов'],
                          )
                        : declOfNumEn(
                              filteredMovies.length - moviesToShow.length,
                              ['film', 'films'],
                          )}
                </Button>
            )}
        </div>
    );
};

export default FilmList;

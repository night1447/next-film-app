import React, { FC, useEffect } from 'react';
import styles from './FilmList.module.scss';
import { Movie, Person, Profession } from '@/models/PersonType';
import { Button } from '@/components/UI/Button/Button';
import useTranslation from 'next-translate/useTranslation';
import FilmListItem from './FilmListItem/FilmListItem';
import { declOfNum, getTranslateArrayElement } from '@/utils/string';
import { professionsTranslate } from '@/constants/professions';

interface FilmListProps {
    person: Person;
}

const FilmList: FC<FilmListProps> = ({ person }) => {
    const { t, lang } = useTranslation('person');
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

    const words =
        lang === 'ru' ? ['фильм', 'фильма', 'фильмов'] : ['film', 'films'];

    const allCount = allMovies.length;
    const allWord = declOfNum(allCount, words);

    const alsoCount = allMovies.length - 5;
    const alsoWord = declOfNum(alsoCount, words);

    return (
        <div className={styles.FilmList}>
            <div className={styles.info}>
                <h1>{t('fullFilmography')}</h1>
                <p>
                    {allCount} {allWord}
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
                        {lang === 'ru'
                            ? list
                            : getTranslateArrayElement(
                                  list,
                                  professionsTranslate,
                              )}
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
            {alsoCount > 0 && (
                <Button
                    variants="transparent"
                    onClick={() => setShowAllMovies(true)}
                    className={styles.allMovies}
                >
                    {t('also')} {alsoCount} {alsoWord}
                </Button>
            )}
        </div>
    );
};

export default FilmList;

import React, { FC } from 'react';
import styles from './FilmListItem.module.scss';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { Button } from '@/components/UI/Button/Button';
import Link from 'next/link';

interface FilmListItemProps {
    img: string;
    year: number;
    name: string;
    rating: number;
    href: string;
}

const FilmListItem: FC<FilmListItemProps> = ({
    img,
    year,
    name,
    rating,
    href,
}) => {
    const { lang } = useTranslation();

    return (
        <Link href={href} className={styles.FilmListItem}>
            <Image
                src={img}
                alt="photo"
                width={80}
                height={80}
                layout="intrinsic"
                className={styles.image}
            />
            <div className={styles.info}>
                <div>
                    <p className={styles.year}>{year}</p>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.rating}>
                        {lang === 'ru' ? 'Рейтинг' : 'Rating'}: {rating}
                    </p>
                </div>
                <Button variants="violet" className={styles.button}>
                    Подробнее
                </Button>
            </div>
        </Link>
    );
};

export default FilmListItem;

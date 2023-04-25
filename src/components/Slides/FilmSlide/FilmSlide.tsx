import React, { FC } from 'react';
import styles from './film.module.scss';
import { FilmCardMinimize } from '@/models/FilmCardMinimize';
import Image from 'next/image';
import Title from '@/components/UI/Title/Title';
import useTranslation from 'next-translate/useTranslation';
import Actions from '@/components/Slides/FilmSlide/Actions/Actions';
import Feature from '@/components/Slides/FilmSlide/Feature/Feature';

interface FilmSlideProps {
    item: FilmCardMinimize;
    isFullActions: boolean;
}

const getStringDuration = (duration: number, isSeries: boolean) => {
    const suffixSeries: string[] = ['ов', '', 'а'];
    const suffixMinutes: string[] = ['', 'а', 'ы'];
    const word: string = isSeries ? 'сезон' : 'минут';
    const createCorrectWord = (suffix: string[]) => {
        if (duration % 10 === 1 && duration % 100 !== 11) {
            return word + suffix[1];
        }
        if ((duration % 100 >= 5 && duration % 100 <= 20) || (duration % 10 === 0)) {
            return word + suffix[0];
        }
        if (duration % 10 >= 2 && duration % 10 <= 4) {
            return word + suffix[2];
        }
    };
    return `${duration}  ${isSeries ? createCorrectWord(suffixSeries) : createCorrectWord(suffixMinutes)}`;
};

const FilmSlide: FC<FilmSlideProps> = ({ item }) => {
    const { t } = useTranslation();

    const goToHrefHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (!(e.target as HTMLDivElement).closest(`.${styles.actions}`))
            location.href = item.href;
    };

    return (<div className={styles.film} onClick={goToHrefHandler}>
        <div className={styles.imageWrapper}>
            {item.feature ? <Feature feature={item.feature} className={styles.feature} /> : <></>}
            <Image alt={t('common:filmSlide.image')} src={item.urlImg} fill className={styles.img} />
            <div className={styles.ageLimit}>
                {item.limitAge}
            </div>
            <div className={styles.shell}>
                <div className={styles.inner}>
                    <div className={styles.rating}>
                        {item.rating}
                    </div>
                    <div className={styles.best}>{item.bestCharacteristic}</div>
                    <div className={styles.progress}>
                        <span style={{ width: '80%' }}></span>
                    </div>
                    <div className={styles.info}>{item.year}, {item.country},{item.mainGenre}</div>
                    <div className={styles.duration}>{getStringDuration(item.duration, item.isSeries)}</div>
                    <Actions />
                </div>
            </div>
        </div>
        <Title title={item.title} htmlTagName={'h4'} linkSettings={{ isLink: false }} />
        <p className={`${styles.subscribe} ${item.isSubscribe ? styles.subscribe_active : ''}`}>
            {t(`common:filmSlide.subscription.${item.isSubscribe}`)}
        </p>
    </div>);
};

export default FilmSlide;

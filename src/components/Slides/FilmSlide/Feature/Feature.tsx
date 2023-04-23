import React, { FC } from 'react';
import styles from './feature.module.scss';
import { IFilmFeature } from '@/models/FilmCardMinimize';
import useTranslation from 'next-translate/useTranslation';

interface FeatureProps {
    feature: IFilmFeature;
    className?: string;
}

const Feature: FC<FeatureProps> = ({ feature, className }) => {
    const { t } = useTranslation();
    return (
        <div className={`${styles.feature} ${styles[feature]} ${className}`}>
            {t(`common:filmSlide.features.${feature}`)}
        </div>
    );
};

export default Feature;

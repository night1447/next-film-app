import styles from '@/components/Slides/FilmSlide/film.module.scss';
import { filmSlideActions } from '@/components/Slides/FilmSlide/constant';
import React, { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Action from '@/components/Slides/FilmSlide/Actions/Action/Action';

const Actions: FC = () => {
    const { t } = useTranslation();
    return (<ul className={styles.actions}>
        {filmSlideActions.map(action => <Action key={action}
                                                arial={t(`common:filmSlide.actions.${action}`)}
                                                role={action} />)}
    </ul>);
};

export default Actions;
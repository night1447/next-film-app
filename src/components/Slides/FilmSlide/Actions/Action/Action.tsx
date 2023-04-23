import React, { FC } from 'react';
import styles from './action.module.scss';
import { FilmSlideActionType } from '@/components/Slides/FilmSlide/constant';

interface ActionProps {
    arial: string;
    role: FilmSlideActionType;
}

const Action: FC<ActionProps> = ({ role, arial }) => {

    return <li className={`${styles.action} ${styles[role]}`}>
        <div className={styles.arial}>
            {arial}
        </div>
    </li>;
};

export default Action;

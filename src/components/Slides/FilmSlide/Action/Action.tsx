import React, { FC } from 'react';
import styles from './action.module.scss';

interface ActionProps {
    arial: string;
    role: 'favourite' | 'similar' | 'evaluate' | 'dislike';
}

const Action: FC<ActionProps> = ({ role, arial }) => {

    return <li className={`${styles.action} ${styles[role]}`}>
        <div className={styles.arial}>
            {arial}
        </div>
    </li>;
};

export default Action;

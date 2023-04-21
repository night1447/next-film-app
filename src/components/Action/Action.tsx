import React, { FC } from 'react';
import styles from './action.module.scss';

interface ActionProps {
    arial: string;
    iconCode?: string;
    imageUrl?: string;
}

const Action: FC<ActionProps> = ({ iconCode, imageUrl, arial }) => {
    const numberIcon: number = parseInt(iconCode || '', 16);
    const icon = String.fromCharCode(numberIcon);

    return <div className={styles.action} data-icon={icon}>

    </div>;
};

export default Action;

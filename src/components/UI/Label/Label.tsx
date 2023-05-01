import React, { FC, PropsWithChildren } from 'react';
import styles from './label.module.scss';

interface LabelProps {
    htmlFor: string;
    className?: string;
}

const Label: FC<PropsWithChildren<LabelProps>> = ({ children, className }) => (
    <label className={`${styles.label} ${className || ''}`}>
        {children}
    </label>
);

export default Label;

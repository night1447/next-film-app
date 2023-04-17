import React, { FC, PropsWithChildren } from 'react';
import styles from './button.module.scss';
import { ButtonProps } from '@/components/UI/Button/types';

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    className,
    children,
    type,
    onClick,
    isCircle,
    variants,
}) => {
    return (
        <button
            className={`${styles.button} ${styles[variants] || ''} 
            ${className || ''} ${isCircle ? styles.rounded : ''}`}
            type={type || 'button'}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

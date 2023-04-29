import React, { FC, PropsWithChildren } from 'react';
import styles from './button.module.scss';
import { ButtonProps } from '@/components/UI/Button/types';
import Link from 'next/link';

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
                                                               className,
                                                               children,
                                                               type,
                                                               onClick,
                                                               isCircle,
                                                               variants,
                                                               disabled,
                                                               href,
                                                           }) => {
    return href ? (
        <Link
            className={`${styles.button} ${styles[variants] || ''} 
            ${className || ''} ${isCircle ? styles.rounded : ''}`}
            href={href}
            onClick={onClick}
        >
            {children}
        </Link>
    ) : (
        <button
            className={`${styles.button} ${styles[variants] || ''} 
            ${className || ''} ${isCircle ? styles.rounded : ''}`}
            type={type || 'button'}
            onClick={onClick}
            disabled={disabled ? disabled : false}
        >
            {children}
        </button>
    );
};

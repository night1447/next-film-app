import React, { FC, PropsWithChildren } from 'react';
import styles from './input.module.scss';
import Label from '@/components/UI/Label/Label';

interface InputProps {
    title: string;
    htmlFor: string;
    type: string;
    value: string;
    className?: string;
    childrenRotation?: 'left' | 'right';
    onFocus?: () => void;
    onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<PropsWithChildren<InputProps>> = ({
                                                      htmlFor,
                                                      children,
                                                      type,
                                                      value,
                                                      title,
                                                      onInput,
                                                      onBlur,
                                                      onFocus,
                                                      onChange,
                                                      childrenRotation,
                                                      className,
                                                  }) => (
    <Label htmlFor={htmlFor} className={`${styles.label} ${className || ''}`}>
        <input type={type}
               id={htmlFor}
               value={value}
               className={`${styles.input} ${childrenRotation === 'right' ? styles.input_bias : ''}`}
               onInput={onInput}
               onBlur={onBlur}
               onFocus={onFocus}
               onChange={onChange}
        />
        <span
            className={`${styles.title} ${value ? styles.title_active : ''} ${childrenRotation ? styles.title_bias : ''}`}>{title}</span>

        {children}
    </Label>

);

export default Input;

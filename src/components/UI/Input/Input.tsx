import React, { FC, PropsWithChildren } from 'react';
import styles from './input.module.scss';
import Label from '@/components/UI/Label/Label';

interface InputProps {
    title: string;
    htmlFor: string;
    type: string;
    value: string;
    className?: string;
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
                                                      onChange,
                                                      className,
                                                  }) => (
    <Label htmlFor={htmlFor} className={className || ''}>
        <input type={type}
               id={htmlFor}
               value={value}
               className={styles.input}
               onInput={onInput}
               onBlur={onBlur}
               onChange={onChange}
        />
        <span className={styles.title}>{title}</span>
        {children}
    </Label>

);

export default Input;

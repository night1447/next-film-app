import React, { FC } from 'react';
import Title from '@/components/UI/Title/Title';
import styles from './message.module.scss';

interface MessageProps {
    isActive: boolean;
    title: string;
    message?: string;
    className?: string;
    rotation: 'left' | 'right';
}

const Message: FC<MessageProps> = ({ isActive, message, className, title, rotation }) => {
    return <div className={`${styles.block} ${styles[rotation]} ${className || ''}`}>
        <Title title={title} linkSettings={{ isLink: false }} htmlTagName={'h4'} />
        {
            isActive && message ? <p className={styles.message}>{message}</p> : <></>
        }
    </div>;
};

export default Message;

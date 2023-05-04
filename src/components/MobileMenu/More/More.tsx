import React, { FC, PropsWithChildren } from 'react';
import Portal from '@/components/UI/Portal/Portal';
import styles from './More.module.scss';
import useTranslation from 'next-translate/useTranslation';

interface ModalProps {
    className?: string;
    showModal: boolean;
}

const More: FC<PropsWithChildren<ModalProps>> = ({ children, className, showModal }) => {
    const { t } = useTranslation();
    if (!showModal) {
        return <></>;
    }
    return <Portal id={'modal'}>
        <div className={`${styles.modal} ${className || ''}`}>
            {children}
        </div>
        <div className={styles.backdrop}></div>
    </Portal>;
};

export default More;

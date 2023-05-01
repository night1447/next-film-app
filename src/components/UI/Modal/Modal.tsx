import React, { FC, PropsWithChildren } from 'react';
import Portal from '@/components/UI/Portal/Portal';
import styles from './modal.module.scss';
import { SrOnly } from '@/components/UI/SrOnly/SrOnly';
import useTranslation from 'next-translate/useTranslation';

interface ModalProps {
    className?: string;
    onCLose: () => void;
    showModal: boolean;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, className, onCLose, showModal }) => {
    const { t } = useTranslation();
    if (!showModal) {
        return <></>;
    }
    return <Portal id={'modal'}>
        <div className={`${styles.modal} ${className || ''}`}>
            {children}
            <button type={'button'} onClick={onCLose} className={styles.close}>
                <SrOnly title={t('common:modal.closeModal')} />
            </button>
        </div>
        <div className={styles.backdrop}></div>
    </Portal>;
};

export default Modal;

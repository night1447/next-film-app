import React, { FC, PropsWithChildren, useState } from 'react';
import styles from './description.module.scss';
import { Button } from '@/components/UI/Button/Button';
import { AnimatePresence, motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

interface DescriptionProps {
    displayDescription: string;
    className?: string;
}

const Description: FC<PropsWithChildren<DescriptionProps>> = ({ children, displayDescription, className }) => {
    const [showDescription, setShowDescription] = useState(false);
    const { t } = useTranslation();
    const toggleDescriptionHandler = () => {
        setShowDescription(prevState => !prevState);
    };

    return <div>
        <p className={`${styles.displayDescription} ${showDescription ? styles.active : ''} ${className || ''}`}>
            {displayDescription}
        </p>
        <AnimatePresence mode={'wait'}>
            {showDescription ? <motion.div
                initial={{ height: '0' }}
                animate={{ height: 'max-content' }}
                exit={{ height: '0' }}
                className={`${styles.description}`}>
                {children}
            </motion.div> : <></>}
        </AnimatePresence>

        <Button variants={'transparent'}
                className={styles.button}
                onClick={toggleDescriptionHandler}>{showDescription ? t('common:description.close') : t('common:description.open')}</Button>
    </div>;
};

export default Description;

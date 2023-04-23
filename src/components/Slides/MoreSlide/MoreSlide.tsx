import React, { FC } from 'react';
import { Button } from '@/components/UI/Button/Button';
import styles from './slide.module.scss';
import useTranslation from 'next-translate/useTranslation';

interface MoreSlideProps {
    href: string;
}

const MoreSlide: FC<MoreSlideProps> = ({ href }) => {
    const { t } = useTranslation();
    return (
        <div className={styles.slide}>
            <Button variants={'violet'} className={styles.button}
                    href={href}>{t('common:filmSlide.moreSlideText')}
            </Button>
        </div>
    );
};

export default MoreSlide;

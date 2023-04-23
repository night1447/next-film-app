import React, { FC } from 'react';
import Section from '@/components/UI/Section/Section';
import { FirstSwiper } from '@/components/Swiper';
import Container from '@/components/UI/Container/Container';
import { Button } from '@/components/UI/Button/Button';
import styles from './FirstScreen.module.scss';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

interface FirstScreenProps {
}

const FirstScreen: FC<FirstScreenProps> = () => {
    const { t } = useTranslation();
    return (<Section>
        <FirstSwiper className={styles.swiper} />
        <Container>
            <Button variants={'violet'} className={styles.button}>
                <Image src={'/bg-button.svg'} fill alt={t('index:altForBgButton')} />
                <Image src={'/lightning.svg'} alt={t('index:decoration')} width={30} height={30} />
                {t('index:watchFree')}
            </Button>
        </Container>
    </Section>);
};

export default FirstScreen;

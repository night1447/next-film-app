import React, { FC } from 'react';
import Section from '@/components/UI/Section/Section';
import { FirstSwiper } from '@/components/Swiper';
import Container from '@/components/UI/Container/Container';
import { Button } from '@/components/UI/Button/Button';
import styles from './FirstScreen.module.scss';
import Image from 'next/image';

interface FirstScreenProps {
}

const FirstScreen: FC<FirstScreenProps> = () => (
    <Section>
        <FirstSwiper className={styles.swiper} />
        <Container>
            <Button variants={'violet'} className={styles.button}>
                <Image src={'/bg-button.svg'} fill alt={'задний фон кнопки'}/>
                <Image src={'/lightning.svg'} alt={'молния-декорация'} width={30} height={30}/> Смотреть 30 дней бесплатно
            </Button>
        </Container>
    </Section>
);

export default FirstScreen;

import React, { FC } from 'react';
import styles from './interactiveBlock.module.scss';
import { FilmCardMinimize } from '@/models/FilmCardMinimize';
import Section from '@/components/UI/Section/Section';
import Title from '@/components/UI/Title/Title';
import { CardSwiper, LinkSwiper } from '@/components/Swiper';
import Container from '@/components/UI/Container/Container';
import { InteractiveType } from '@/models/InteractiveType';

type InteractiveBlockType = InteractiveType | FilmCardMinimize;

interface InteractiveBlockProps {
    isCards: boolean;
    title: string;
    href?: string;
    info: InteractiveBlockType[];
}

const InteractiveBlock: FC<InteractiveBlockProps> = ({ title, href, isCards, info }) => (
    <Section className={styles.interactiveBlock} hasContainer={false}>
        <Container swiperContainer={true}>
            <Title title={title} htmlTagName={'h2'}
                   linkSettings={{
                       isLink: !!href,
                       path: href,
                       isWholeTitle: true,
                       decorating: href ? 'arrow' : false,
                   }} className={styles.title} />
            {isCards ? <CardSwiper info={info as FilmCardMinimize[]} /> :
                <LinkSwiper info={info as InteractiveType[]} />}
        </Container>
    </Section>
);

export default InteractiveBlock;

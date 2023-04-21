import React, { FC, PropsWithChildren } from 'react';
import styles from './Section.module.scss';
import Container from '@/components/UI/Container/Container';

interface SectionProps {
    className?: string;
    hasContainer?: boolean;
}

const Section: FC<PropsWithChildren<SectionProps>> = (
    { children, className, hasContainer }) => (
    <section className={`${styles.section} ${className || ''}`}>
        {hasContainer ? <Container>
            {children}
        </Container> : children}
    </section>
);

export default Section;

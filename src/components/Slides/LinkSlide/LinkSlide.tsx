import React, { FC } from 'react';
import styles from './linkSlide.module.scss';
import { InteractiveType } from '@/components/Screens/InteractiveBlock/InteractiveType';
import Title from '@/components/UI/Title/Title';
import Image from 'next/image';
import Link from 'next/link';
import { SrOnly } from '@/components/UI/SrOnly/SrOnly';

interface LinkSlidesProps {
    info: InteractiveType;
}

const LinkSlide: FC<LinkSlidesProps> = ({ info }) => (
    <div className={styles.slide}>
        <Image alt={'изображение'} src={info.urlImg} width={137} height={300} className={styles.img} />
        <Title title={info.title} htmlTagName={'h4'} className={styles.title} linkSettings={{ isLink: false }} />
        <Link href={info.href} className={styles.link}>
            <SrOnly title={info.title} />
        </Link>
    </div>
);

export default LinkSlide;

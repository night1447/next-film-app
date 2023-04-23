import React, { FC } from 'react';
import styles from './description.module.scss';
import Title from '@/components/UI/Title/Title';
import Description from '@/components/Description/Description';
import Section from '@/components/UI/Section/Section';
import useTranslation from 'next-translate/useTranslation';

interface DescriptionBlockProps {
}

const FirstDescriptionBlock: FC<DescriptionBlockProps> = () => {
    const { t } = useTranslation('index');
    return (
        <Section hasContainer={true}>
            <div className={styles.wrapper}>
                <Title htmlTagName={'h3'}
                       className={styles.title}
                       title={t('description.title')}
                       linkSettings={{ isLink: false }} />
                <Description
                    className={styles.paragraph}
                    displayDescription={t('description.displayDescription')}>
                    <p className={styles.paragraph}>
                        {t('description.paragraph')}
                    </p>
                    <p className={styles.paragraph}>{t('description.secondTitle')}</p>
                    <ul className={styles.list}>
                        {new Array(7).fill(0).map((value, index) =>
                            <li key={index} className={styles.paragraph}>
                                {t(`description.featureList.${index}`)}
                            </li>)}
                    </ul>
                    <p className={styles.paragraph}>{t('description.secondParagraph')}</p>
                </Description>
            </div>
        </Section>
    );
};

export default FirstDescriptionBlock;

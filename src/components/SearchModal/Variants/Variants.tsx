import React, { FC } from 'react';
import styles from './variants.module.scss';

interface VariantsProps {
    onClick: (value: string) => void;
}

const variants: string[] = ['Премьеры фильмов', 'Новинки подписки', 'Высокий рейтинг'];
const Variants: FC<VariantsProps> = ({ onClick }) => {
    const choiceVariantHandler = (value: string) => {
        onClick(value);
    };

    return <ul className={styles.variants}>
        {variants.map(variant => <li
            key={variant}
            className={styles.variant}
            onClick={() => choiceVariantHandler(variant)}>
            {variant}
        </li>)}
    </ul>;
};

export default Variants;

import { FC } from 'react';
import styles from './robot.module.scss';

type SrOnlyProps = {
    title: string,
};
export const SrOnly: FC<SrOnlyProps> = ({ title }) => {
    return (
        <span className={styles.srOnly}>
            {title}
        </span>
    );
};
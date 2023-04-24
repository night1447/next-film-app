import React, { FC } from 'react';
import styles from './result.module.scss';

interface ResultListProps {
}

const ResultList: FC<ResultListProps> = () => {

    return <div className={styles.ResultList}>
        ResultList Component
    </div>;
};

export default ResultList;

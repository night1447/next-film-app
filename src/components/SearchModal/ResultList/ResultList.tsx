import React, { FC, useEffect, useState } from 'react';
import styles from './result.module.scss';
import { IResultItem } from '@/components/SearchModal/types';
import ResultItem from '@/components/SearchModal/ResultList/ResultItem';

interface ResultListProps {
    value: string;
    onClick: (value: string) => void;
}

const initialState: IResultItem[] = [
    {
        type: 'film',
        title: 'force',
        addingInfo: 'pretense',
        href: '/',
    }, {
        type: 'person',
        title: 'person',
        addingInfo: 'hello',
        href: '/',
    }, {
        type: 'serial',
        title: 'serial',
        addingInfo: 'doctor',
        href: '/',
    }, {
        type: 'category',
        title: 'category',
    },
];
const ResultList: FC<ResultListProps> = ({ value, onClick }) => {
    const [list, setList] = useState<IResultItem[]>(initialState);
    useEffect(() => {
    }, [value]);

    const showListHandler = (item: IResultItem) => {
        if (item.type === 'category') {
            console.log(item.title);
            onClick(item.title);
        }
    };

    return <ul className={styles.list}>
        {list.map(item => <ResultItem key={item.title} onClick={() => showListHandler(item)} item={item} />)}
    </ul>;
};

export default ResultList;

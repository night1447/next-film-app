import React, { ChangeEvent, FC, useState } from 'react';
import Modal from '@/components/UI/Modal/Modal';
import Title from '@/components/UI/Title/Title';
import Input from '@/components/UI/Input/Input';
import { Button } from '@/components/UI/Button/Button';
import styles from './searchModal.module.scss';
import Variants from '@/components/SearchModal/Variants/Variants';
import ResultList from '@/components/SearchModal/ResultList/ResultList';
import CardList from '@/components/SearchModal/CardList/CardList';

interface SearchModalProps {
    showSearch: boolean;
    onCloseModal: () => void;
}

const SearchModal: FC<SearchModalProps> = ({ showSearch, onCloseModal }) => {
    const [value, setValue] = useState('');
    const [showResult, setShowResult] = useState('');
    const [focus, setFocus] = useState(false);
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clearValueHandler = () => {
        setValue('');
        setShowResult('');
    };

    const setCurrentValueHandler = (value: string) => {
        setValue(value);
        setShowResult(value);
    };


    const focusHandler = () => {
        setFocus(true);
    };

    function blurHandler() {
        setFocus(false);
    }

    return <Modal showModal={showSearch} onCLose={onCloseModal}>
        <div className={styles.wrapper}>
            <Title title={'Поиск'} htmlTagName={'h1'}
                   className={styles.title}
                   linkSettings={{ isLink: false }} />
            <Input htmlFor={'search'}
                   title={'Фильмы, персоны, жанры'}
                   onInput={inputChangeHandler}
                   type={'text'}
                   onBlur={blurHandler}
                   onFocus={focusHandler}
                   className={`${styles.search} ${value ? styles.active : ''}`}
                   value={value}>
                {value ?
                    <Button type={'button'}
                            variants={'transparent'}
                            className={`${styles.button} ${styles.closeButton}`}
                            onClick={clearValueHandler} /> :
                    <Button type={'button'} variants={'transparent'}
                            className={`${styles.button} ${styles.searchButton}`} />
                }
            </Input>
            {focus ? <></> : value ? <></> : <Variants onClick={setCurrentValueHandler} />}
            {value && !showResult ? <ResultList value={value} onClick={setCurrentValueHandler} /> : <></>}
            {showResult && value ? <CardList value={value} /> : <></>}
        </div>
    </Modal>;
};

export default SearchModal;

import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import Modal from '@/components/UI/Modal/Modal';
import Title from '@/components/UI/Title/Title';
import Input from '@/components/UI/Input/Input';
import { Button } from '@/components/UI/Button/Button';
import styles from './searchModal.module.scss';
import Variants from '@/components/SearchModal/Variants/Variants';

interface SearchModalProps {
    showSearch: boolean;
    onCloseModal: () => void;
}

const SearchModal: FC<SearchModalProps> = ({ showSearch, onCloseModal }) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        console.log('query');
    }, [value]);
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clearValueHandler = () => {
        setValue('');
    };

    const setCurrentValueHandler = (value: string) => {
        setValue(value);
    };

    return <Modal showModal={showSearch} onCLose={onCloseModal}>
        <div className={styles.wrapper}>
            <Title title={'Поиск'} htmlTagName={'h1'}
                   className={styles.title}
                   linkSettings={{ isLink: false }} />
            <Input htmlFor={'search'}
                   title={'Фильмы, персоны, жанры'}
                   onInput={inputChangeHandler}
                   type={'text'}
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
            {value ? <></> : <Variants onClick={setCurrentValueHandler} />
            }
        </div>
    </Modal>;
};

export default SearchModal;

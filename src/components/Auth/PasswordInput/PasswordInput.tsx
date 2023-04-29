import React, { FC, useCallback, useState } from 'react';
import styles from './password.module.scss';
import Input from '@/components/UI/Input/Input';
import { Button } from '@/components/UI/Button/Button';

interface PasswordInputProps {
    setPassword: (value: string) => void,
    password: string;
    title: string;
    validateFunction: (value: string) => boolean;
    errorMessage: string;
    htmlFor: string;
}

const PasswordInput: FC<PasswordInputProps> = ({
                                                   password,
                                                   title,
                                                   htmlFor,
                                                   validateFunction,
                                                   errorMessage,
                                                   setPassword,
                                               }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const changeShowPasswordHandler = useCallback(() => {
        setShowPassword(prevState => !prevState);
    }, []);


    const validateFieldHandler = useCallback(() => {
        setTimeout(() => {
            if (validateFunction(password)) {
                setIsValid(true);
            } else {
                setIsValid(false);
            }
        }, 1000);
    }, [password, validateFunction]);

    return <div className={styles.password}>
        <Input title={title}
               type={showPassword ? 'text' : 'password'}
               value={password}
               htmlFor={htmlFor}
               onBlur={validateFieldHandler}
               className={`${styles.input} ${isValid ? '' : styles.invalid}`}
               onInput={(e) => setPassword(e.target.value)}>
            <Button variants={'transparent'} type={'button'} onClick={changeShowPasswordHandler}>
                <span className={`${styles.icon} ${showPassword ? styles.show : ''}`}></span>
            </Button>
        </Input>
        <div className={`${styles.error} ${isValid ? '' : styles.show}`}>{errorMessage}</div>
    </div>;
};

export default PasswordInput;

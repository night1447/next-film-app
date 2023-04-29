import React, { FC, useCallback, useState } from 'react';
import Message from '@/components/Auth/Message/Message';
import PasswordInput from '@/components/Auth/PasswordInput/PasswordInput';
import { Button } from '@/components/UI/Button/Button';
import styles from './registration.module.scss';
import { AuthProps } from '@/components/Auth/AuthForm/AuthForm';
import LoadingIcon from '@/components/UI/LoadingIcon/LoadingIcon';


const validatePassword = (value: string) => value.length >= 6;

const validateConfirmPassword = (password: string, confirmPassword: string) => confirmPassword === password;

const Registration: FC<AuthProps> = ({ stage, password, changePassword, loading }) => {
    const [showEndPart, setShowEndPart] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const showEndPartHandler = useCallback(() => {
        if (validatePassword(password)) {
            setShowEndPart(true);
        }
    }, [password]);

    return <>
        <Message isActive={stage === 'registration'}
                 title={'Придумайте пароль для входа'}
                 rotation={'left'}
                 message={'Установите пароль для входа через email, минимум 6 символов'} />
        {stage !== 'complete' ? <>
                <PasswordInput setPassword={changePassword}
                               password={password}
                               validateFunction={validatePassword}
                               errorMessage={'Длина пароля должна быть минимум 6 символов'}
                               title={'Придумайте пароль'}
                               htmlFor={'password'} />
                {showEndPart ? <PasswordInput
                    validateFunction={(value) => validateConfirmPassword(password, confirmPassword)}
                    setPassword={setConfirmPassword}
                    password={confirmPassword}
                    title={'Повторите пароль'}
                    errorMessage={'Пароли не совпадают'}
                    htmlFor={'confirm-password'} /> : <></>}
                {showEndPart ?
                    <Button variants={'accent'}
                            onClick={showEndPartHandler}
                            type={'submit'}
                            disabled={!(validateConfirmPassword(password, confirmPassword) && validatePassword(password))}
                            className={styles.button}>{
                        loading ? <LoadingIcon /> : 'Зарегистрироваться'
                    }</Button>
                    : <Button variants={'accent'}
                              onClick={showEndPartHandler}
                              disabled={!validatePassword(password)}
                              className={styles.button}>
                        Продолжить
                    </Button>}
            </>
            : <></>}
    </>;
};

export default Registration;
;
;
;

import React, { FC, useCallback, useState } from 'react';
import { IStage } from '@/components/Auth/Auth';
import styles from './password.module.scss';
import Message from '@/components/Auth/Message/Message';
import PasswordInput from '@/components/PasswordInput/PasswordInput';
import { Button } from '@/components/UI/Button/Button';
import Image from 'next/image';

interface PasswordProps {
    stage: IStage;
    onChangeState: (stage: IStage) => void;
    password: string;
    setPassword: (value: string) => void;
}

type IAction = 'loading' | 'confirm' | '';
const checkRegisterPassword = (value: string) => value.length >= 6;
const checkPasswordMatch = (password: string, confirmPassword: string) => password === confirmPassword;
const PasswordBlock: FC<PasswordProps> = ({ setPassword, stage, password, onChangeState }) => {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [action, setAction] = useState<IAction>('');
    const [passwordValid, setPasswordValid] = useState(true);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

    const title: string = stage === 'registration' ? 'Придумайте пароль для входа' : 'Введите пароль, чтобы войти';
    const titlePassword: string = stage === 'registration' ? 'Придумайте пароль' : 'Введите пароль';
    const titleConfirmPassword: string = 'Повторите пароль';
    const description: string = stage === 'registration' ? 'Установите пароль для входа через email, минимум 6 символов' : '';
    const buttonText: string = stage === 'registration' ? 'Зарегистрироваться' : 'Войти';

    const validationHandler = useCallback(() => {
        setTimeout(() => {
            setPasswordValid(checkRegisterPassword(password));
        }, 1000);

    }, [password]);

    const authHandler = useCallback(() => {
        if (stage === 'registration') {
            if (checkRegisterPassword(password)) {
                setAction('confirm');
            }
            if (checkPasswordMatch(password, confirmPassword)) {
                setAction('loading');
            }
        } else {
            setAction('loading');
        }
    }, [stage, password]);
    const confirmValidationHandler = () => {
        setTimeout(() => {
            if (checkPasswordMatch(password, confirmPassword)) {
                setConfirmPasswordValid(true);
            } else {
                setConfirmPasswordValid(false);
            }
        }, 1000);
    };

    return <div className={styles.password}>
        <Message rotation={'left'} title={title} message={description}
                 isActive={stage === 'registration' || stage === 'login'} />

        <PasswordInput
            htmlFor={'password'}
            setPassword={setPassword}
            password={password}
            valid={stage === 'registration' ? passwordValid : true}
            onBlur={validationHandler}
            title={titlePassword} />

        {action === 'confirm' ?
            <PasswordInput
                htmlFor={'confirm-password'}
                setPassword={setConfirmPassword}
                password={confirmPassword}
                valid={confirmPasswordValid}
                onBlur={confirmValidationHandler}
                title={titleConfirmPassword} />
            : <></>}

        {stage === 'login' || confirmPasswordValid ?
            <Button variants={'accent'}
                    disabled={!(passwordValid && password) && confirmPasswordValid}
                    onClick={authHandler}
                    type={'submit'}
                    className={styles.button}>
                {action === 'loading' ?
                    <Image alt={'loading'} src={'./loading.svg'} width={30} height={30} /> : buttonText}
            </Button> :
            <Button variants={'accent'}
                    disabled={!(passwordValid && password)}
                    onClick={authHandler}
                    type={'button'}
                    className={styles.button}>
                Продолжить
            </Button>}
    </div>;
};

export default PasswordBlock;
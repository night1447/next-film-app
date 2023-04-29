import React, { FC } from 'react';
import Message from '@/components/Auth/Message/Message';
import { AuthProps } from '@/components/Auth/AuthForm/AuthForm';
import PasswordInput from '@/components/Auth/PasswordInput/PasswordInput';
import { Button } from '@/components/UI/Button/Button';
import styles from '@/components/Auth/Registration/registration.module.scss';
import LoadingIcon from '@/components/UI/LoadingIcon/LoadingIcon';


const validateLoginPassword = (value: string) => value.length > 0;

const Login: FC<AuthProps> = ({ stage, password, changePassword, loading }) => {

    return <>
        <Message isActive={stage === 'registration'}
                 title={'Введите пароль, чтобы войти'}
                 rotation={'left'} />
        {stage !== 'complete' ? <>
                <PasswordInput password={password}
                               setPassword={changePassword}
                               htmlFor={'login-password'}
                               errorMessage={''}
                               validateFunction={validateLoginPassword} title={'Введите пароль'} />
                <Button variants={'accent'}
                        type={'submit'}
                        disabled={!validateLoginPassword(password)}
                        className={styles.button}>
                    {
                        loading ? <LoadingIcon /> : 'Зарегистрироваться'
                    }
                </Button>
            </> :
            <></>}
    </>;
};

export default Login;
;

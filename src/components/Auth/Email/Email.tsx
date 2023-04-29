import React, { ChangeEvent, FC, useCallback } from 'react';
import styles from './Email.module.scss';
import Input from '@/components/UI/Input/Input';
import { Button } from '@/components/UI/Button/Button';
import { IStage, IStageUser } from '@/components/Auth/Auth';

interface EmailProps {
    email: string;
    setEmail: (value: string) => void;
    onChangeStage: (value: IStage) => void;
    setUser: (user: IStageUser) => void;
}

const Email: FC<EmailProps> = ({ email, setEmail, setUser, onChangeStage }) => {
    const changeEmailHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, [setEmail]);

    const changeStageHandler = useCallback(() => {
        const user = { maik: 'asdas' }; // get user in database
        if (email) {
            if (Object.keys(user).length === 0) {
                onChangeStage('registration');
                setUser('new');
            } else {
                onChangeStage('login');
                setUser('old');
            }
        }
    }, [email, onChangeStage, setUser]);

    return (
        <>
            <Input htmlFor={'email'}
                   className={styles.input}
                   title={'Почта или телефон'}
                   type={'text'}
                   value={email}
                   childrenRotation={'right'}
                   onInput={changeEmailHandler}>
                <span className={styles.icon}></span>
            </Input>
            <Button variants={'accent'}
                    onClick={changeStageHandler}
                    className={styles.button}
                    disabled={!email}
                    type={'button'}>
                Продолжить
            </Button>
        </>
    );
};

export default Email;

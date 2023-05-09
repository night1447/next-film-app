import React, { FC, FormEvent, useCallback, useState } from 'react';
import { Button } from '@/components/UI/Button/Button';
import styles from './form.module.scss';
import { IStage, IStageUser } from '@/components/Auth/Auth';
import Message from '@/components/Auth/Message/Message';
import Email from '@/components/Auth/Email/Email';
import Login from '@/components/Auth/Login/Login';
import Registration from '@/components/Auth/Registration/Registration';
import { useAppDispatch, useTypedSelector } from '@/store';
import { loginUser } from '@/store/reducers/auth/actions';

interface AuthFormProps {
    stage: IStage;
    onChangeStage: (stage: IStage) => void;
    email: string;
    setEmail: (value: string) => void;
    setUser: (user: IStageUser) => void;
}

export interface AuthProps {
    stage: IStage;
    loading: boolean;
    password: string;
    changePassword: (value: string) => void;
}

const AuthForm: FC<AuthFormProps> = ({ stage, setEmail, email, onChangeStage, setUser }) => {

    const [password, setPassword] = useState('');
    const [isAuth, setIsAuth] = useState(false);
    const loading = useTypedSelector(state => state.auth.authData.isLoading);
    const dispatch = useAppDispatch();
    const changePasswordHandler = useCallback((value: string) => {
        setPassword(value);
    }, []);

    const returnToBeginHandler = useCallback(() => {
        onChangeStage('begin');
        setUser('');
    }, [onChangeStage, setUser]);

    const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };
    return <form className={styles.form} onSubmit={submitFormHandler}>
        <Message isActive={stage === 'begin'}
                 rotation={'left'}
                 title={'Войдите или зарегистрируйтесь'}
                 message={'чтобы пользоваться сервисом на любом устройстве'} />
        {stage === 'begin' ?
            <Email email={email}
                   setEmail={setEmail}
                   setUser={setUser}
                   onChangeStage={onChangeStage} />
            :
            <div className={styles.right}>
                <Button variants={'border'} isCircle={true} onClick={returnToBeginHandler}>
                    <span className={`${styles.icon} ${styles.editIcon}`}></span>
                </Button>
                <Message isActive={false} title={email} rotation={'right'} />
            </div>
        }
        {stage !== 'begin' ?
            stage === 'login' ? <Login stage={stage}
                                       loading={loading}
                                       password={password}
                                       changePassword={changePasswordHandler} /> :
                <Registration stage={stage}
                              loading={loading}
                              password={password}
                              changePassword={changePasswordHandler} />
            : <></>
        }
        {stage === 'complete' ? <>
            <div className={styles.edit}><Message isActive={false} title={'********'} rotation={'right'} /></div>
            <Message isActive={false} title={'Вы успешно вошли/зарегистрировались!'} className={styles.success}
                     rotation={'left'} />
        </> : <></>}
    </form>;
};

export default AuthForm;

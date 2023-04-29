import React, { FC, useState } from 'react';
import Modal from '@/components/UI/Modal/Modal';
import AuthForm from '@/components/Auth/AuthForm/AuthForm';
import StageStatus from '@/components/Auth/StageStatus/StageStatus';
import styles from './auth.module.scss';

interface AuthProps {
    showModal: boolean;
    onClose: () => void;
}

export type IStage = 'begin' | 'registration' | 'login' | 'complete';

export type IStageUser = 'new' | 'old' | '';

const Auth: FC<AuthProps> = ({ showModal, onClose }) => {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState<IStageUser>('');
    const [stage, setStage] = useState<IStage>('begin');
    const closeModalHandler = () => {
        onClose();
    };

    const changeStateHandler = (stage: IStage) => {
        setStage(stage);
    };

    const changeEmailHandler = (value: string) => {
        setEmail(value);
    };

    const changeUserHandler = (user: IStageUser) => {
        setUser(user);
    };

    return <Modal showModal={showModal} onCLose={closeModalHandler} className={`${styles.close} ${styles.modal}`}>
        <StageStatus stage={stage} email={email} user={user} />
        <AuthForm stage={stage}
                  email={email}
                  setUser={changeUserHandler}
                  setEmail={changeEmailHandler}
                  onChangeStage={changeStateHandler} />
    </Modal>;
};

export default Auth;

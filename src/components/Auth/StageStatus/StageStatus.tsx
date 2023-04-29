import React, { FC } from 'react';
import styles from './status.module.scss';
import { IStage, IStageUser } from '@/components/Auth/Auth';
import Title from '@/components/UI/Title/Title';

interface StageStatusProps {
    stage: IStage;
    email: string;
    user: IStageUser;
}

const getTitle = (user: IStageUser): string => {
    if (user === 'new') {
        return 'Новый пользователь';
    }
    if (user === 'old') {
        return 'Здравствуйте';
    }
    return 'Вход или регистрация';
};

const StageStatus: FC<StageStatusProps> = ({ stage, user, email }) => {
    return <div className={styles.stage}>
        <div className={styles.info}>
            <Title title={getTitle(user)}
                   htmlTagName={'h4'}
                   linkSettings={{ isLink: false }} />
            <p className={styles.email}>
                {stage !== 'begin' ? email : ''}
            </p>
        </div>
        <div className={`${styles.status} ${styles[stage] || ''}`}></div>
    </div>;
};

export default StageStatus;

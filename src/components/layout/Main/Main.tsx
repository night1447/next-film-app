import React, { FC, PropsWithChildren } from 'react';
import styles from './main.module.scss';


const Main: FC<PropsWithChildren> = ({ children }) => (
    <main className={styles.Main}>
        {children}
    </main>
);

export default Main;

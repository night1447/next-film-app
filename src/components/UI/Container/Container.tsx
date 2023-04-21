import { FC, PropsWithChildren } from 'react';
import styles from './container.module.scss';

interface ContainerProps {
    className?: string,
    swiperContainer?: boolean,
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, className, swiperContainer }) => {
    return (
        <div className={`${styles.container} ${className || ''} ${swiperContainer ? styles.swiper : ''}`}>
            {children}
        </div>
    );
};
export default Container;
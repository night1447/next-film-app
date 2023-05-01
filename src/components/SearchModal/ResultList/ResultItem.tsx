import { FC } from 'react';
import { IResultItem } from '@/components/SearchModal/types';
import styles from './result.module.scss';
import Link from 'next/link';

type ResultItemProps = {
    item: IResultItem;
    onClick?: () => void
};
const ResultItem: FC<ResultItemProps> = ({ item, onClick }) => {
    return (
        <li className={styles.item} onClick={onClick}>
            <div className={`${styles.icon} ${styles[item.type]}`}>
            </div>
            <div className={styles.shell}>
                <div className={styles.title}>{item.title}</div>
                {item.addingInfo ? <div className={styles.adddingInfo}>{item.addingInfo}</div> : <></>}
            </div>
            {item.href ? <Link href={item.href} className={styles.link}></Link> : <></>}
        </li>
    );
};
export default ResultItem;
import React, { FC } from 'react';
import { Button } from '@/components/UI/Button/Button';
import styles from './BlockBtns.module.scss';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

interface Btn {
    href: string;
    className: string;
    text: string;
    img?: string
}

interface IIBlockBtns {
    items: Btn[];
}

const BlockBtns: FC<IIBlockBtns> = ({ items }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.btnsSubscription}>
            {items.map((item) => (
                <Button
                    key={item.text}
                    className={`${styles.btn} ${item.img && styles.btnCenter}`}
                    type="button"
                    variants="violet"
                    href={item.href}
                >
                    <div className={item.className}>
                        {item.img && <Image src={item.img} width={20} height={20} alt='icon'/>}
                    </div>{t(item.text)}
                </Button>
            ))}
        </div>
    );
};

export default BlockBtns;

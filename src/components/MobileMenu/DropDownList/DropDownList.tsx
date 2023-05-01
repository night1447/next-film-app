import React, { FC, useState } from 'react';
import Title from '@/components/UI/Title/Title';
import styles from './DropDownList.module.scss';
import Link from 'next/link';
import List from '@/components/UI/List/List';
import useTranslation from 'next-translate/useTranslation';
import { getTitleAndLink } from '@/utils/getTypeForListsMobileMinu';

interface IDropDownList {
    type: string;
    className: string;
}

const DropDownList: FC<IDropDownList> = ({ type, className }) => {
    const { t } = useTranslation();
    const [stateDropDownBox, setStateDropDownBox] = useState(false);

    return (
        <div className={styles.container}>
            <div
                className={styles.title}
                onClick={() => setStateDropDownBox(!stateDropDownBox)}
            >
                <div className={className}></div>
                <Title
                    htmlTagName="h4"
                    title={getTitleAndLink(type).title ? t(getTitleAndLink(type).title) : t(getTitleAndLink(type))}
                    linkSettings={{ isLink: false }}
                />
                <div
                    className={`${styles.after} ${
                        stateDropDownBox && styles.activeAfter
                    }`}
                ></div>
            </div>
            <div
                className={`${styles.dropDownBox} ${
                    stateDropDownBox && styles.active
                }`}
            >
                {getTitleAndLink(type).linkOnAll &&
                    <Link href={getTitleAndLink(type).href}>{t(getTitleAndLink(type).linkOnAll)}</Link>
                }
                {type === 'tv' || type === 'aboutUs'? (
                    <div className={styles.filters}>
                        <List
                            type={type}
                            listType={'genres'}
                            className={styles.genres}
                        />
                    </div>
                ) : (
                    <div className={styles.filters}>
                        <List
                            type={type}
                            listType={'genres'}
                            className={styles.genres}
                        />
                        <div className={styles.box}>
                            <div className={styles.countries}>
                                <List type={type} listType={'countries'} />
                                <List type={type} listType={'years'} />
                            </div>
                            <List type={type} listType={'selections'} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropDownList;

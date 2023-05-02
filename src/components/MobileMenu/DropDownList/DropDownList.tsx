import React, { FC, useState } from 'react';
import Title from '@/components/UI/Title/Title';
import styles from './DropDownList.module.scss';
import Link from 'next/link';
import List from '@/components/UI/List/List';
import useTranslation from 'next-translate/useTranslation';
import { getTitleAndLink } from '@/utils/getTypeForListsMobileMinu';
import { Button } from '@/components/UI/Button/Button';

interface IDropDownList {
    type: string;
    className: string;
}

const DropDownList: FC<IDropDownList> = ({ type, className }) => {
    const { t } = useTranslation();
    const [stateDropDownBox, setStateDropDownBox] = useState(false);
    const [stateModalNumber, setStateModalNumber] = useState(false);

    if (type === 'support') {
        return (
            <div className={styles.container}>
                <div
                    className={styles.title}
                    onClick={() => setStateDropDownBox(!stateDropDownBox)}
                >
                    <div className={className}></div>
                    <Title
                        htmlTagName="h4"
                        title={t(getTitleAndLink(type))}
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
                    <p className={styles.text}>{t('common:mobileMenu.support.message')}</p>
                    <div className={styles.btns}>
                        <Button
                            type="button"
                            variants="violet"
                            href="https://www.ivi.ru/profile"
                        >
                            {t('common:mobileMenu.support.writeInChat')}
                        </Button>
                        <div className={styles.btns_small}>
                            <Button
                                type="button"
                                variants="violet"
                                className={styles.message}
                            >
                                <div ></div>
                            </Button>
                            <Button
                                type="button"
                                variants="violet"
                                onClick={() => setStateModalNumber(!stateModalNumber)}
                                className={styles.phone}
                            >
                                <div></div>
                            </Button>
                            {stateModalNumber && 
                                <div className={styles.modalNumber}>
                                    <p>8 800 234-49-23<br /> 
                                    <span>{t('common:mobileMenu.support.freeInRussia')}</span>
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                    <Button className={styles.answers} type='button' variants='transparent' href='https://ask.ivi.ru/?_gl=1*161jvhx*_ga*MTMyOTg0NjA4MS4xNjgyMzUxNzU0*_ga_GETQ4387MJ*MTY4MzAxMjU5MS45LjEuMTY4MzAyMzMyMC4yLjAuMA..'>
                            <p>ask.ivi.ru <br /><span>{t('common:mobileMenu.support.answers')}</span></p>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div
                className={styles.title}
                onClick={() => setStateDropDownBox(!stateDropDownBox)}
            >
                <div className={className}></div>
                <Title
                    htmlTagName="h4"
                    title={
                        getTitleAndLink(type).title
                            ? t(getTitleAndLink(type).title)
                            : t(getTitleAndLink(type))
                    }
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
                {getTitleAndLink(type).linkOnAll && (
                    <Link href={getTitleAndLink(type).href}>
                        {t(getTitleAndLink(type).linkOnAll)}
                    </Link>
                )}
                {type === 'tv' || type === 'aboutUs' ? (
                    <List
                        type={type}
                        listType={'genres'}
                        className={styles.genres}
                    />
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

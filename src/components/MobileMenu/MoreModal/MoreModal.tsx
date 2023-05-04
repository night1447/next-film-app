import React, { FC } from 'react';
import { Button } from '@/components/UI/Button/Button';
import styles from './MoreModal.module.scss';
import More from '../More/More';
import { Header } from '@/components/Header/Header';
import DropDownList from '../DropDownList/DropDownList';
import useTranslation from 'next-translate/useTranslation';
import BlockBtns from '../BlockBtns/BlockBtns';
import { socials } from '@/constants/Footer';
import Image from 'next/image';
import {btnsAboutUs, btnsTop, typesLists} from "@/constants/MobileMenu"

interface MoreModalProps {
    showMore: boolean;
}

const MoreModal: FC<MoreModalProps> = ({showMore}) => {
    const { t } = useTranslation();

    return (
        <More showModal={showMore}>
            <Header />
            <BlockBtns items={btnsTop} />
            <div>
                <Button
                    className={styles.btn}
                    type="button"
                    href="/"
                    variants="transparent"
                >
                    {t('common:mobileMenu.ivi')}
                </Button>
                <Button
                    className={styles.btn}
                    type="button"
                    href="https://www.ivi.ru/new"
                    variants="transparent"
                >
                    {t('common:mobileMenu.new')}
                </Button>
                {typesLists.map((item) => (
                    <DropDownList
                        className={styles[item.className]}
                        key={item.type}
                        type={item.type}
                    />
                ))}
                <Button
                    className={styles.btn}
                    type="button"
                    href="https://www.ivi.ru/goodmovies"
                    variants="transparent"
                >
                    {t('common:mobileMenu.whatToSee')}
                </Button>
            </div>
            <div className={styles.rating}>
                <Button
                    className={styles.btn}
                    type="button"
                    href="https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready"
                    variants="transparent"
                >
                    {t('common:mobileMenu.ratingMovies')}
                </Button>
                <Button
                    className={styles.btn}
                    type="button"
                    href="https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready"
                    variants="transparent"
                >
                    {t('common:mobileMenu.ratingSeries')}
                </Button>
            </div>
            <div>
                <DropDownList
                    className={styles.aboutUs}
                    key={'aboutUs'}
                    type={'aboutUs'}
                />
                <Button
                    className={styles.btn}
                    type="button"
                    href="https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready"
                    variants="transparent"
                >
                    <div className={styles.btn_entrance}></div>
                    {t('common:mobileMenu.entranceByCode')}
                </Button>
                <BlockBtns items={btnsAboutUs} />
            </div>
            <div>
                <DropDownList
                    className={styles.support}
                    key={'support'}
                    type={'support'}
                />
            </div>
            <div className={styles.socials}>
                <div className={styles.socials_btns}>
                    {socials.map((social, index) => {
                        return (
                            <Button
                                key={index}
                                variants="violet"
                                type="button"
                                isCircle
                                href={social.url}
                            >
                                <Image
                                    src={social.img}
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </Button>
                        );
                    })}
                </div>
                <p>
                    © 2023 ООО «Иви.ру» <br />
                    HBO ® and related service marks are the property of Home Box
                    Office, Inc
                </p>
            </div>
        </More>
    );
};

export default MoreModal;

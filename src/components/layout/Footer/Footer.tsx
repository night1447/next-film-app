import React, { FC } from 'react';
import styles from './Footer.module.scss';
import ru from '@/constants/Footer/ru.json';
import en from '@/constants/Footer/en.json';
import useTranslation from 'next-translate/useTranslation';
import { Button } from '@/components/UI/Button/Button';
import { images, socials } from '@/constants/Footer';
import Image from 'next/image';
import Container from '@/components/UI/Container/Container';
import { FooterProps, Translate } from './types';
import Title from '@/components/UI/Title/Title';
import Link from 'next/link';

const Footer: FC<FooterProps> = () => {
    const { lang } = useTranslation();
    const translate = (lang === 'ru' ? ru : en) as Translate;
    return (
        <div className={styles.Footer}>
            <Container>
                <div className={styles.top}>
                    <div className={styles.block}>
                        <Title
                            htmlTagName={'h4'}
                            linkSettings={{
                                isLink: false,
                            }}
                            title={translate.about.title}
                        />
                        <ul>
                            {translate.about.links.map(({ title, url }) => {
                                return (
                                    <li key={url}>
                                        <Link key={url} href={url}>
                                            {title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={styles.block}>
                        <Title
                            htmlTagName={'h4'}
                            linkSettings={{
                                isLink: false,
                            }}
                            title={translate.sections.title}
                        />
                        <ul>
                            {translate.sections.links.map(({ title, url }) => {
                                return (
                                    <li key={url}>
                                        <Link key={url} href={url}>
                                            {title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <Link
                            href="https://www.ivi.ru/cert"
                            className={styles.certificate}
                        >
                            {translate.сertificateText}
                        </Link>
                    </div>
                    <div className={styles.block}>
                        <Title
                            htmlTagName={'h4'}
                            linkSettings={{
                                isLink: false,
                            }}
                            title={translate.service.title}
                        />
                        <p className={styles.serviceText}>
                            {translate.service.text}
                        </p>
                        <Button
                            variants="violet"
                            type="button"
                            className={styles.button}
                        >
                            <Link href="https://www.ivi.ru/profile">
                                {translate.service.button}
                            </Link>
                        </Button>
                        <div>
                            <Button
                                variants="violet"
                                type="button"
                                className={styles.icons}
                            >
                                <div
                                    className={styles.icon}
                                    data-icon={String.fromCharCode(
                                        parseInt('E0D8', 16),
                                    )}
                                />
                            </Button>
                            <Button
                                variants="violet"
                                type="button"
                                className={styles.icons}
                            >
                                <div
                                    className={styles.icon}
                                    data-icon={String.fromCharCode(
                                        parseInt('E06A', 16),
                                    )}
                                />
                            </Button>
                        </div>
                        <div className={styles.answers}>
                            <Link href="https://ask.ivi.ru/?_gl=1*o45pfi*_ga*MTczODMyOTI3NC4xNjgxMjExNDYz*_ga_GETQ4387MJ*MTY4MTcyNjU0My4xMC4xLjE2ODE3NDM2MDQuMTkuMC4w">
                                <h1>ask.ivi.ru</h1>
                            </Link>
                            <p>{translate.service.linkText}</p>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <Link href="https://www.ivi.ru/subscribe?redirect_url=%2F">
                            <div className={styles.widget}>
                                <div className={styles.widgetIcon} />
                                <p>{translate.widgetText}</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.bot}>
                    <div className={styles.buttonGroups}>
                        <div className={styles.watch}>
                            {translate.buttonGroup.map(
                                ({ light, bold, url, img }) => {
                                    return (
                                        <Button
                                            key={url}
                                            variants="violet"
                                            type="button"
                                            className={styles.button}
                                        >
                                            {img === 'appStore' ||
                                            img === 'googlePlay' ? (
                                                <Image
                                                    src={images[img]}
                                                    alt=""
                                                />
                                            ) : (
                                                <div
                                                    className={styles.icon}
                                                    data-icon={String.fromCharCode(
                                                        parseInt(img, 16),
                                                    )}
                                                />
                                            )}
                                            <div className={styles.text}>
                                                {light !== '' && <p>{light}</p>}
                                                <h1>{bold}</h1>
                                            </div>
                                        </Button>
                                    );
                                },
                            )}
                        </div>
                        <div>
                            {socials.map((img) => {
                                return (
                                    <Button
                                        key={img}
                                        variants="violet"
                                        type="button"
                                        isCircle
                                        className={styles.socials}
                                    >
                                        <Image
                                            src={img}
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <p>{translate.copyright}</p>
                        <p>
                            HBO ® and related service marks are the property of
                            Home Box Office, Inc
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;

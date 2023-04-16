import * as React from 'react';
import { FC, PropsWithChildren } from 'react';
import { IMeta } from '@/seo/meta.interface';
import Head from 'next/head';

const getTitle = (title: string) => title ? title : 'Онлайн кинотеатр Иви';
export const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <meta charSet='UTF-8' />
                <meta name='viewport'
                      content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' />
                <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
                <title>
                    {getTitle(title)}
                </title>
                {description ? <>
                    <meta name={'description'} content={description} />
                    <meta name={'og:title'} content={getTitle(title)} />
                    <meta name={'og:description'} content={description} />
                </> : <meta name={'robots'} content={'noindex, nofollow'} />}
                <link rel='icon' type='image/png' href='/favicon.png' />
            </Head>
            {children}
        </>
    );
};
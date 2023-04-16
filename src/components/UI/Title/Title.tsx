import React, { FC } from 'react';
import styles from './title.module.scss';
import Link from 'next/link';
import { Url } from 'url';
import { routes } from '@/routes/routes';

type TitleProps = {
    htmlTagName: 'h1' | 'h2' | 'h3' | 'h4',
    title: string,
    linkSettings: {
        isLink: boolean,
        decorating?: 'arrow' | 'underline' | false,
        isWholeTitle?: boolean,
        linkedPartTitle?: string,
        path?: Url,
        className?: string
    },
    className?: string
};
const Title: FC<TitleProps> = ({ htmlTagName, className, linkSettings, title }) => {
    if (linkSettings.isLink) {
        const icon: string = linkSettings.decorating ? linkSettings.decorating === 'arrow' ? styles.arrow : styles.underline : '';
        const linkedTitle: string = linkSettings.isWholeTitle ? title : linkSettings?.linkedPartTitle || '';
        const notLinkedTitle: string = linkSettings.isWholeTitle ? '' : title.replace(linkedTitle, '');
        const jsxTitle = <>
            <Link
                className={`${linkSettings.className || ''} ${icon}`}
                href={linkSettings.path || routes.MAIN}>
                {linkedTitle}
            </Link>
             {
                notLinkedTitle
            }
        </>;
        return React.createElement(htmlTagName, { className: `${styles.title} ${className || ''}` }, jsxTitle);
    }
    return React.createElement(htmlTagName, { className: `${styles.title} ${className || ''}` }, title);
};
export default Title;
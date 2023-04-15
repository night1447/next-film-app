import React, { FC, useCallback } from 'react';
import styles from './button.module.scss';
import Link from 'next/link';
import { routes } from '@/routes/routes';
import Image from 'next/image';
import { SrOnly } from '@/components/UI/SrOnly/SrOnly';

type VariantButton = 'accent' | 'border' | 'gray-opacity' | 'accent-transparent' | 'transparent' | 'violet';
type ButtonProps = {
    iconSettings: {
        hasIcon: boolean,
        classIcon?: string,
        iconCode?: string,
        imageUrl?: string,
        width?: number,
        height?: number,
        altImage?: string,
        srOnlyTitle?: string,
    }
    titleSettings: {
        hasTitle: boolean,
        title?: string,
        isBig?: boolean,
    }
    linkSettings?: {
        href: string,
    }
    variants: VariantButton,
    children?: React.ReactNode,
    className?: string,
    isCircle?: boolean,
    type?: 'button' | 'submit' | 'reset',
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
};
export const Button: FC<ButtonProps> = (props) => {
    const iconCode = parseInt(props.iconSettings.iconCode || '', 16);
    const icon = String.fromCharCode(iconCode);

    const getTitle = useCallback(() => props.children ? props.children : props.titleSettings.title, [props.children, props.titleSettings.title]);
    const getContent = useCallback(() => (<>
            {props?.iconSettings.hasIcon ?
                props.iconSettings.imageUrl ?
                    <Image alt={props.iconSettings.altImage || ''}
                           src={props.iconSettings.imageUrl || ''}
                           width={props.iconSettings.width || 16}
                           height={props.iconSettings.height || 16}
                           className={`${styles.img} ${props.iconSettings.classIcon || ''}`} />
                    :
                    <span className={`${styles.icon} ${props.iconSettings.classIcon || ''}`}
                          data-icon={icon}>
                        <SrOnly title={props.iconSettings.srOnlyTitle || ''} />
                    </span>
                :
                <></>}
            {props.titleSettings.hasTitle ? getTitle() : <></>}
        </>
    ), [getTitle, props.iconSettings, props.titleSettings.hasTitle]);

    if (props.linkSettings) {
        return <Link href={props.linkSettings?.href || routes.MAIN}
                     className={`${styles.button} ${props.titleSettings.isBig ? styles.big : ''} ${props.isCircle ? styles.rounded : ''} ${styles[props.variants]} ${props.className || ''}`}>
            {getContent()}
        </Link>;
    }

    return (
        <button className={`${styles.button} ${styles[props.variants]} ${props.className || ''}`}
                type={props.type || 'button'}
                onClick={props.onClick}>
            {getContent()}
        </button>
    );
};
import React, { FC, useCallback } from 'react';
import styles from './button.module.scss';
import Image from 'next/image';
import { SrOnly } from '@/components/UI/SrOnly/SrOnly';
import { ButtonProps } from '@/components/UI/Button/types';


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

    return (
        <button className={`${styles.button} ${styles[props.variants]} ${props.className || ''}`}
                type={props.type || 'button'}
                onClick={props.onClick}>
            {getContent()}
        </button>
    );
};
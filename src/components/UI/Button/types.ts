import React from 'react';

export type VariantButton = 'accent' | 'border' | 'gray-opacity' | 'accent-transparent' | 'transparent' | 'violet';
export type ButtonProps = {
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
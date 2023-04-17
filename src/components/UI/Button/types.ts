import React from 'react';

export type VariantButton = 'accent' | 'border' | 'gray-opacity' | 'accent-transparent' | 'transparent' | 'violet';
export type ButtonProps = {
    variants: VariantButton,
    className?: string,
    isCircle?: boolean,
    type: 'button' | 'submit' | 'reset',
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
};
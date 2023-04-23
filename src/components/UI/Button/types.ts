import React from 'react';

export type VariantButton =
    | 'accent'
    | 'border'
    | 'gray-opacity'
    | 'accent-transparent'
    | 'transparent'
    | 'violet';
export type ButtonProps = {
    variants: VariantButton;
    className?: string;
    isCircle?: boolean;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLAnchorElement>,
    ) => void;
};

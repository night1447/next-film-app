import React, { FC } from 'react';
import Image from 'next/image';

interface LoadingIconProps {
}

const LoadingIcon: FC<LoadingIconProps> = () => (
    <Image src={'/loading.svg'} width={24} height={24} alt={'loading'} />
);

export default LoadingIcon;

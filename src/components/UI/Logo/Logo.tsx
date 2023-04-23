import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';


export const Logo: FC = () => (
    <Link href='/'>
        <Image src='/icons/Logo.svg' alt='logo' width={66} height={48} priority />
    </Link>
);


import React, { FC } from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';

export interface ButtonProps {
	children: React.ReactElement | React.ReactNode | string;
	link?: boolean;
	href?: string;
	circle?: boolean;
	onClick?: () => void;
	id?: string;
}

const Button: FC<ButtonProps> = ({
	children,
	href,
	link = false,
	circle = false,
	onClick,
	id,
}) => {


	return (
		<button onClick={() => onClick!()} 
			className={`${styles.Button } ${circle && styles.circle}`}
			id={id}
		>
			{link
				?<Link href={href!}>{children}</Link>
				: children
			}
		</button>
	);
};

export default Button;

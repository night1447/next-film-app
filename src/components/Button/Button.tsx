import React, { FC } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
	children: React.ReactElement | React.ReactNode | string;
	width: number;
	height: number;
	link?: boolean;
	href?: string;
	radius?: 'circle' | 'basic';
	onClick?: () => void;
	id?: string;
}

const Button: FC<ButtonProps> = ({
	children,
	href,
	link = false,
	radius = 'basic',
	width,
	height,
	onClick,
	id,
}) => {
	if (link) {
		return (
			<div
				onClick={() => onClick!()}
				className={
					radius === 'basic'
						? styles.Button
						: [styles.Button, styles.circle].join(' ')
				}
				style={{ width, height }}
				id={id}
			>
				<a href={href}>{children}</a>
			</div>
		);
	}

	return (
		<div
			onClick={() => onClick!()}
			className={
				radius === 'basic'
					? styles.Button
					: [styles.Button, styles.circle].join(' ')
			}
			style={{ width, height }}
			id={id}
		>
			{children}
		</div>
	);
};

export default Button;

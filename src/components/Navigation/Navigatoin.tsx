import React, { FC, useState } from 'react';
import cl from './Navigation.module.scss';
import Link from 'next/link';
// import { useTranslation } from "react-i18next";

interface IItemsList {
	href: string;
	value: any;
}

interface INavication {
	items?: IItemsList[];
	flex?: boolean;
}

const Navigation: FC<INavication> = ({ items, flex = false }) => {
	// const {t} = useTranslation()

	return (
		<nav
			className={
				flex
					? [cl.navigation, cl.flex].join(' ')
					: [cl.navigation, cl.block].join(' ')
			}
		>
			<ul className={''}>
				{items!.map(item => (
					<li key={item.value}>
						<Link href={item.href} className={''}>
							{item.value}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;

import '../../styles/globals.scss';
import Navigation from './Navigatoin';

interface IArgs {
	items: any[];
	flex: boolean;
}

export default {
	title: 'Navigation',
	component: Navigation,
	argTypes: {
		items: {
			description:
				'Объект в котором есть ключь href - хранит путь для ссылки и value - хранит тело ссылки',
		},
	},
};

const Template = (arg: IArgs) => <Navigation {...arg} />;

export const Row: any = Template.bind({});

Row.args = {
	items: [
		{ href: 'https://www.ivi.ru/', value: 'Мой Иви' },
		{ href: 'https://www.ivi.ru/new', value: 'Что нового' },
		{ href: 'https://www.ivi.ru/', value: 'Фильмы' },
		{ href: 'https://www.ivi.ru/', value: 'Сериалы' },
		{ href: 'https://www.ivi.ru/', value: 'Мультфильмы' },
		{ href: 'https://www.ivi.ru/', value: 'TV+' },
	],
	flex: true,
};

export const Сolumn: any = Template.bind({});

Сolumn.args = {
	items: [
		{ href: 'https://www.ivi.ru/', value: 'Мой Иви' },
		{ href: 'https://www.ivi.ru/new', value: 'Что нового' },
		{ href: 'https://www.ivi.ru/', value: 'Фильмы' },
		{ href: 'https://www.ivi.ru/', value: 'Сериалы' },
		{ href: 'https://www.ivi.ru/', value: 'Мультфильмы' },
		{ href: 'https://www.ivi.ru/', value: 'TV+' },
	],
};

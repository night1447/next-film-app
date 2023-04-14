import Button, { ButtonProps } from './Button';
import '../../styles/globals.scss';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		children: {
			description: 'Содержимое кнопки',
		},
	},
};

const Template = (arg: ButtonProps) => <Button {...arg} />;

export const Basic: any = Template.bind({});

Basic.args = {
	children: <p>Hello</p>,
	width: 70,
	height: 40,
};

export const Circle: any = Template.bind({});

Circle.args = {
	children: <p>Hello</p>,
	width: 50,
	height: 50,
	radius: 'circle',
};

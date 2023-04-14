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
	id:'gh'
};

export const Circle: any = Template.bind({});

Circle.args = {
	children: <p>Hello</p>,
	id:'gh',
	radius: 'circle',
};

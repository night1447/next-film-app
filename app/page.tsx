// import styles from './page.module.css'
// "use client"
import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
// import { useRouter } from "next/router";

const Home: FC = () => {
	const { t, lang } = useTranslation('common');
	// const {locale, locales, push} = useRouter()
	const example = t('title');

	return (
		<main>
			<h1>{example}</h1>
		</main>
	);
};
export default Home;

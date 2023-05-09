import '@/styles/vars.css';
import '@/styles/style.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>;
}

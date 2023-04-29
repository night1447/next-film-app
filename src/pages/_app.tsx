import '@/styles/vars.css';
import '@/styles/style.scss';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>;
}

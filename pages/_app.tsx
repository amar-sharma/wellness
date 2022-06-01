import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NotifierContextProvider } from 'react-headless-notifier';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotifierContextProvider
      config={{
        max: 3,
        duration: 5000,
        position: 'topRight',
      }}>
      <Component {...pageProps} />{' '}
    </NotifierContextProvider>
  );
}

export default MyApp;

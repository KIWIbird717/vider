import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import PropTypes from 'prop-types';

import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])

  const baseUrl = process.env.BASE_URL

  return (
    <React.Fragment>
      <Head>
        <title>VIDER</title>
        {/* <link rel="icon" href={`./favicon.ico`} /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

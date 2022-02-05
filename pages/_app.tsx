import Head from 'next/head';
import 'styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* page title */}
        <title>jb.</title>
        
        {/* favicon */}
        <link rel="shortcut icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>" />
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}
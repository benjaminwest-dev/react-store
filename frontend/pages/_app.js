import NProgress from 'nprogress';
import Page from '../components/Page';
import '../components/styles/nprogress.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

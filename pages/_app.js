import Theme from '../styles/theme';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<Theme>
				{/* <Head>
					<meta name='viewport' content='viewport-fit=cover' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
				</Head> */}
				<Component {...pageProps} key={router.route} />
			</Theme>
		</>
	);
}

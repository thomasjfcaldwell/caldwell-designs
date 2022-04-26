import Theme from '../styles/theme';
import GlobalStyles from '../styles/globels';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Theme>
				{/* <GlobalStyle /> */}
				<Component {...pageProps} />
			</Theme>
		</>
	);
}

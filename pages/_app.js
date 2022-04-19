import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Poppins', sans-serif;
	background-color:#0b1628;
  }
  a {
	text-decoration: none;
}

p {
	color: #f0f3f0;
}

`;

const theme = {
	colors: {
		primary: '#727272',
	},
};

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

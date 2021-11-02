import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     font-family: 'Poppins', sans-serif;
	  background-color: #eae7dc;
    text-decoration: none;
    

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

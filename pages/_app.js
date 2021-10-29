import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,500&display=swap'); */
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

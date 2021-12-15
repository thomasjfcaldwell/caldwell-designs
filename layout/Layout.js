import React from 'react';
import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { Container } from './LayoutStyles';
import Footer from '../components/Footer';

export const Layout = ({ children }) => {
	return (
		<Container>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</Container>
	);
};

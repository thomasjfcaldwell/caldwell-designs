import React from 'react';

import Nav from '../components/Nav/Nav';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
	return (
		<Container>
			<Nav />
			<main>{children}</main>
		</Container>
	);
};

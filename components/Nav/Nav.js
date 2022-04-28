import React from 'react';
import Link from 'next/link';
import { Container, LinkText } from './NavStyles';

const Nav = () => (
	<Container>
		<LinkText>contact</LinkText>
		<LinkText>projects</LinkText>
		<LinkText>work history</LinkText>
		<LinkText>about me</LinkText>
	</Container>
);

export default Nav;

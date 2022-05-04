import React from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import { Container, LinkText } from './NavStyles';

export default function Nav() {
	return (
		<Container>
			{/* <Link path='#contact' scroll={false}>
				<LinkText>contact</LinkText>
			</Link> */}
			{/* <Link href='/projects'>
				<LinkText>projects</LinkText>
			</Link>
			<Link href='#'>
				<LinkText>work history</LinkText>
			</Link>
			<Link href='#'>
				<LinkText>about me!</LinkText>
			</Link> */}
		</Container>
	);
}

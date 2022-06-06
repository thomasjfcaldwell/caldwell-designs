import React from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import { Container, LinkText } from './NavStyles';

export default function Nav() {
	return (
		<Container className='nav'>
			<Link href='#contact'>
				<LinkText>contact</LinkText>
			</Link>
			<Link href='#projects' scroll={false}>
				<LinkText>projects</LinkText>
			</Link>
			<Link href='#work-history' scroll={false}>
				<LinkText>work history</LinkText>
			</Link>
			<Link href='#about' scroll={false}>
				<LinkText>about me!!</LinkText>
			</Link>
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

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import {
	Container,
	Title,
	TitleContainer,
	LinkText,
	LinkContainer,
} from './NavbarStyle';
import portfolio from '.././public/Images/HomePage/portfolio.svg';
import logo from '.././public/Images/HomePage/Asset 3.svg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export const Navbar = () => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Container>
				<TitleContainer>
					<Link href='/' passHref>
						<Title>
							<Image src={logo} alt='thomascaldwellportfolio' />
						</Title>
					</Link>
				</TitleContainer>
				<LinkContainer>
					<Link href='/examplesofwork' passHref>
						<LinkText>Examples of Work</LinkText>
					</Link>
					<Link href='/contact' passHref>
						<LinkText>Contact</LinkText>
					</Link>
					<Link href='/workhistory' passHref>
						<LinkText>Work History</LinkText>
					</Link>
				</LinkContainer>
			</Container>
		</>
	);
};

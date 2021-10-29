import Link from 'next/link';
import { Container, Title, TitleContainer } from './NavbarStyle';

export const Navbar = () => {
	return (
		<>
			<nav className='nav'>
				<Container>
					<TitleContainer>
						<Title>thomas Caldwell</Title>
					</TitleContainer>
					<Link href='/'>
						<a>home</a>
					</Link>
					<Link href='/playing'>
						<a>playing</a>
					</Link>
					<Link href='/contact'>
						<a>contact</a>
					</Link>
				</Container>
			</nav>
		</>
	);
};

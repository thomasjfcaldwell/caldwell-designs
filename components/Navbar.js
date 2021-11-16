import Link from 'next/link';
import {
	Container,
	Title,
	TitleContainer,
	LinkText,
	LinkContainer,
} from './NavbarStyle';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export const Navbar = () => {
	return (
		<>
			{/* <nav className='nav'> */}
			<Container>
				<TitleContainer>
					<Link href='/' passHref>
						<Title>thomas caldwell portfolio</Title>
					</Link>
				</TitleContainer>
				<LinkContainer>
					<Link href='/contact' passHref>
						<LinkText>
							Examples of Work
							<BsFillArrowRightCircleFill
								size={15}
								style={{ margin: '0 5px' }}
							/>
						</LinkText>
					</Link>
					<Link href='/playing' passHref>
						<LinkText>
							Project Request{' '}
							<BsFillArrowRightCircleFill
								size={15}
								style={{ margin: '0 5px' }}
							/>
						</LinkText>
					</Link>
				</LinkContainer>
			</Container>
			{/* </nav> */}
		</>
	);
};

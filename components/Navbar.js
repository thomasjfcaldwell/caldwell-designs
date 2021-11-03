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
							<Title>
								<a>thomas caldwell portfolio</a>
							</Title>
						</Link>
					</TitleContainer>
					<LinkContainer>
						<Link href='/contact' passHref>
							<LinkText>
								<a>
									contact <BsFillArrowRightCircleFill size={15} />
								</a>
							</LinkText>
						</Link>
						<Link href='/playing' passHref>
							<LinkText>
								<a>
									Project Request <BsFillArrowRightCircleFill size={15} />
								</a>
							</LinkText>
						</Link>
					</LinkContainer>
				</Container>
			{/* </nav> */}
		</>
	);
};

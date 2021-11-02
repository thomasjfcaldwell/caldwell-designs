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
			<nav className='nav'>
				<Container>
					<TitleContainer>
						<Link href='/'>
							<Title>thomas caldwell</Title>
						</Link>
					</TitleContainer>
					<LinkContainer>
						<Link href='/contact'>
							<LinkText>
								contact {''}
								<BsFillArrowRightCircleFill size={15} />
							</LinkText>
						</Link>
						<Link href='/playing'>
							<LinkText>
								Project Request{''} <BsFillArrowRightCircleFill size={15} />
							</LinkText>
						</Link>
					</LinkContainer>
				</Container>
			</nav>
		</>
	);
};

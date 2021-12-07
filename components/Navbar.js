import Link from 'next/link';
import Image from 'next/image';
import {
	Container,
	Title,
	TitleContainer,
	LinkText,
	LinkContainer,
} from './NavbarStyle';
import portfolio from '.././public/Images/HomePage/portfolio.svg';
import logo from '.././public/Images/HomePage/Asset 3.svg'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export const Navbar = () => {
	return (
		<>
			
			<Container>
				<TitleContainer>
					<Link href='/' passHref>
						<Image src={logo} alt='thomascaldwellportfolio' />
					</Link>
				</TitleContainer>
				<LinkContainer>
					<Link href='/examplesofwork' passHref>
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
		</>
	);
};

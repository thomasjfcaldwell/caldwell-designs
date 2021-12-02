import Link from 'next/link';
import {
	FooterWrapper,
	ContactContainer,
	SocialMediaContainer,
	LinkContainer,
	LinkText,
	ContactDetailsContainer,
} from './FooterStyles';

import {
	TiSocialLinkedinCircular,
	TiSocialFacebookCircular,
	TiSocialTwitterCircular,
} from 'react-icons/ti';

import ContactForm from './ContactForm';
import ContactDetails from './Footer/ContactDetails';
import { Title, Line, TitleContainer } from './Home/HomeStyle';

function Footer() {
	return (
		<>
			<TitleContainer>
				<Title>Connect With Thomas</Title>
				<Line></Line>
			</TitleContainer>
			<ContactDetailsContainer>
				<ContactDetails />
			</ContactDetailsContainer>
			<FooterWrapper>
				<SocialMediaContainer>
					<LinkContainer>
						<Link
							href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'
							passHref>
							<LinkText>
								<TiSocialLinkedinCircular size={40} />
							</LinkText>
						</Link>
					</LinkContainer>
					<LinkContainer>
						<Link
							href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'
							passHref>
							<LinkText>
								<TiSocialFacebookCircular size={40} />
							</LinkText>
						</Link>
					</LinkContainer>
					<LinkContainer>
						<Link
							href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'
							passHref>
							<LinkText>
								<TiSocialTwitterCircular size={40} />
							</LinkText>
						</Link>
					</LinkContainer>
					<LinkContainer>
						<Link
							href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'
							passHref>
							<LinkText>
								<TiSocialTwitterCircular size={40} />
							</LinkText>
						</Link>
					</LinkContainer>
					<LinkContainer>
						<Link
							href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'
							passHref>
							<LinkText>
								<TiSocialTwitterCircular size={40} />
							</LinkText>
						</Link>
					</LinkContainer>
					<LinkContainer>
						<Link
							href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'
							passHref>
							<LinkText>
								<TiSocialTwitterCircular size={40} />
							</LinkText>
						</Link>
					</LinkContainer>
				</SocialMediaContainer>
				<ContactContainer>
					<ContactForm />
				</ContactContainer>
			</FooterWrapper>
		</>
	);
}

export default Footer;

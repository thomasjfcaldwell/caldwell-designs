import Link from 'next/link';
import {
	FooterWrapper,
	ContactContainer,
	SocialMediaContainer,
	HeadlineContainer,
	Headline,
	LinkContainer,
	LinkText,
	ContactDetailsContainer,
	Line,
} from './FooterStyles';

import {
	TiSocialLinkedinCircular,
	TiSocialFacebookCircular,
	TiSocialTwitterCircular,
} from 'react-icons/ti';

import ContactForm from './ContactForm';
import ContactDetails from './Footer/ContactDetails';


function Footer() {
	return (
		<>
			<HeadlineContainer>
				<Headline>Connect With Thomas</Headline>
				<Line></Line>
			</HeadlineContainer>
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

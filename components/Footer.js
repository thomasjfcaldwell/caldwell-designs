import Link from 'next/link';
import {
	FooterWrapper,
	ContactContainer,
	SocialMediaContainer,
	HeadlineContainer,
	Headline,
	LinkContainer,
	LinkText,
} from './FooterStyles';

import {
	TiSocialLinkedinCircular,
	TiSocialFacebookCircular,
	TiSocialTwitterCircular,
} from 'react-icons/ti';

import ContactForm from './ContactForm';

function Footer() {
	return (
		<>
			<HeadlineContainer>
				<Headline>Connect With Thomas</Headline>
			</HeadlineContainer>
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

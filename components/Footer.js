import {
	FooterWrapper,
	ContactContainer,
	SocialMediaContainer,
} from './FooterStyles';
import {
	TiSocialLinkedinCircular,
	TiSocialFacebookCircular,
	TiSocialTwitterCircular,
} from 'react-icons/ti';

function Footer() {
	return (
		<FooterWrapper>
			<ContactContainer>
				<h1>I am your scout leader</h1>
			</ContactContainer>
			<SocialMediaContainer>
				<TiSocialLinkedinCircular size={60} />
				<TiSocialFacebookCircular size={60} />
				<TiSocialTwitterCircular size={60} />
			</SocialMediaContainer>
		</FooterWrapper>
	);
}

export default Footer;

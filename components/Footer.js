import Link from 'next/link';
import {
	FooterWrapper,
	ContactContainer,
	ContactDetailsContainer,
	FooterBottom,
	FooterBottomText,
} from './FooterStyles';

import ContactForm from './ContactForm';
import ContactDetails from './Footer/ContactDetails';
import { Title, Line, TitleContainer } from './Home/HomeStyle';
import HomeButton from './HomeButton';

function Footer() {
	return (
		<>
			<TitleContainer>
				<Title>Connect With Thomas</Title>
			</TitleContainer>
			<FooterWrapper>
				<ContactDetailsContainer>
					<ContactDetails />
				</ContactDetailsContainer>
				<ContactContainer>
					<ContactForm />
				</ContactContainer>
			</FooterWrapper>
			<HomeButton />
			<FooterBottom>
				<FooterBottomText>
					Made from Scratch By Thomas Caldwell
				</FooterBottomText>
			</FooterBottom>
		</>
	);
}

export default Footer;

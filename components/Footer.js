import Link from 'next/link';
import {
	FooterWrapper,
	ContactContainer,
	ContactDetailsContainer,
} from './FooterStyles';

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
				<ContactContainer>
					<ContactForm />
				</ContactContainer>
			</FooterWrapper>
		</>
	);
}

export default Footer;

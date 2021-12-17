import Link from 'next/link';
import {
	FooterWrapper,
	ContactContainer,
	ContactDetailsContainer,
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
				<Line></Line>
			</TitleContainer>
			<FooterWrapper>
				<ContactDetailsContainer>
					<ContactDetails />
				</ContactDetailsContainer>
				<ContactContainer>
					<ContactForm />
				</ContactContainer>
			</FooterWrapper>
			<div style={{ margin: '1em auto' }}>
				<HomeButton />
			</div>
		</>
	);
}

export default Footer;

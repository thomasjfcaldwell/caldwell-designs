import {
	Container,
	ContentContainer,
	Text,
	LinkText,
} from './ContactDetailsStyle';
import Link from 'next/link';

import {
	AiOutlinePhone,
	AiOutlineMail,
	AiFillEnvironment,
} from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

function ContactDetails() {

	let iconStyles = { margin: '10px', color: '#727272'}

	return (
		<div>
			<Container>
				<ContentContainer>
					<Text>Phone</Text>
					<AiOutlinePhone style={iconStyles} size={30} />
					<Link href='tel:7145956633' passHref>
						<LinkText>714-595-6633</LinkText>
					</Link>
				</ContentContainer>
				<ContentContainer>
					<Text>Email</Text>
					<AiOutlineMail style={iconStyles} size={30} />
					<Link href='mailto:thomasjfcaldwell@gmail.com' passHref>
						<LinkText>thomasjfcaldwell@gmail.com</LinkText>
					</Link>
				</ContentContainer>
				<ContentContainer>
					<Text>Linkedin</Text>
					<TiSocialLinkedinCircular style={iconStyles} size={30} />
					<Link
						href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'
						passHref>
						<LinkText>linkedin</LinkText>
					</Link>
				</ContentContainer>
			</Container>
		</div>
	);
}

export default ContactDetails;

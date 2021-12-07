import { Container, ContentContainer, LinkText } from './ContactDetailsStyle';
import Link from 'next/link';

import {
	AiOutlinePhone,
	AiOutlineMail,
	AiFillEnvironment,
} from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

function ContactDetails() {
	return (
		<div>
			<Container>
				<ContentContainer>
					<p>Phone</p>
					<AiOutlinePhone />
					<Link href='tel:7145956633' passHref>
						<LinkText>714-595-6633</LinkText>
					</Link>
				</ContentContainer>
				<ContentContainer>
					<p>Email</p>
					<AiOutlineMail />
					<Link href='mailto:thomasjfcaldwell@gmail.com' passHref>
						<LinkText>thomasjfcaldwell@gmail.com</LinkText>
					</Link>
				</ContentContainer>
				<ContentContainer>
					<p>Linkedin</p>
					<TiSocialLinkedinCircular />
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

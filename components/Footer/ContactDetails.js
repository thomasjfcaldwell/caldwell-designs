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
	let iconStyles = { color: '#727272', margin: '10px 5px' };

	return (
		<div>
			<Container>
				<ContentContainer>
					<Text>
						Phone <AiOutlinePhone style={iconStyles} size={16} />
					</Text>
					<Link href='tel:7145956633' passHref>
						<LinkText>714-595-6633</LinkText>
					</Link>
				</ContentContainer>
				<ContentContainer>
					<Text>
						Email <AiOutlineMail style={iconStyles} size={16} />
					</Text>
					<Link href='mailto:thomasjfcaldwell@gmail.com' passHref>
						<LinkText>thomasjfcaldwell@gmail.com</LinkText>
					</Link>
				</ContentContainer>
				<ContentContainer>
					<Text>
						Linkedin
						<TiSocialLinkedinCircular style={iconStyles} size={16} />
					</Text>
					<Link
						href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'
						passHref>
						<LinkText>Linkedin</LinkText>
					</Link>
				</ContentContainer>
			</Container>
		</div>
	);
}

export default ContactDetails;

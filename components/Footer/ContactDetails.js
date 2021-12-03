import { Container, ContentContainer, LinkText } from './ContactDetailsStyle';
import Link from 'next/link';

import {
	AiOutlinePhone,
	AiOutlineMail,
	AiFillEnvironment,
} from 'react-icons/ai';
import {
	TiSocialLinkedinCircular,
	TiSocialFacebookCircular,
	TiSocialTwitterCircular,
} from 'react-icons/ti';

function ContactDetails() {
	return (
		<div>
			<Container>
				<ContentContainer>
					<AiOutlinePhone />
					<Link href='tel:7145956633' passHref>
						<LinkText>714-595-6633</LinkText>
					</Link>
				</ContentContainer>
				<ContentContainer>
					<AiOutlineMail />
					<Link href='mailto:thomasjfcaldwell@gmail.com' passHref>
						<LinkText>thomasjfcaldwell@gmail.com</LinkText>
					</Link>
				</ContentContainer>
				<ContentContainer>
					<AiFillEnvironment />
					<Link
						href='https://www.google.com/maps/place/411+Coral+Reef+Dr,+Huntington+Beach,+CA+92648/@33.6717701,-117.9963212,17z/data=!3m1!4b1!4m9!1m2!10m1!1e2!3m5!1s0x80dd213611e8b80d:0x58a5ec06f19a6459!8m2!3d33.6717701!4d-117.9941325!16s%2Fg%2F11c1_nbdn7'
						passHref>
						<LinkText>Orange County, CA</LinkText>
					</Link>
				</ContentContainer>
			</Container>
			<Container>
				<ContentContainer>
					<TiSocialLinkedinCircular />
					<Link
						href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'
						passHref>
						<LinkText>linkedin</LinkText>
					</Link>
				</ContentContainer>
				<ContentContainer>
					<TiSocialFacebookCircular />
					<Link href='www.facebook.com' passHref>
						<LinkText>Facebook</LinkText>
					</Link>
				</ContentContainer>
				<ContentContainer>
					<TiSocialTwitterCircular />
					<Link href='www.twitter.com' passHref>
						<LinkText>Twitter</LinkText>
					</Link>
				</ContentContainer>
			</Container>
		</div>
	);
}

export default ContactDetails;

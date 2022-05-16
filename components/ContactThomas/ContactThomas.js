import React from 'react';

import {
	ContactThomasContainer,
	ContactThomasSocialMediaContainer,
	ContactThomasSocialMediaLink,
	ContactThomasTitleContainer,
	ContactThomasTitle,
	SocialMediaIcon,
	SocialTextContainer,
	SocialMediaTitle,
} from './ContactThomasStyles';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const socialMediaData = [
	{ number: 1, text: 'bummmy bum' },
	{ number: 2, text: 'Number 2' },
	{ number: 3, text: 'number 3' },
];

function ContactThomas() {
	return (
		<ContactThomasContainer>
			<ContactThomasTitleContainer>
				<ContactThomasTitle>Contact Thomas</ContactThomasTitle>
			</ContactThomasTitleContainer>
			<ContactThomasSocialMediaContainer id='contact'>
				<ContactThomasSocialMediaLink
					href='mailto:thomasjfcaldwell@gmail.com'
					target='_blank'
					rel='noreferrer'>
					<SocialMediaIcon>
						<AiOutlineMail />
					</SocialMediaIcon>
					<SocialTextContainer>
						<SocialMediaTitle>Email</SocialMediaTitle>
					</SocialTextContainer>
				</ContactThomasSocialMediaLink>
				<ContactThomasSocialMediaLink
					href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'
					target='_blank'
					rel='noreferrer'>
					<SocialMediaIcon>
						<AiFillLinkedin />
					</SocialMediaIcon>
					<SocialTextContainer>
						<SocialMediaTitle>Linkedin</SocialMediaTitle>
					</SocialTextContainer>
				</ContactThomasSocialMediaLink>
				<ContactThomasSocialMediaLink
					href='https://github.com/thomasjfcaldwell'
					target='_blank'
					rel='noreferrer'>
					<SocialMediaIcon>
						<AiFillGithub />
					</SocialMediaIcon>
					<SocialTextContainer>
						<SocialMediaTitle>Git Hub</SocialMediaTitle>
					</SocialTextContainer>
				</ContactThomasSocialMediaLink>
			</ContactThomasSocialMediaContainer>
		</ContactThomasContainer>
	);
}

export default ContactThomas;

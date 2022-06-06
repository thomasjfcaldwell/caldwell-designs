import React from 'react';

import {
	ContactThomasContainer,
	ContactThomasSocialMediaContainer,
	ContactThomasSocialMediaLink,
	SocialMediaIcon,
	SocialTextContainer,
	SocialMediaTitle,
} from './ContactThomasStyles';

import { Title, TitleContainer } from '../Hero/Title/TitleStyles';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

function ContactThomas() {
	return (
		<ContactThomasContainer>
			<TitleContainer>
				<Title>Contact Thomas</Title>
			</TitleContainer>
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

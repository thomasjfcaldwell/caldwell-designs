import React from 'react';
import ThisSite from '../ThisSite/ThisSite';
import {
	ContactThomasContainer,
	ContactThomasSocialMediaContainer,
	ContactThomasSocialMediaLink,
	SocialMediaIcon,
	SocialTextContainer,
	SocialMediaTitle,
} from '../ContactThomas/ContactThomasStyles';

import { ContactAndThisSiteContainer } from './ContactAndThisSiteStyles';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
export default function ContactAndThisSite() {
	return (
		<ContactAndThisSiteContainer>
			<ThisSite />
			<ContactThomasContainer>
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
		</ContactAndThisSiteContainer>
	);
}

import React from 'react';

import {
	ThisSiteContainer,
	ThisSiteHeader,
	ThisSiteImage,
	ThisSiteText,
	ThisSiteLink,
	ThisSiteLinkIcon,
	ThisSiteLinkTextContainer,
	ThisSiteLinkTitle,
} from './ThisSiteStyles';

import { AiFillGithub } from 'react-icons/ai';

const mockUp =
	'https://res.cloudinary.com/djjqsmlei/image/upload/v1654558082/firefox-browser-mockup-in-a-macos-desktop-21297_ses4tq.png';

function ThisSite() {
	return (
		<ThisSiteContainer>
			<ThisSiteHeader>This Site</ThisSiteHeader>
			<ThisSiteImage
				loading='lazy'
				src={mockUp}
				alt='Mock Up of Store'
				className=''
			/>
			<ThisSiteText>
				On top of Web Development languages I have experience in Web Design and
				Development frameworks, libraries and code editors. Including Wordpress,
				React and Bootstrap.
			</ThisSiteText>
			<ThisSiteLink href='#' target='_blank' rel='noreferrer'>
				<ThisSiteLinkIcon>
					<AiFillGithub />
				</ThisSiteLinkIcon>
				<ThisSiteLinkTextContainer>
					<ThisSiteLinkTitle>Git Hub</ThisSiteLinkTitle>
				</ThisSiteLinkTextContainer>
			</ThisSiteLink>
		</ThisSiteContainer>
	);
}

export default ThisSite;

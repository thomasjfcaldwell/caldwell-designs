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
	'https://i.ibb.co/JkP6p3t/jens-kreuter-GAPfhkgm-Zl-Q-unsplash.jpg';

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

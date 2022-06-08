import React from 'react';

import {
	ThisSiteWrapper,
	ThisSiteContainer,
	ThisSiteImage,
	ThisSiteText,
	ThisSiteList,
	ThisSiteListItem,
	GitHubLinkTitle,
	ThisSiteLink,
	ThisSiteLinkIcon,
	ThisSiteLinkTextContainer,
	ThisSiteLinkTitle,
} from './ThisSiteStyles';

import { TitleContainer, Title } from '../Hero/Title/TitleStyles';

import { AiFillGithub } from 'react-icons/ai';
import { SiAdobexd } from 'react-icons/si';

const mockUp =
	'https://res.cloudinary.com/djjqsmlei/image/upload/v1654622627/firefox-browser-mockup-in-a-macos-desktop-21297_c4jcvb.png';

function ThisSite() {
	return (
		<ThisSiteWrapper>
			<TitleContainer>
				<Title>More About This Site</Title>
			</TitleContainer>
			<ThisSiteContainer>
				<ThisSiteImage
					loading='lazy'
					src={mockUp}
					alt='Mock Up of this site'
					className=''
				/>
				<ThisSiteText>
					This portfolio site was planned and designed using Adobe XD.
				</ThisSiteText>
				<GitHubLinkTitle>Take a looks at my designs</GitHubLinkTitle>
				<ThisSiteLink href='#' target='_blank' rel='noreferrer'>
					<ThisSiteLinkIcon>
						<SiAdobexd size={20} />
					</ThisSiteLinkIcon>
					<ThisSiteLinkTextContainer>
						<ThisSiteLinkTitle>Mock Ups</ThisSiteLinkTitle>
					</ThisSiteLinkTextContainer>
				</ThisSiteLink>
				<ThisSiteText>
					I developed the site using Next JS using the following industry
					standards:
				</ThisSiteText>
				<ThisSiteList>
					<ThisSiteListItem>
						Using components for each section and for layout of site.
					</ThisSiteListItem>
					<ThisSiteListItem>
						Each component is individually styled using styled-component
						library.
					</ThisSiteListItem>
					<ThisSiteListItem>
						Responsive design tested on all devices and viewpoints.
					</ThisSiteListItem>
					<ThisSiteListItem>
						Responsive design tested on all devices and viewpoints.
					</ThisSiteListItem>
				</ThisSiteList>
				<GitHubLinkTitle>
					Take a looks at the GitHub Repro to see my approach
				</GitHubLinkTitle>
				<ThisSiteLink href='#' target='_blank' rel='noreferrer'>
					<ThisSiteLinkIcon>
						<AiFillGithub size={20} />
					</ThisSiteLinkIcon>
					<ThisSiteLinkTextContainer>
						<ThisSiteLinkTitle>Git Hub</ThisSiteLinkTitle>
					</ThisSiteLinkTextContainer>
				</ThisSiteLink>
			</ThisSiteContainer>
		</ThisSiteWrapper>
	);
}

export default ThisSite;

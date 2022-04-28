import React from 'react';

import {
	TitleContainer,
	ProjectTitle,
	MoreProjectsLink,
	MoreProjectsLinkContainer,
} from './TitleStyles';

import { LinkButton } from '../LinkButton/LinkButton.Styles';

function Title() {
	return (
		<TitleContainer>
			<ProjectTitle>Projects</ProjectTitle>
			<MoreProjectsLinkContainer>
				<LinkButton>See More Projects</LinkButton>
			</MoreProjectsLinkContainer>
		</TitleContainer>
	);
}

export default Title;

import React from 'react';

import {
	WorkExperienceContainer,
	EasyAndQuickContainer,
	WowContainer,
	ECigContainer,
	BurgerContainer,
} from './WorkExperienceStyles';
import {
	WorkExperienceTitleContainer,
	WorkExperienceTitle,
} from '../Hero/Title/TitleStyles';

export default function WorkExperience() {
	return (
		<WorkExperienceContainer>
			<WorkExperienceTitleContainer>
				<WorkExperienceTitle>Work Experience</WorkExperienceTitle>
			</WorkExperienceTitleContainer>
			<EasyAndQuickContainer>
				<h1 style={{ color: 'black' }}>Easy & Quick Gifts</h1>
			</EasyAndQuickContainer>
			<WowContainer>
				<h1 style={{ color: 'black' }}>Wow Events</h1>
			</WowContainer>
			<ECigContainer>
				<h1 style={{ color: 'black' }}>E-Cig Gallery Wholesale</h1>
			</ECigContainer>
			<BurgerContainer>
				<h1 style={{ color: 'black' }}>Burger Monster</h1>
			</BurgerContainer>
		</WorkExperienceContainer>
	);
}

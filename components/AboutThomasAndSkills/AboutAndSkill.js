import React from 'react';
import AboutThomas from '../AboutThomas/AboutThomas';
import Skills from '../EducationAndSkills/Skills/Skills';

import { AboutAndSkillWrapper } from './AboutAndSkillStyles';

export default function AboutAndSkill() {
	return (
		<AboutAndSkillWrapper>
			<Skills />
			<AboutThomas />
		</AboutAndSkillWrapper>
	);
}

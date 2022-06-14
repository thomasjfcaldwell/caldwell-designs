import React from 'react';
import AboutThomas from '../AboutThomas/AboutThomas';
import Skills from '../EducationAndSkills/Skills/Skills';

import { AboutAndSkillWrapper } from './AboutAndSkillStyles';

export default function AboutAndSkill() {
	return (
		<AboutAndSkillWrapper id='about'>
			<Skills />
			<AboutThomas />
		</AboutAndSkillWrapper>
	);
}

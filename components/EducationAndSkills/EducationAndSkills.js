import React from 'react';
import Skills from './Skills/Skills';
import Education from './Education/Education';

import { EducationAndSkillsContainer } from './EducationAndSkillsStyles';

export default function EducationAndSkills() {
	return (
		<EducationAndSkillsContainer>
			<Skills />
			<Education />
		</EducationAndSkillsContainer>
	);
}

import React from 'react';

import { Experience } from '../../constants/workexperince.js';

import {
	WorkExperienceWrapper,
	WorkExperienceContainer,
	Header,
	WorkExperienceDate,
	WorkExperiencePosition,
	DetailsHeader,
	WorkExperienceTechnologies,
	WorkExperienceResponsibilities,
} from './JobsStyles';
import { Title, Line, TitleContainer } from '../Home/HomeStyle';

export default function Jobs() {
	return (
		<div>
			<TitleContainer>
				<Title>Work Experience</Title>
				<Line></Line>
			</TitleContainer>
			<WorkExperienceWrapper>
				{Experience.map((job, id) => (
					<WorkExperienceContainer key={id}>
						<Header>{job.company}</Header>
						<WorkExperienceDate>{job.date}</WorkExperienceDate>
						<WorkExperiencePosition>{job.position}</WorkExperiencePosition>
						<DetailsHeader>
							Technologies Used And Responsibilities
						</DetailsHeader>
						<WorkExperienceTechnologies>
							{job.technologies}
						</WorkExperienceTechnologies>
						<WorkExperienceResponsibilities>
							{job.responsibilities}
						</WorkExperienceResponsibilities>
					</WorkExperienceContainer>
				))}
			</WorkExperienceWrapper>
		</div>
	);
}

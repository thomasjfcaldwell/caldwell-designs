import React from 'react';

import { Experience } from '../../constants/workexperince.js';

import { AiFillRightCircle } from 'react-icons/ai';

import {
	WorkExperienceWrapper,
	WorkExperienceContainer,
	Header,
	WorkExperienceDate,
	WorkExperiencePosition,
	DetailsHeader,
	WorkExperienceTechnologies,
	WorkExperienceTechnologiesList,
	WorkExperienceResponsibilities,
} from './JobsStyles';
import { Title, Line, TitleContainer } from '../Home/HomeStyle';

export default function Jobs() {
	// const iconStyles = {
	// 	padding: '4rem,',
	// };
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
						<WorkExperiencePosition>{job.position}</WorkExperiencePosition>
						<WorkExperienceDate>{job.date}</WorkExperienceDate>
						<DetailsHeader>Technologies & Responsibilities</DetailsHeader>
						<WorkExperienceTechnologies>
							<WorkExperienceTechnologiesList>
								{job.technologies[0]}
							</WorkExperienceTechnologiesList>
							<WorkExperienceTechnologiesList>
								{job.technologies[1]}
							</WorkExperienceTechnologiesList>
							<WorkExperienceTechnologiesList>
								{job.technologies[2]}
							</WorkExperienceTechnologiesList>
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

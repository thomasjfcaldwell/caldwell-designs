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
	const iconStyles = {
		margin:'5px 10px',
	};
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
						<DetailsHeader>Technologies & Responsibilities</DetailsHeader>
						<WorkExperienceTechnologies>
							<WorkExperienceTechnologiesList>
								<AiFillRightCircle size={14} style={iconStyles} />{' '}
								{job.technologies[0]}
							</WorkExperienceTechnologiesList>
							<WorkExperienceTechnologiesList>
								<AiFillRightCircle size={14} style={iconStyles} />{' '}
								{job.technologies[1]}
							</WorkExperienceTechnologiesList>
							<WorkExperienceTechnologiesList>
								<AiFillRightCircle size={14} style={iconStyles} />
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

import React from 'react';

import {
	EducationContainer,
	BootContainer,
	CertificateContainer,
	CollegeContainer,
	SchoolContainer,
	EducationTitle,
	EducationSubTitle,
	EducationIntro,
	EducationWrapper,
} from './EducationStyles';
import { TitleContainer, Title } from '../../Hero/Title/TitleStyles';

export default function Education() {
	return (
		<EducationWrapper>
			<TitleContainer>
				<Title>Education</Title>
			</TitleContainer>
			<EducationContainer>
				<BootContainer>
					<EducationTitle>SOFTWARE BOOTCAMP</EducationTitle>
					<EducationSubTitle>GENERAL ASSEMBLY - ONLINE</EducationSubTitle>
					<EducationIntro>
						13 weeks of full time tuition. Learning Front-end and Back-end Web
						Technologies
					</EducationIntro>
				</BootContainer>
				<CertificateContainer>
					<EducationTitle>DIGITAL ART CERTIFICATE</EducationTitle>
					<EducationSubTitle>GOLDENWEST COLLEGE - CA</EducationSubTitle>
					<EducationIntro>
						Completed over the space of two years. Units included Photoshop,
						Illustrator and design fundamentals.
					</EducationIntro>
				</CertificateContainer>
				<CollegeContainer>
					<EducationTitle>GNVQ MEDIA</EducationTitle>
					<EducationSubTitle>PLYMOUTH COLLEGE - UK</EducationSubTitle>
					<EducationIntro>
						After leaving School I completed this certificate
					</EducationIntro>
				</CollegeContainer>
				<SchoolContainer>
					<EducationTitle>9 GCSE(HIGH SCHOOL)</EducationTitle>
					<EducationSubTitle>SALTASH SCHOOL - UK</EducationSubTitle>
					<EducationIntro>
						British Secondary School - Core Subjects Passed including Maths,
						English and Science
					</EducationIntro>
				</SchoolContainer>
			</EducationContainer>
		</EducationWrapper>
	);
}

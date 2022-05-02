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
} from './EducationStyles';

import ListOfTech from './ListOfTech/ListOfTech';

export default function Education() {
	return (
		<EducationContainer>
			<BootContainer>
				<EducationTitle>SOFTWARE BOOTCAMP</EducationTitle>
				<EducationSubTitle>GENERAL ASSEMBLY</EducationSubTitle>
				<EducationIntro>
					13 weeks and 400 hours of in class learning and tuition.Completed 4
					projects using the following technologies
				</EducationIntro>
				<ListOfTech />
			</BootContainer>
			<CertificateContainer>
				<EducationTitle>DIGITAL ART CERTIFICATE</EducationTitle>
				<EducationSubTitle>GOLDENWEST COLLEGE</EducationSubTitle>
				<EducationIntro>
					30 unit certificate programProvided an introduction to graphic Design
					and illustration with a focus on Typography, applied design, digital
					Imaging And digital reproduction processes
				</EducationIntro>
			</CertificateContainer>
			<CollegeContainer>
				<EducationTitle>GNVQ MEDIA & COMMUNICATION</EducationTitle>
				<EducationSubTitle>PLYMOUTH COLLEGE - PLYMOUTH UK</EducationSubTitle>
			</CollegeContainer>
			<SchoolContainer>
				<EducationTitle>9 GCSE(HIGH SCHOOL)</EducationTitle>
				<EducationSubTitle>SALTASH SCHOOL - SALTASH UK</EducationSubTitle>
			</SchoolContainer>
		</EducationContainer>
	);
}

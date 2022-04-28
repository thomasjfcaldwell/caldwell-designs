import React from 'react';

import {
	EducationContainer,
	BootContainer,
	CertificateContainer,
	CollegeContainer,
	SchoolContainer,
	EducationTitle,
	EducationSubTitle,
} from './EducationStyles';

export default function Education() {
	return (
		<EducationContainer>
			<BootContainer>
				<EducationTitle>SOFTWARE BOOTCAMP</EducationTitle>
				<EducationSubTitle>GENERAL ASSEMBLY</EducationSubTitle>
			</BootContainer>
			<CertificateContainer>
				<EducationTitle>DIGITAL ART CERTIFICATE</EducationTitle>
				<EducationSubTitle>GOLDENWEST COLLEGE</EducationSubTitle>
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

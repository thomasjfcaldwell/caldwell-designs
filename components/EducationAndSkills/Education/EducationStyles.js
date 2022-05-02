import styled from 'styled-components';

export const EducationContainer = styled.section`
	padding-block: 1rem;
`;

export const BootContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
`;

export const CertificateContainer = styled(BootContainer)``;
export const CollegeContainer = styled(BootContainer)``;
export const SchoolContainer = styled(BootContainer)``;

export const EducationTitle = styled.h4`
	margin: 1rem auto;
	font-size: 1rem;
`;
export const EducationSubTitle = styled.h5`
	font-size: 0.8rem;
`;
export const EducationIntro = styled.p`
	padding: 1rem;
`;

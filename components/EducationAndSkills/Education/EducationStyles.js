import styled from 'styled-components';

export const EducationContainer = styled.section`
	padding-block: 1rem;
`;

export const BootContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 15px;
`;

export const CertificateContainer = styled(BootContainer)``;
export const CollegeContainer = styled(BootContainer)``;
export const SchoolContainer = styled(BootContainer)``;

export const EducationTitle = styled.h4`
	margin: 0.5rem auto;
	font-size: 0.9rem;
	font-weight: 900;
	color: ${(props) => props.theme.colors.highlight};
`;
export const EducationSubTitle = styled.h5`
	font-size: 0.7rem;
`;
export const EducationIntro = styled.p`
	font-size: 9px;
	text-align: center;
	margin-block: 20px;
	line-height: 1.4;
	background-color: ${(props) => props.theme.colors.highlight};
	padding: 1rem 0.5rem;
	border-radius: 10px;
`;

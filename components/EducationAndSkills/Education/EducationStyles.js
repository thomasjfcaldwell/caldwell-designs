import styled from 'styled-components';

export const EducationWrapper = styled.section`
	display: flex;
	flex-direction: column;
`;
export const EducationContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 0.5rem;
	padding: 0.2rem;
`;

export const BootContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => props.theme.colors.secondary};
	border-radius: 10px;
	@media ${(props) => props.theme.breakpoints.lg} {
	}
	@media ${(props) => props.theme.breakpoints.xl} {
	}
`;

export const CertificateContainer = styled(BootContainer)``;
export const CollegeContainer = styled(BootContainer)``;
export const SchoolContainer = styled(BootContainer)``;

export const EducationTitle = styled.h4`
	margin: 0.2rem auto;
	font-size: 0.7rem;
	font-weight: 900;
	padding-block: 0.5rem;
	color: ${(props) => props.theme.colors.primary};
`;
export const EducationSubTitle = styled.h5`
	font-size: 0.5rem;
	padding-block: 0.2rem;
	color: ${(props) => props.theme.colors.primary};
`;

export const EducationIntro = styled.p`
	font-size: 0.6rem;
	text-align: center;
	margin: 0.5rem 0;
	line-height: 1.4;
	color: ${(props) => props.theme.colors.primary};
	padding-inline: 1rem;
`;

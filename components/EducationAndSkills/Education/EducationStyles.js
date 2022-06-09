import styled from 'styled-components';

export const EducationWrapper = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	@media ${(props) => props.theme.breakpoints.md} {
		grid-column-start: span 4;
	}
`;
export const EducationContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 1.5rem;
	margin-top: 2rem;
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, 1fr);
		grid-gap: 0.5rem;
		margin-top: 0.2rem;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1fr;
	}
`;

export const BootContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => props.theme.colors.secondary};
	border-radius: 10px;
	grid-area: 1/1/2/2;
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-area: 1/1/2/2;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		grid-area: 1/1/2/2;
	}
`;

export const CertificateContainer = styled(BootContainer)`
	grid-area: 1/2/2/3;
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-area: 2/1/3/2;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		grid-area: 1/2/2/3;
	}
`;
export const CollegeContainer = styled(BootContainer)`
	grid-area: 2/1/3/2;
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-area: 3/1/4/2;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		grid-area: 1/3/2/4;
	}
`;
export const SchoolContainer = styled(BootContainer)`
	grid-area: 2/2/3/3;
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-area: 4/1/5/2;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		grid-area: 1/4/2/5;
	}
`;

export const EducationTitle = styled.h4`
	margin: 0.2rem auto;
	font-size: 0.7rem;
	font-weight: 900;
	padding-block: 0.5rem;
	color: ${(props) => props.theme.colors.primary};
	@media ${(props) => props.theme.breakpoints.xs} {
		font-size: 0.6rem;
	}
`;
export const EducationSubTitle = styled.h5`
	font-size: 0.5rem;
	padding-block: 0.2rem;
	color: ${(props) => props.theme.colors.primary};
	@media ${(props) => props.theme.breakpoints.lg} {
		padding: 0;
	}
`;

export const EducationIntro = styled.p`
	font-size: 0.6rem;
	text-align: center;
	margin: 0.5rem 0;
	line-height: 1.4;
	color: ${(props) => props.theme.colors.primary};
	padding-inline: 1rem;
	@media ${(props) => props.theme.breakpoints.lg} {
		margin: 0.2rem 0;
	}
`;

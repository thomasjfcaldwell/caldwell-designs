import styled from 'styled-components';

export const WorkExperienceContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	margin: auto;
	grid-gap: 20px;
	background-color: pink;
	@media ${(props) => props.theme.breakpoints.lg} {
		/* grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto 1fr 1fr; */
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		/* grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto 1fr 1fr; */
	}
`;

export const JobTitleContainer = styled.div`
	display: grid;
	grid-template-columns: max-content max-content;
	grid-template-rows: min-height;
	margin-left: 15px;
`;

export const YearText = styled.h3`
	font-size: 35px;
	grid-row-start: 1;
	@media ${(props) => props.theme.breakpoints.xl} {
		font-size: 40px;
	}
`;

export const CompanyAndPositionContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5px;
	margin-left: 2px;
`;
export const CompanyText = styled.h4`
	font-size: 13px;
	font-weight: 500;
	@media ${(props) => props.theme.breakpoints.xl} {
		font-size: 16px;
	}
`;
export const PositionText = styled.h5`
	font-size: 11px;
	font-weight: 300;
	letter-spacing: 0.7px;
	@media ${(props) => props.theme.breakpoints.xl} {
		font-size: 13px;
	}
`;

export const EasyAndQuickContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media ${(props) => props.theme.breakpoints.xl} {
		grid-row-start: 2;
		grid-column-start: 1;
		grid-column-end: 2;
	}
`;

export const EasyAndQuickImage = styled.img`
	width: 110px;
	grid-column-start: 1;
	grid-row-start: span 2;
`;

export const WowContainer = styled(EasyAndQuickContainer)`
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-column-start: 2;
		grid-column-end: 3;
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		grid-column-start: 2;
		grid-column-end: 3;
	}
`;

export const ECigContainer = styled(EasyAndQuickContainer)`
	@media ${(props) => props.theme.breakpoints.lg} {
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		grid-row-start: 3;
	}
`;

export const BurgerContainer = styled(EasyAndQuickContainer)`
	@media ${(props) => props.theme.breakpoints.lg} {
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		grid-row-start: 3;
		grid-column-start: 2;
		grid-column-end: 3;
	}
`;

export const JobBox = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	margin: 1rem auto;
	border-radius: 10px;
	width: 300px;
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 1fr 4fr;
	@media ${(props) => props.theme.breakpoints.xl} {
		width: 400px;
	}
`;
export const JobBoxHeader = styled.h5`
	color: ${(props) => props.theme.colors.header};
	text-transform: uppercase;
	text-align: center;
	margin: 1rem;
	font-size: 0.9rem;
`;
export const JobText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	grid-column-start: 2;
	grid-row-start: 2;
	padding: 0.1rem;
	line-height: 1.4;
	font-family: ${(props) => props.theme.fonts.main};
`;

export const WowJobBox = styled(JobBox)`
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 30px max-content;
	padding-block: 2rem;
	@media ${(props) => props.theme.breakpoints.xl} {
		width: 550px;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 20px 1fr 1fr;
	}
`;

export const WowJobBoxHeader = styled(JobBoxHeader)`
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 2;
	@media ${(props) => props.theme.breakpoints.xl} {
		grid-column-start: 2;
		grid-row-start: 1;
		grid-row-end: 2;
	}
`;

export const WowJobText = styled(JobText)`
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 3;
	grid-row-end: 4;
	padding-inline: 2rem;
	@media ${(props) => props.theme.breakpoints.xl} {
		grid-column-start: 2;
		grid-row-start: 2;
		grid-row-end: 4;
		margin-block: 2rem;
	}
`;

export const WowTabletImage = styled.img`
	width: 140px;
	margin: auto;
`;

export const WowDesktopImage = styled.img`
	grid-column-start: 2;
	width: 140px;
	margin: auto;
	@media ${(props) => props.theme.breakpoints.xl} {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 3;
		padding-inline: 1rem;
		width: 180px;
	}
`;

export const ECigJobBox = styled(JobBox)`
	display: flex;
	flex-direction: column;
	padding: 2rem;
`;
export const ECigJobBoxHeader = styled(JobBoxHeader)``;
export const ECigJobText = styled(JobText)``;
export const BurgerJobBox = styled(JobBox)`
	display: flex;
	flex-direction: column;
	padding: 2rem;
`;
export const BurgerJobBoxHeader = styled(JobBoxHeader)``;
export const BurgerJobText = styled(JobText)``;

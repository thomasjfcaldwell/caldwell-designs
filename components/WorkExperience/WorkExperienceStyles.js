import styled from 'styled-components';

export const WorkExperienceContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	margin: auto;
	grid-gap: 20px;
	/* justify-content: center; */
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
`;

export const CompanyAndPositionContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 7px;
	margin-left: 2px;
`;
export const CompanyText = styled.h4`
	font-size: 13px;
	font-weight: 500;
`;
export const PositionText = styled.h5`
	font-size: 11px;
	font-weight: 300;
	letter-spacing: 0.7px;
`;

export const EasyAndQuickContainer = styled.div``;

export const EasyAndQuickImage = styled.img`
	width: 110px;
	grid-column-start: 1;
	grid-row-start: span 2;
`;

export const WowContainer = styled(EasyAndQuickContainer)``;

export const ECigContainer = styled(EasyAndQuickContainer)``;

export const BurgerContainer = styled(EasyAndQuickContainer)``;

export const JobBox = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	margin: 1rem auto;
	border-radius: 10px;
	width: 300px;
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 1fr 4fr;
`;
export const JobBoxHeader = styled.h5`
	color: ${(props) => props.theme.colors.header};
`;
export const JobText = styled.p`
	color: ${(props) => props.theme.colors.header};
	grid-column-start: 2;
	grid-row-start: 2;
	padding: 0.5rem;
`;

export const WowJobBox = styled(JobBox)`
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 30px max-content;
	padding-block: 2rem;
`;

export const WowJobBoxHeader = styled(JobBoxHeader)`
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 2;
`;

export const WowJobText = styled(JobText)`
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 3;
	grid-row-end: 4;
`;

export const WowTabletImage = styled.img`
	width: 100px;
	margin: auto;
`;

export const WowDesktopImage = styled.img`
	grid-column-start: 2;
	width: 100px;
	margin: auto;
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

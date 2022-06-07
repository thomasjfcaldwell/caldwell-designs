import styled from 'styled-components';

// Work Experience Container
export const WorkExperienceContainer = styled.section`
	display: flex;
	flex-direction: column;
	/* margin: 2rem 0; */
	/* background-color: pink; */
`;

export const WorkExperienceRow = styled.div`
	display: grid;
	grid-template-columns: ${(props) =>
		props.primary ? '1fr 1fr 1fr' : '1fr 1fr'};
	grid-gap: 1rem;
	margin: ${(props) => (props.primary ? '3rem auto' : '0 auto')};
`;

//////
// Each Job Container

export const JobContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`;

/////////////

//Job Title Container

export const JobTitleContainer = styled.div`
	display: flex;
	/* background-color: green; */
	margin: 1rem 0;
`;

////////

export const YearText = styled.h3`
	font-size: 32px;
`;

// company and position Container
export const CompanyAndPositionContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5px;
	margin-left: 2px;
	padding-inline: 0.5rem;
`;
export const CompanyText = styled.h4``;
export const PositionText = styled.h5`
	font-size: 11px;
	font-weight: 300;
	letter-spacing: 0.7px;
`;

////////

/// Job Box Styles

export const JobBox = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 4fr;
	grid-template-rows: 50px 2fr 1fr;
	padding: 0.5rem 1rem;
	border-radius: 1rem;
`;
export const JobBoxBottom = styled(JobBox)`
	display: flex;
	flex-direction: column;
`;

export const JobBoxHeader = styled.h5`
	color: ${(props) => props.theme.colors.primary};
	text-transform: uppercase;
	text-align: center;
	font-size: 1.1rem;
	margin: 1rem 0;
`;
export const JobList = styled.ul`
	grid-column-start: 2;
	grid-row-start: 2;
	width: 100%;
	margin: ${(props) => (props.primary ? '1rem 0 0.5rem 0' : '0')};
	display: flex;
	flex-direction: column;
`;
export const JobListItem = styled.li`
	color: ${(props) => props.theme.colors.primary};
	font-size: 0.8rem;
	font-weight: 500;
	margin: ${(props) => (props.primary ? '0.5rem 0.5rem' : '1rem 1rem')};
`;
export const JobSoftWareContainer = styled.div`
	grid-row-start: 3;
	grid-column-start: 2;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const JobSoftWareHeader = styled.h5`
	color: ${(props) => props.theme.colors.primary};
	font-size: 0.9rem;
	font-family: ${(props) => props.theme.fonts.main};
	font-weight: 550;
	text-transform: uppercase;
	letter-spacing: 1px;
`;
export const JobSoftWareIconContainer = styled.div`
	display: flex;
	color: black;
	justify-content: space-between;
	width: 100%;
	padding: 0.5rem 0;
`;
export const JobSoftWareTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const JobSoftWareIconText = styled.p`
	font-size: 0.7rem;
	display: inline;
	margin: 0.7rem auto;
`;

// Images Styles

export const WowTabletImage = styled.img`
	width: 140px;
	margin: auto;
`;

export const WowDesktopImage = styled.img`
	width: 140px;
	margin: auto;
`;

export const EasyAndQuickImage = styled.img`
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 4;
	width: 220px;
	margin: 0 auto;
`;

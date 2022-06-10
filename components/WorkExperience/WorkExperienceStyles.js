import styled from 'styled-components';

// Work Experience Container
export const WorkExperienceContainer = styled.section`
	display: flex;
	flex-direction: column;
`;

export const WorkExperienceRow = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: ${(props) =>
		props.primary ? '1fr 1fr 1fr' : '1fr 1fr'};
	grid-gap: 1.2rem;
	padding: 0.5rem;
	margin: ${(props) => (props.primary ? '3rem auto' : '0 auto')};
	@media ${(props) => props.theme.breakpoints.lg} {
		padding: 0.5rem;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 0.5rem;
		grid-template-columns: ${(props) => (props.primary ? '1fr 1fr' : '1fr')};
		grid-template-rows: ${(props) => (props.primary ? '1fr auto' : '1fr')};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 1.5rem;
		grid-template-columns: 1fr;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		padding-inline: 1.5rem;
		grid-template-columns: 1fr;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		padding-inline: 1rem;
		grid-template-columns: 1fr;
	}
`;

//////
// Each Job Container

export const JobContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 95%;
		margin: 0 auto;
	}
`;

/////////////

//Job Title Container

export const JobTitleContainer = styled.div`
	display: flex;
	margin: 1rem 0;
`;

////////

export const YearText = styled.h3`
	font-size: 32px;
	@media ${(props) => props.theme.breakpoints.xxs} {
		font-size: 30px;
	}
`;

// company and position Container
export const CompanyAndPositionContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5px;
	margin-left: 2px;
	padding-inline: 0.5rem;
	@media ${(props) => props.theme.breakpoints.xxs} {
		margin-top: 1px;
	}
`;
export const CompanyText = styled.h4`
	@media ${(props) => props.theme.breakpoints.xxs} {
		font-size: 0.9rem;
	}
`;
export const PositionText = styled.h5`
	font-size: 11px;
	font-weight: 300;
	letter-spacing: 0.7px;
	@media ${(props) => props.theme.breakpoints.xxs} {
		font-size: 9px;
	}
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
	@media ${(props) => props.theme.breakpoints.lg} {
		padding: 0.1rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-template-columns: 45% 55%;
		grid-template-rows: auto 4fr 1fr;
		padding: 0.25rem 0.5rem;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		grid-template-columns: 45% 55%;
		grid-template-rows: auto 4fr 1fr;
		padding: 0.25rem 0.5rem;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		grid-template-columns: 45% 55%;
		grid-template-rows: auto 4fr 1fr;
		padding: 0.25rem 0.5rem;
	}
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
	@media ${(props) => props.theme.breakpoints.lg} {
		font-size: 0.9rem;
		margin: 2rem 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-column-start: 2;
		grid-row-start: 1;
		font-size: 0.9rem;
		margin: 0.2rem 0;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		grid-column-start: 2;
		grid-row-start: 1;
		font-size: 0.7rem;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		grid-column-start: 2;
		grid-row-start: 1;
		font-size: 0.7rem;
	}
`;
export const JobList = styled.ul`
	grid-column-start: 2;
	grid-row-start: 2;
	width: 100%;
	margin: ${(props) => (props.primary ? '0rem 0 0.5rem 0' : '0')};
	display: flex;
	flex-direction: column;
	list-style-type: none;
	@media ${(props) => props.theme.breakpoints.lg} {
		margin: ${(props) => (props.primary ? '0.2rem 0 0.5rem 0' : '0.2rem 0')};
	}
	@media ${(props) => props.theme.breakpoints.md} {
		margin: ${(props) => (props.primary ? '0.2rem 0 0.5rem 0' : '0.2rem 0')};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-column-start: 2;
		grid-row-start: 2;
		grid-row-end: 4;
		justify-content: space-evenly;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		grid-column-start: 2;
		grid-row-start: 2;
		grid-row-end: 4;
		justify-content: space-around;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		grid-column-start: 2;
		grid-row-start: 2;
		grid-row-end: 4;
		justify-content: space-around;
	}
`;
export const JobListItem = styled.li`
	color: ${(props) => props.theme.colors.primary};
	font-size: 0.8rem;
	font-weight: 500;
	letter-spacing: 0.07rem;
	margin: ${(props) => (props.primary ? '0.5rem 0.5rem' : '1rem 1rem')};
	@media ${(props) => props.theme.breakpoints.lg} {
		margin: ${(props) => (props.primary ? '0.5rem 0.5rem' : '0.75rem 0.75rem')};
	}
	@media ${(props) => props.theme.breakpoints.md} {
		margin: ${(props) =>
			props.primary ? '0 0.5rem 0.3rem 0.5rem' : '0.75rem 0.75rem'};
		font-size: ${(props) => (props.primary ? '0.6rem' : '0.9rem')};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin: ${(props) => (props.primary ? '0.5rem 0.1rem' : '0.2rem 0.1rem')};
		font-size: 0.75rem;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		margin: ${(props) => (props.primary ? '0.1rem' : '0')};
		font-size: 0.65rem;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		margin: ${(props) => (props.primary ? '0.1rem' : '0')};
		font-size: 0.6rem;
	}
`;
export const JobSoftWareContainer = styled.div`
	grid-row-start: 3;
	grid-column-start: 2;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 4;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 4;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 4;
	}
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
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.2rem 0;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		padding: 0.1rem 0;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		padding: 0.1rem 0;
	}
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
	@media ${(props) => props.theme.breakpoints.lg} {
		font-size: 0.6rem;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 0.6rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 0.6rem;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		font-size: 0.6rem;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		font-size: 0.5rem;
	}
`;

// Images Styles

export const JobImage = styled.img`
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 4;
	width: 220px;
	margin: 0 auto;
	@media ${(props) => props.theme.breakpoints.lg} {
		width: 250px;
		margin-top: 1rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		width: 100%;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		width: 100%;
	}
`;

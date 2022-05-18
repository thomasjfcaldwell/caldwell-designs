import styled from 'styled-components';

export const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 50px;
	margin-top: 2rem;
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-column-start: span 2;
		grid-row-start: 1;
		/* background-color: green; */
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		grid-column-start: 1;
		grid-column-end: 5;

		grid-row-start: 1;
		margin: 0;
		/* background-color: green; */
		width: 100%;
		margin-left: 209px;
	}
`;

export const ProjectTitle = styled.h2`
	/* font-size: 20px; */
	text-align: center;
	font-size: 3rem;
	@media ${(props) => props.theme.breakpoints.xl} {
		font-size: 4rem;
		padding: 1rem;
		grid-column-start: 3;
		grid-row-start: 1;
	}
`;

export const MoreProjectsLinkContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-column-start: 2;
		width: 100%;
		/* background-color: pink;
		align-items: flex-end; */
	}
`;

export const WorkExperienceTitle = styled(ProjectTitle)``;

export const WorkExperienceTitleContainer = styled(TitleContainer)`
	justify-content: center;
	@media ${(props) => props.theme.breakpoints.xl} {
		grid-row-start: 1;
		grid-column-start: 1;
	}
`;

export const ContactThomasTitle = styled(ProjectTitle)`
	font-size: 3rem;
`;
export const ContactThomasContainer = styled(TitleContainer)`
	justify-content: center;
`;

// export const MoreProjectsLink = styled.a`
// 	font-size: 9px;
// 	border: 2px ${(props) => props.theme.colors.secondary} solid;
// 	border-radius: 1px;
// 	padding: 2px 40px;
// 	display: inline;
// 	line-height: 1.4;
// 	margin-top: 1px;
// 	letter-spacing: 0.08rem;
// `;

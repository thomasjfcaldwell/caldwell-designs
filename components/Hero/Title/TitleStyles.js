import styled from 'styled-components';

export const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 50px;
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
		grid-column-start: span 2;
		grid-row-start: 1;
		/* background-color: green; */
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		grid-row-start: 1;
		grid-column-start: 4;
		grid-column-end: 8;
	}
`;

export const ProjectTitle = styled.h2`
	/* font-size: 20px; */
	text-align: center;
	font-size: 3rem;
`;

export const MoreProjectsLinkContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
		grid-column-start: 2;
		width: 100%;
		/* background-color: pink;
		align-items: flex-end; */
	}
`;

export const WorkExperienceTitle = styled(ProjectTitle)``;

export const WorkExperienceTitleContainer = styled(TitleContainer)`
	justify-content: center;
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

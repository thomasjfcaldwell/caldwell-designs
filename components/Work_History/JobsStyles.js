import styled from 'styled-components';

export const WorkExperienceWrapper = styled.article`
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 769px) {
		flex-direction: row;
		margin: 5em auto;
	}
`;

export const WorkExperienceContainer = styled.article`
	padding: 10px;
	display: flex;
	flex-direction: column;
	margin: 0 5px;
	@media only screen and (min-width: 769px) {
		width: 20%;
	}
	@media only screen and (max-width: 769px) {
		margin: 10px auto;
		width: 95%;
	}
`;

export const Header = styled.h1`
	font-size: 1.5em;
	text-align: center;
	font-weight: 600;
	height: 1em;
	@media only screen and (min-width: 320px) and (max-width: 1024px) {
		font-size: 0.9em;
		height: 2em;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		font-size: 0.9em;
	}
	@media only screen and (min-width: 1281px) {
		font-size: 0.8em;
		/* padding: 4em; */
	}
`;

export const WorkExperienceDate = styled.p`
	font-size: 0.7em;
	text-align: center;
	height: 2em;
`;

export const DetailsHeader = styled.h2`
	font-size: 0.7em;
	text-align: center;
	font-weight: 600;
	display: inline;
	height: 2em;
`;

export const WorkExperiencePosition = styled.p`
	text-align: center;
	font-weight: 200;
	color: red;
	height: 2em;
	@media only screen and (min-width: 769px) and (max-width: 1023px) {
		font-size: 0.75em;
	}
	@media only screen and (min-width: 1024px) and (max-width: 1280px) {
		font-size: 0.75em;
	}
	@media only screen and (min-width: 1281px) {
		font-size: 0.8em;
		/* padding: 4em; */
	}
`;

export const WorkExperienceTechnologies = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	list-style-type: none; /* Remove bullets */
	padding: 0; /* Remove padding */
	margin: 0 auto; /* Remove margins */
`;
export const WorkExperienceTechnologiesList = styled.li`
	font-size: 0.8em;
	font-weight: 450;
	margin: 0 2px;
	color: #e98074;
	@media only screen and (min-width: 1024px) and (max-width: 1280px) {
		font-size: 0.6em;
	}
`;

export const WorkExperienceResponsibilities = styled.p`
	font-size: 0.6em;
	line-height: 1.6em;
	padding: 5px;
	text-align: center;
	color: #727272;
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		font-size: 0.8em;
		line-height: 1.3em;
		margin: 0.4em 8em;
	}
`;

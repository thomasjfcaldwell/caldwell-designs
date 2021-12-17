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
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		font-size: 0.9em;
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
`;

export const DetailsHeader = styled.h2`
	font-size: 0.7em;
	margin: 5px auto;
	text-align: center;
	font-weight: 600;
	border-radius: 10px;
	border: solid 2px black;
	padding: 5px 3px;
	display: inline;
`;

export const WorkExperiencePosition = styled.p`
	text-align: center;
	font-size: 1.3em;
	font-weight: 200;
	color: red;
	margin-top: -10px;
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
	justify-content: space-evenly;
	list-style-type: none; /* Remove bullets */
	padding: 0; /* Remove padding */
	margin: 15px 0 0 0; /* Remove margins */
`;
export const WorkExperienceTechnologiesList = styled.li`
	font-size: 0.4em;
	font-weight: 700;
	margin: 0 10px;
	@media only screen and (min-width: 1024px) and (max-width: 1280px) {
		font-size: 0.3em;
		margin: 0;
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
		margin: 1em 4em;
	}
`;

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
		width: 90%;
	}
`;

export const Header = styled.h1`
	font-size: 0.8em;
	text-align: center;
	font-weight: 600;
`;

export const WorkExperienceDate = styled.p`
	font-size: 0.4em;
	text-align: center;
`;

export const DetailsHeader = styled.h2`
	font-size: 0.5em;
	margin: 0 auto;
	text-align: center;
	font-weight: 600;
	border-radius: 10px;
	border: solid 2px black;
	padding: 5px 3px;
	display: inline;
`;

export const WorkExperiencePosition = styled.p`
	text-align: center;
	font-size: 0.8em;
	font-weight: 500;
	color: red;
	margin-top: -10px;
	@media only screen and (min-width: 769px) {
		height: 20px;
	}
`;

export const WorkExperienceTechnologies = styled.p`
	margin: 10px auto;
	font-size: 0.5em;
	text-align: center;
	font-weight: 800;
`;

export const WorkExperienceResponsibilities = styled.p`
	font-size: 0.5em;
	line-height: 1.5em;
	padding: 5px;
	@media only screen and (min-width: 769px) {
		padding: 10px;
		font-size: 0.8em;
	}
`;

import styled from 'styled-components';

export const WorkExperienceWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-template-rows: 1fr;
	grid-column-gap: 1.5rem;
	grid-row-gap: 1rem;
	padding: 5rem;
	margin: 3rem 0;
	justify-content: center;
`;

export const WorkExperienceContainer = styled.div`
	display: flex;
	flex-direction: column;
	box-shadow: 0rem 0.3rem 10px rgba(0, 0, 0, 0.3);
	background: repeating-linear-gradient(
		#e98074,
		#e98074 12.9%,
		white 13.1%,
		white 100%
	);
	border-radius: 2em;
	border: 0.1rem solid #e98074;
`;

export const Header = styled.h1`
	font-size: 0.9rem;
	text-align: center;
	font-weight: 500;
	color: white;
	margin-top: 0.8rem;
	@media only screen and (min-width: 320px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const DetailsHeader = styled.h2`
	font-size: 0.7em;
	text-align: center;
	font-weight: 600;
	margin: 1rem auto;
`;
export const WorkExperienceDate = styled.p`
	font-size: 0.8rem;
	text-align: center;
	width: 75%;
	margin: 0 auto;
	display: inline-block;
`;

export const WorkExperiencePosition = styled.p`
	text-align: center;
	font-weight: 700;
	letter-spacing: 0.05rem;
	font-size: 0.8rem;
	margin-top: 1.5rem;
	text-transform: uppercase;
	@media only screen and (min-width: 769px) and (max-width: 1023px) {
	}
	@media only screen and (min-width: 1024px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const WorkExperienceTechnologies = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.2rem auto;
	align-items: center;
	width: 100%;
`;
export const WorkExperienceTechnologiesList = styled.p`
	margin: 0;
	padding: 0 0.5rem;
	font-size: 0.7rem;
	font-weight: 500;
`;

export const WorkExperienceResponsibilities = styled.p`
	font-size: 0.7rem;
	line-height: 1.6;
	text-align: center;
	margin: 0 auto;
	padding: 1rem;
	color: #727272;
	width: 70%;
`;

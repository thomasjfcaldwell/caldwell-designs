import styled from 'styled-components';

export const EducationContainer = styled.section`
	padding-block: 1rem;
	display:grid:
	grid-template-columns:1fr;
	grid-template-rows:2fr 2fr 1fr;
	/* grid-gap-rows:1rem; */

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
		grid-column-start: 6;
		grid-column-end: 9;
	}
		@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		}
`;

export const BootContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 15px;
	background-color: ${(props) => props.theme.colors.secondary};
	border-radius: 10px;
	/* grid-row-start: 1;
	grid-row-end: 3; */
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
		padding: 1rem 1.2rem;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		width: 60%;
		padding: 2rem;
		margin-inline: auto;
	}
`;

export const CertificateContainer = styled(BootContainer)`
	/* grid-row-start: 4;
	grid-row-end: 5; */
`;
export const CollegeContainer = styled(BootContainer)``;
export const SchoolContainer = styled(BootContainer)``;

export const EducationTitle = styled.h4`
	margin: 0.2rem auto;
	font-size: 0.8rem;
	font-weight: 900;
	padding-block: 0.5rem;
	color: ${(props) => props.theme.colors.primary};
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		font-size: 13px;
	}
`;
export const EducationSubTitle = styled.h5`
	font-size: 0.7rem;
	padding-block: 0.5rem;
	color: ${(props) => props.theme.colors.primary};
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		font-size: 11px;
	}
`;
export const EducationIntro = styled.p`
	font-size: 9px;
	text-align: center;
	margin: 0;
	line-height: 1.4;
	color: ${(props) => props.theme.colors.primary};
	padding: 1rem 0.5rem;
	border-radius: 10px;
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		font-size: 10px;
		padding-block: 1rem;
	}
`;

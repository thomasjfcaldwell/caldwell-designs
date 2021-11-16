import styled from 'styled-components';

export const TitleContainer = styled.div`
	display: flex;

	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		/* background-color: goldenrod; */
		margin: 20px 20px;
	}
`;

export const Title = styled.h1`
	font-weight: 600;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-size: 1.68em;

		/* text-align: center; */
	}
`;

export const UnderTitle = styled.p`
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-weight: 200;
		font-size: 1.9em;
		margin-top:-20px;
	}
`;

export const WorkWithThomasWrapper = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		display: flex;
		flex-direction: column;
	}
`;

export const ContentContainer = styled.div`
	display: flex;

	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		width: 100%;
		flex-direction: column;
		align-items: center;
		margin: 2em 0;
	}
	@media only screen and (min-device-width: 601px) and (max-device-width: 1200px) {
		width: 100%;
	}
`;

export const StepContainer = styled.div`
	display: flex;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		margin-top: 1em;
	}
`;

export const Step = styled.h5`
	text-align: center;
	font-weight: 600;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
	}
`;

export const RedContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Red = styled.div`
	width: 30px;
	height: 2px;
	background-color: #e98074;
`;

export const BlackContainer = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Black = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 150px;
		height: 2px;
		background-color: #8e8d8a;
	}
`;

export const DescriptionContainer = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 90%;
		display: flex;
		justify-content: center;
		margin: 1em 0;
	}
`;

export const Description = styled.p`
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-size: 0.6em;
		text-align: center;
	}
`;

export const HeadlineContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Headline = styled.p`
	background-color: #e85a4f;
	color: white;
	font-weight: 300;
	letter-spacing: 0.06em;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-size: 0.5em;
		text-align: center;
		padding: 0.5em 2em;
		border-radius: 25px 25px 0 0;
	}
`;

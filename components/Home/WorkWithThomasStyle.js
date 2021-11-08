import styled from 'styled-components';

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 7em auto;
`;

export const Title = styled.h1`
	/* text-align: center; */
	font-weight: 700;
	font-size: 4em;
	margin-left: -490px;
`;

export const UnderTitle = styled.p`
	/* text-align: center; */
	font-size: 3em;
	margin-top: -20px;
	margin-left: -490px;
	font-weight: 100;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		margin-left: -180px;
	}
`;

export const WorkWithThomasWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;

	justify-content: space-evenly;

	width: 100%;
	padding: 5em;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		flex-wrap: wrap;
		padding: 0;
	}
	
`;

export const ContentContainer = styled.div`
	width: 20%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 100%;
		margin-top: 3em;
	}
	@media only screen and (min-device-width: 813px) and (max-device-width: 1200px) {
		
	}
`;

export const StepContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 2em 0;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		margin: 0;
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

export const DescriptionContainer = styled.div`
	width: 75%;
	display: flex;
	justify-content: center;
	margin: 2em 0;
	height: 12em;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		height: 4em;
	}

`;

export const Description = styled.p`
	text-align: center;
	font-size: 0.9em;
	line-height: 1.7em;
	@media only screen and (min-device-width: 813px) and (max-device-width: 1200px) {
		font-size: 0.5em;
	}
`;

export const HeadlineContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Headline = styled.p`
	font-size: 0.9em;

	text-align: center;
	background-color: #e85a4f;
	color: white;
	font-weight: 300;
	letter-spacing: 0.06em;
	padding: 0.5em 2em;
	border-radius: 25px 25px 0 0;
`;

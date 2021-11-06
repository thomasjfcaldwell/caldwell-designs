import styled from 'styled-components';

export const WorkWithThomasWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	background-color: hotpink;
	padding: 10em;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		padding: 1em;
	}
`;

export const StepContainer = styled.div`
	display: flex;
	padding-right: 20px;
	width: 100%;
	margin: 2em 0;
	justify-content: space-around;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		margin: 0;
	}
`;

export const Step = styled.h5`
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
	}
`;

export const DescriptionContainer = styled.div`
	width: 100%;
	display: flex;
	margin: 3em 1em;
	justify-content: space-evenly;
	height: 10vh;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		margin: 0em 1.5em;
		height: 30vh;
	}
`;

export const Description = styled.p`
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-size: 0.5em;
		text-align: center;
	}
`;

export const HeadlineContainer = styled.div`
	width: 100%;
	display: flex;
	padding-right: 30px;
	justify-content: space-around;
`;

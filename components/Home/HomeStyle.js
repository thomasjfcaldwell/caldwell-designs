import styled from 'styled-components';

export const Title = styled.h1`
	font-weight: 600;
	line-height: 0.9em;
	margin-top: 2em;
	@media only screen and (min-device-width: 320px) and (max-device-width: 424px) {
		font-size: 2.1em;
		/* background-color: yellow; */
		padding-left: 20px;
	}
	@media only screen and (min-device-width: 425px) and (max-device-width: 480px) {
		font-size: 2.5em;
		padding-left: 20px;
	}

	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		/* background-color: yellow; */
		display: block;
		font-size: 2.5em;
		width: 50%;
		padding-left: 30px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		font-size: 2.9em;
		width: 40%;
		line-height: 0.9em;
		padding: 30px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		font-size: 2.9em;
		width: 80%;
		line-height: 0.9em;
		padding: 30px;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		font-size: 3.9em;
		width: 80%;
		line-height: 0.9em;
		padding: 30px;
	}
`;

export const Line = styled.div`
	background-color: #e98074;

	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 200px;
		height: 2px;
		margin-left: 25px;
		margin-top: -5px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 270px;
		height: 2px;
		margin-left: 35px;
		margin-top: -5px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 290px;
		height: 2px;
		margin-top: -35px;
		margin-left: 35px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 290px;
		height: 2px;
		margin-top: -35px;
		margin-left: 35px;
		margin-bottom: 35px;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 430px;
		height: 3px;
		background-color: #e98074;
		margin-top: -40px;
		margin-left: 35px;
	}
`;

export const TitleContainer = styled.div`
	width: 10%;
`;

import styled from 'styled-components';

export const Title = styled.h1`
	font-weight: 600;
	line-height: 0.8em;
	margin-top: 1.5em;
	font-size: 3.5em;
	@media only screen and (min-device-width: 80px) and (max-device-width: 424px) {
		padding-left: 40px;
	}
	@media only screen and (min-device-width: 425px) and (max-device-width: 480px) {
		/* font-size: 2.5em; */
		padding-left: 50px;
	}

	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		/* background-color: yellow; */
		display: block;
		/* font-size: 2.5em; */
		width: 50%;
		padding-left: 70px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		/* font-size: 2.9em; */
		width: 40%;
		line-height: 0.9em;
		padding-left: 80px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		/* font-size: 2.9em; */
		width: 80%;
		line-height: 0.9em;
		padding-left: 120px;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		/* font-size: 3.1em; */
		width: 80%;
		line-height: 0.9em;
		padding-left: 120px;
	}
`;

export const Line = styled.div`
	background-color: #e98074;

	@media only screen and (min-device-width: 80px) and (max-device-width: 424px) {
		width: 228px;
		height: 2px;
		margin-left: 47px;
		margin-top: -10px;
	}
	@media only screen and (min-device-width: 425px) and (max-device-width: 480px) {
		width: 228px;
		height: 2px;
		margin-left: 52px;
		margin-top: -11px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 228px;
		height: 2px;
		margin-left: 73px;
		margin-top: -10px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 228px;
		height: 2px;
		margin-left: 85px;
		margin-top: -13px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 230px;
		height: 2px;
		margin-top: -13px;
		margin-left: 126px;
		
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 225px;
		height: 3px;
		background-color: #e98074;
		margin-top: -14px;
		margin-left: 126px;
	}
`;

export const TitleContainer = styled.div`
	width: 10%;
`;

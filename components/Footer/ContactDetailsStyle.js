import styled from 'styled-components';

export const Container = styled.div`
	margin: 3em auto;
	display: flex;
	justify-content: space-around;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		padding: 0px 5px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		justify-content: space-evenly;
		padding: 0 30px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		flex-direction: column;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		flex-direction: column;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		flex-direction: column;
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		margin: 2em auto;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		margin: 2em auto;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		margin: 2em auto;
	}
`;

export const Text = styled.p`
	border: solid 2px #e85a4f;
	font-size: 0.5em;
	color: #e85a4f;
	padding: 5px 9px;
	border-radius: 7px;
	line-height: 15px;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		border-radius: 7px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		border-radius: 7px;
		font-size: 0.9em;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		border-radius: 7px;
		font-size: 0.9em;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		border-radius: 7px;
		font-size: 0.9em;
	}
`;

export const LinkText = styled.a`
	text-decoration: none;
	color: #1c1b1b;
	margin: 2px 0;
	font-size: 0.5em;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 8px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

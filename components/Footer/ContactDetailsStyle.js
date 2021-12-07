import styled from 'styled-components';

export const Container = styled.div`
	margin: 2em 0;
	display: flex;
	margin: 5em auto;
	justify-content: space-around;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		padding: 0px 20px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		justify-content: space-evenly;
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

export const LinkText = styled.a`
	text-decoration: none;
	color: #1c1b1b;
	margin: 5px 0;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 8px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		font-size: 14px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		font-size: 14px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

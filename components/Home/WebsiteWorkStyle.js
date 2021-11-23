import styled from 'styled-components';

export const Wrapper = styled.div`
	flex-direction: row;
	display: flex;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		flex-direction: column;
		flex-wrap: wrap;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		align-items: flex-start;
		/* background-color: lightseagreen; */
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const Container = styled.div`
	width: 50%;
	flex-direction: column;
	align-items: center;
	display: flex;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		justify-content: center;
		width: 100%;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 50%;
		background-color: honeydew;
		padding: 4em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const HeaderTextContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
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

export const HeaderText = styled.p`
	text-align: center;
	color: #1c1b1b;
	font-weight: 300;
	background-color: #e85a4f;
	text-transform: uppercase;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 0.8em;
		letter-spacing: 0.05em;
		padding: 4px 10px;
		border-radius: 8px;
		margin-bottom: 5em;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		padding: 8px 20px;
		border-radius: 10px;
		font-size: 0.7em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const SiteHeaderContainer = styled.div`
	display: flex;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
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

export const SiteHeader = styled.p`
	color: white;
	font-weight: 500;
	background-color: #e85a4f;
	border-radius: 0 2em 0 2em;
	padding: 0.5em 2em;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 0.6em;
		padding: 0.5em 1em;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		font-size: 0.6em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 100%;
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

export const TextContainer = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 90%;
		margin-top: 3em;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 100%;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const Text = styled.p`
	font-size: 0.8em;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 0.6em;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		font-size: 0.6em;
		text-align: center;
		margin: 10px 0;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const SiteLinkContainer = styled.div`
	display: flex;
	align-items: center;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		margin: 1em 0;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		margin: 2em 0;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const LinkText = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #e98074;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 0.5em;
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

import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;

export const Container = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const HeaderTextContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
	}
`;

export const HeaderText = styled.p`
	text-align: center;
	color: #1c1b1b;
	font-weight: 300;

	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-size: 0.8em;
		letter-spacing: 0.05em;
		background-color: #e85a4f;
		padding: 4px 10px;
		text-transform: uppercase;
		border-radius: 8px;
		margin-bottom: 5em;
	}
`;

export const SiteHeaderContainer = styled.div`
	display: flex;
`;

export const SiteHeader = styled.p`
	color: white;
	font-weight: 500;
	background-color: #e85a4f;
	border-radius: 0 2em 0 2em;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-size: 0.6em;
		padding: 0.5em 1em;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	width: 70%;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 100%;
	}
`;

export const TextContainer = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 90%;
		margin-top: 3em;
	}
`;

export const Text = styled.p`
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-size: 0.6em;
	}
`;

export const SiteLinkContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 1em 0;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	@media only screen and (min-device-width: 768px) and (max-device-width: 1200px) {
	}

	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		padding: 1em;
	}
`;

export const Line = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
		margin: -20px 20px;
		background-color: #e98074;
		width: 150px;
		height: 3px;
	}
`;

export const Title = styled.h1`
	/* color: white; */
	font-weight: 600;
	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		/* background-color: goldenrod; */
		margin: 20px 20px;
		font-size: 1.68em;
	}
`;
export const TextContainer = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
		width: 80%;
	}
`;

export const Text = styled.p`
	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
		font-size: 0.5em;
		line-height: 1.8em;
		margin: 3em 0;
		text-align: center;
	}
`;
export const ContentContainer = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 1em 0;
`;

export const Image = styled.img`
	border-radius: 50%;
	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
		width: 50%;
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		text-decoration: none;
		width: 90%;
		margin: 0 auto;
	}
`;

export const LinkButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LinkButton = styled.button`
	background-color: #e85a4f;
	border: solid 3px #e85a4f;
	color: white;

	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		/* margin: 0.5em 0.25em; */
		/* padding: 0.1em 0.0em; */
		margin: 0.2em 0;
		font-size: 0.5em;
		font-weight: 200;
		letter-spacing: 0.05em;
		border-radius: 15px;
	}
`;

export const LinkText = styled.p`
	text-decoration: none;
	color: #e98074;

	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		padding: 3em;
		font-size: 0.8em;
	}
`;

export const RequestContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

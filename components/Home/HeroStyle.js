import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	margin: auto;
`;

export const Title = styled.h1`
	margin-top: 2em;
	font-size: 3rem;
	font-weight: 600;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-size: 1.3rem;
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	align-items: center;
	width: 50%;
	justify-content: space-evenly;
	margin: 5rem 0;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		margin: 2rem 0;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const Image = styled.img`
	border-radius: 50%;
	width: 400px;
	height: 400px;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 250px;
		height: 250px;
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		/* flex-direction: row; */
		align-items: center;
		text-decoration: none;
		margin: 1em 0;
	}
`;

export const LinkButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LinkButton = styled.button`
	background-color: #e85a4f;
	border: none;
	width: 15rem;
	height: 2rem;
	color: white;
	margin: 0.5rem 0;
	border-radius: 2em;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		margin: 0.5em 0.25em;
	}
`;

export const LinkText = styled.p`
	text-decoration: none;
	color: #e98074;
	padding: 1em;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
	}
`;

export const TextContainer = styled.div`
	width: 75%;
	margin: 3rem 0;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		margin: 0;
	}
`;

export const Text = styled.p`
	text-align: center;
`;

export const RequestContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

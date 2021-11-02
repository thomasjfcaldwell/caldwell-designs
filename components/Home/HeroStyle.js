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
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-size: 1.3rem;
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-evenly;
	margin: 5rem 0;
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const Image = styled.img`
	border-radius: 25%;
	width: 300px;
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LinkButton = styled.button`
	background-color: #e85a4f;
	border: none;
	margin: 1em;
	padding: 0.9em;
	border-radius: 50%;
	color: white;
`;

export const TextContainer = styled.div`
	width: 75%;
	margin: 5rem 0;
`;

export const Text = styled.p`
	text-align: center;
`;

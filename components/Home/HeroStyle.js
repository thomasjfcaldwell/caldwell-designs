import styled from 'styled-components';

export const BackgroundDiv = styled.div`
	/* position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 20vh;
	background: #2c3e50;
	z-index: 0;
	transform: skewY(2deg);
	transform-origin: top right; */
`;

export const Wrapper = styled.section`
	display: flex;
	padding: 0 0.5rem;
	height: 80vh;
	@media only screen and (min-width: 320px) and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 2rem;
		margin: 0 auto;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		padding: 0;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		padding: 2rem;
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const HomeTitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 25%;
	@media only screen and (min-width: 320px) and (max-width: 768px) {
		width: 100%;
		margin: 0 auto;
	}
`;

export const HomeTitle = styled.h1`
	font-size: 6rem;
	width: 100%;
	font-weight: 700;
	line-height: 0.9;
	font-family: 'Poppins', sans-serif;
	color: #0b1628;
	@media only screen and (min-width: 320px) and (max-width: 1440px) {
		text-align: center;
		font-size: 4rem;
	}
`;

export const ContentContainer = styled.div`
display:flex;
justify-content: center;

	
	@media only screen and (min-width: 320px) and (max-width: 768px) {
		flex-direction: column;
		
	}

	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		
	}
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		
	}
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25%;
	@media only screen and (min-width: 320px) and (max-width: 768px) {
		width: 90%;
		margin: 3em auto;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const Image = styled.img`
	width: 90%;
	border-radius: 1rem;
	filter: drop-shadow(0 0 0.9rem rgba(0, 0, 0, 0.1));
	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}

	@media only screen and (min-width: 480px) and (max-width: 768px) {
		width: 50%;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const TextContainer = styled.article`
	/* background-color: red; */
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25%;

	@media only screen and (min-width: 320px) and (max-width: 768px) {
		width: 100%;
		margin: 0 auto;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const Text = styled.p`
	font-size: 1rem;
	filter: drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.4));
	padding: 2rem;
	background-color: white;
	line-height: 1.5;
	margin: 0;
	border-radius: 2.5rem;
	text-align: center;

	@media only screen and (min-width: 320px) and (max-width: 768px) {
		padding: 1rem;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		padding: 0.75rem;
		font-size: 0.8rem;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const LinksContainer = styled.div`
	/* background-color: blue; */
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media only screen and (min-width: 320px) and (max-width: 768px) {
		width: 100%;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const LinkButtonContainer = styled.div`
	margin: 1rem auto;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const LinkButton = styled.a`
	font-size: 1rem;
	padding: 0.5rem 1rem;
	background-color: #e85a4f;
	color: white;
	border-radius: 1rem;
	transition: all 1s ease-out;

	:hover {
		color: #e85a4f;
		background-color: white;
	}
	@media only screen and (min-width: 0px) and (max-width: 320px) {
	}

	@media only screen and (min-width: 321px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const RequestContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;
export const LinkText = styled.p`
	text-decoration: none;
	color: #8e8d8a;
	display: inline-block;
	font-size: 0.7em;
	margin-top: 3em;
	padding: 0.5em 1em;
	border-radius: 30px;
	border: solid #8e8d8a 1px;

	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

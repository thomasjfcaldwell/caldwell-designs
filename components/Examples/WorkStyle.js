import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 3rem;
	padding: 6rem;

	@media only screen and (min-width: 320px) and (max-width: 480px) {
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 2rem;
		padding: 1rem;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
		padding: 1rem;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		grid-gap: 1rem;
		padding: 1rem;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		grid-gap: 0.5rem;
		padding: 0.5rem;
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const ContentContainer = styled.div`
	border-radius: 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
	padding: 1rem;
	filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.4));

	@media only screen and (min-width: 320px) and (max-width: 480px) {
		width: 90%;
		margin: 0 auto;
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
export const WorkTitle = styled.h5`
	font-size: 0.8rem;
	color: white;
	background-color: #e98074;
	padding: 1rem 2rem;
	border-radius: 0.3rem;
	margin-top: 2rem;
	filter: drop-shadow(0px 0px 6px #8e8d8a);
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

export const ImageContainer = styled.div`
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
export const Image = styled.img`
	width: 70%;
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

export const Intro = styled.p`
	line-height: 1.7;
	font-size: 0.7rem;
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

export const IntroContainer = styled.div`
	width: 90%;
	margin-top: 1rem;
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

export const Technologies = styled.p`
	font-size: 0.8rem;
	text-align: center;
	color: #727272;
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

export const TechnologiesContainer = styled.div`
	width: 100%;
	margin-bottom: 1rem;
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

export const LinksContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 0.5em;
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

export const Text = styled.p`
	font-size: 0.75rem;
	color: #e98074;
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
`;

import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 767px) {
	}
	@media only screen and (min-width: 768px) and (max-width: 1023px) {
		flex-direction: row;
	}
	@media only screen and (min-width: 1024px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const ContentContainer = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* min-height: 70px; */
	margin: 0.25rem auto;

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
	font-size: 0.9rem;
	color: #e85a4f;
	display: flex;
	align-items: center;
	margin: 0;

	@media only screen and (min-width: 1024px) {
		font-size: 1.1rem;
	}
`;

export const LinkText = styled.a`
	text-decoration: none;
	color: #1c1b1b;
	font-size: 0.8rem;
	margin: 0;
	transition: all 0.5s ease;
	:hover {
		color: #e85a4f;
	}
	@media only screen and (min-width: 1024px) {
		font-size: 1.2rem;
	}
`;

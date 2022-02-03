import styled from 'styled-components';

export const Container = styled.section`
	margin: 1em auto;
	display: flex;
	justify-content: space-around;
	width: 100%;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		padding: 0px 5px;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		justify-content: space-evenly;
		padding: 0 30px;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		flex-direction: column;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		flex-direction: column;
	}
	@media only screen and (min-width: 1281px) {
		flex-direction: column;
	}
`;

export const ContentContainer = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media only screen and (min-width: 320px) and (max-width: 480px) {
		margin: 2em auto;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		margin: 2em auto;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		margin: 0.6em auto;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		margin: 0.6em auto;
	}
	@media only screen and (min-width: 1281px) {
		margin: 0.6em auto;
	}
`;

export const Text = styled.p`
	font-size: 0.6rem;
	color: #e85a4f;
	line-height: 15px;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		border-radius: 7px;
		/* font-size: 0.9em; */
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		border-radius: 7px;
		/* font-size: 0.9em; */
	}
	@media only screen and (min-width: 1281px) {
		border-radius: 7px;
		/* font-size: 0.9em; */
	}
`;

export const LinkText = styled.a`
	text-decoration: none;
	color: #1c1b1b;
	font-size: 1rem;
	margin-top: -1.5rem;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		font-size: 0.5em;
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

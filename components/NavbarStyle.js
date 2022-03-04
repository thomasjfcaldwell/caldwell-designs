import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 90px;

	@media only screen and (min-width: 80px) and (max-width: 480px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-decoration: none;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		/* max-height: 30vh; */
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		align-items: center;
		justify-content: space-between;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		/* align-items: center; */
		justify-content: space-around;
	}
	@media only screen and (min-width: 1281px) {
		align-items: center;
		justify-content: space-around;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		margin: 1rem 0;
	}
`;

export const Title = styled.div`
	margin: 0;
	cursor: pointer;
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		margin: 1rem 2rem;
	}
`;
export const LinkContainer = styled.div`
	display: flex;

	@media only screen and (min-width: 320px) and (max-width: 480px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
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

export const LinkText = styled.a`
	text-decoration: none;
	color: #e85a4f;
	display: inline-block;
	margin: 0 1.5rem;
	background-color: transparent;
	line-height: 18px;
	transition: all 0.5s ease-out;
	font-size: 1rem;
	&:hover {
		color: #727272;
		cursor: pointer;
	}
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		margin: 0.5rem 0;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		font-size: 0.6em;
	}
	@media only screen and (min-width: 1281px) {
		font-size: 0.8em;
	}
`;

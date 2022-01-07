import styled from 'styled-components';

export const Container = styled.div`
	display: flex;

	@media only screen and (min-width: 80px) and (max-width: 480px) {
		height: 50vh;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		margin: 1em 0;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: 50px;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		align-items: center;
		justify-content: space-between;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		align-items: center;
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
	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		margin: 20px 70px;
		/* width: 50%; */
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;
// export const Title = styled.h1`
// 	font-weight: 200;
// 	@media only screen and (min-width: 320px) and (max-width: 480px) {
// 		font-size: 1.4rem;
// 		margin-top: 5px;
// 	}
// 	@media only screen and (min-width: 481px) and (max-width: 768px) {
// 	}
// 	@media only screen and (min-width: 769px) and (max-width: 1024px) {
// 	}
// 	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
// 	}
// 	@media only screen and (min-width: 1281px) {
// 	}
// `;

export const LinkContainer = styled.div`
	display: flex;

	@media only screen and (min-width: 320px) and (max-width: 480px) {
		margin: 1em 0em;
		
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

export const LinkText = styled.button`
	text-decoration: none;
	color: #e85a4f;
	display: inline-block;
	padding: 0.3em 0.7em;
	border-radius: 30px;
	border: solid #e85a4f 1.5px;
	margin: 0 20px;
	background-color: transparent;
	line-height: 18px;
	&:hover {
		color: #727272;
		border: solid #727272 1.5px;
	}
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		font-size: 0.6em;
		margin: 0 0.5em;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		font-size: 0.6em;
		margin: 0 0.9em;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		font-size: 0.6em;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		font-size: 0.6em;
		padding: 2em;
	}
	@media only screen and (min-width: 1281px) {
		font-size: 0.8em;
		/* padding: 4em; */
	}
`;

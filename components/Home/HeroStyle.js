import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		align-items: center;
		text-decoration: none;
		flex-direction: column;
		/* padding: 1em; */
		/* background-color: blue; */
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		flex-direction: column;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		margin: 2em auto;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		align-items: center;
		text-decoration: none;
		/* padding: 1em; */
	}
	@media only screen and (min-width: 1281px) {
		text-decoration: none;
		padding: 4em;
	}
`;

export const TextContainer = styled.article`
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
	font-size: 0.5em;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		font-size: 0.5em;
		line-height: 1.8em;
		text-align: center;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		font-size: 0.6em;
		line-height: 1.5em;
		text-align: center;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		font-size: 0.6em;
		line-height: 1.5em;
		text-align: center;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		font-size: 0.7em;
		line-height: 1.5em;
		text-align: center;
	}
	@media only screen and (min-width: 1281px) {
		font-size: 0.9em;
		line-height: 1.7em;
		text-align: center;
	}
`;
export const ContentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		flex-direction: column;
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
	margin: 3rem 0;
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
	border-radius: 50%;
	filter: drop-shadow(0 0 0.7rem rgba(0, 0, 0, 0.5));
	width: 20rem;

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
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		text-decoration: none;
		width: 100%;
		margin: 0 auto;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		margin: 0px auto;
		padding: 1em;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		flex-direction: column;
		align-items: center;
		margin: 0px auto;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		flex-direction: column;
	}
	@media only screen and (min-width: 1281px) {
		flex-direction: column;
	}
`;

export const LinkButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		margin: 0.2em;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		margin: 0.2em;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		margin: 0.3em;
		width: 500px;
	}
	@media only screen and (min-width: 1281px) {
		margin: 0.5em;
		width: 400px;
	}
`;

export const LinkButton = styled.a`
	text-decoration: none;
	color: #e85a4f;
	display: inline-block;
	font-size: 0.5em;
	padding: 0.5em 1em;
	border-radius: 30px;
	border: solid #e98074 1px;
	transition: all 1s;
	:hover {
		background-color: #e85a4f;
		color: white;
	}
	@media only screen and (min-width: 0px) and (max-width: 320px) {
		font-size: 0.5em;
		text-align: center;
	}

	@media only screen and (min-width: 321px) and (max-width: 480px) {
		font-size: 0.6em;
		line-height: 10px;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		font-size: 0.8em;
		line-height: 14px;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		font-size: 0.9em;
		letter-spacing: 0.04em;
		line-height: 12px;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		font-size: 0.8em;
		letter-spacing: 0.04em;
		line-height: 12px;
	}
	@media only screen and (min-width: 1281px) {
		font-size: 0.9em;
		letter-spacing: 0.04em;
		line-height: 12px;
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

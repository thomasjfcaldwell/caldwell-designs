import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		align-items: center;
		text-decoration: none;
		/* padding: 1em; */
		/* background-color: blue; */
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		flex-direction: column;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		margin: 2em auto;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		align-items: center;
		text-decoration: none;
		padding: 1em;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		align-items: center;
		text-decoration: none;
		padding: 4em;
	}
`;

export const TextContainer = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 80%;
		margin: 1em 0;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 90%;
		margin: 1.5em auto;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		margin: 2em auto;
		width: 75%;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 80%;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 60%;
		margin: 3em auto;
	}
`;

export const Text = styled.p`
	font-size: 0.5em;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 0.5em;
		line-height: 1.8em;
		text-align: center;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		font-size: 0.7em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		font-size: 0.6em;
		line-height: 1.5em;
		text-align: center;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		font-size: 0.7em;
		line-height: 1.5em;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		font-size: 1em;
		line-height: 1.7em;
	}
`;
export const ContentContainer = styled.div`
	display: flex;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		flex-direction: column;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		flex-direction: row;
		align-items: center;
		/* background-color: aquamarine; */
		justify-content: center;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		align-items: center;
		justify-content: center;
		width: 80%;
		margin: 0 auto;
		padding: 30px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		align-items: center;
		justify-content: space-around;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		align-items: center;
		justify-content: space-around;
		margin: 2em auto;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		justify-content: center;
		margin: 1em 0;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		justify-content: center;
		width: 50%;
		margin: 0.5em 0;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 50%;
		justify-content: center;
		align-items: center;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 40%;
		justify-content: center;
		align-items: center;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 40%;
		justify-content: center;
		align-items: center;
	}
`;

export const Image = styled.img`
	border-radius: 50%;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 60%;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 70%;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 70%;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 100%;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 90%;
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		text-decoration: none;
		width: 100%;
		margin: 0 auto;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		flex-direction: column;
		align-items: center;
		margin: 0px auto;
		padding: 1em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		flex-direction: column;
		align-items: center;
		margin: 0px auto;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		flex-direction: column;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		flex-direction: column;
	}
`;

export const LinkButtonContainer = styled.div`
	/* display: flex;
	justify-content: center;
	align-items: center; */
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		margin: 0.2em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		margin: 0.2em;
		/* background-color: lightgoldenrodyellow; */
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		margin: 0.5em;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		margin: 1em;
	}
`;

export const LinkButton = styled.button`
	background-color: #e85a4f;
	border: solid 1px #e85a4f;
	color: white;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	display: inline-block;
	:hover {
		background-color: white;
		color: #727272;
		border: none;
		letter-spacing: 0.1em;
		font-weight: 800;
	}
	@media only screen and (min-device-width: 0px) and (max-device-width: 320px) {
		border-radius: 10px;
		font-size: 0.4em;
		padding: 5px 8px;
		line-height: 12px;
		text-align: center;
	}

	@media only screen and (min-device-width: 321px) and (max-device-width: 480px) {
		border-radius: 15px;
		font-size: 0.4em;
		padding: 5px 10px;
		line-height: 10px;
		margin-top: 10px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		border-radius: 20px;
		font-size: 0.5em;
		letter-spacing: 0.04em;
		line-height: 14px;
		padding: 5px 10px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		border-radius: 20px;
		font-size: 0.6em;
		letter-spacing: 0.04em;
		line-height: 12px;
		padding: 8px 15px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		border-radius: 20px;
		font-size: 0.8em;
		letter-spacing: 0.04em;
		line-height: 12px;
		padding: 8px 15px;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		border-radius: 20px;
		font-size: 0.8em;
		letter-spacing: 0.04em;
		line-height: 12px;
		padding: 8px 15px;
	}
`;

export const RequestContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;
export const LinkText = styled.p`
	text-decoration: none;
	color: #e98074;
	display: inline-block;
	font-size: 0.7em;
	margin-top: 4em;
	padding: 0.5em 1em;
	background-color: #727272;
	border-radius: 5px;

	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

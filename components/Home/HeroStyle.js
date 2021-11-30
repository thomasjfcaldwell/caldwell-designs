import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		padding: 1em;
		/* background-color: blue; */
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		flex-direction: column;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		background-color: red;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		background-color: yellow;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		background-color: orange;
	}
`;
export const Title = styled.h1`
	font-weight: 600;

	@media only screen and (min-device-width: 320px) and (max-device-width: 424px) {
		font-size: 2.1em;
		/* background-color: yellow; */
		padding-left: 20px;
		line-height: 0.9em;
	}
	@media only screen and (min-device-width: 425px) and (max-device-width: 480px) {
		font-size: 2.5em;
		line-height: 0.9em;
		padding-left: 20px;
	}

	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		/* background-color: yellow; */
		display: block;
		font-size: 2.5em;
		width: 50%;
		margin-top: 1em;
		line-height: 0.9em;
		padding-left: 30px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const Line = styled.div`
	background-color: #e98074;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 200px;
		height: 2px;
		margin-top: -5px;
		margin-left: 25px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 270px;
		height: 2px;
		margin-top: -5px;
		margin-left: 35px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 430px;
		height: 3px;
		background-color: #e98074;
		margin: 0px 0 0 90px;
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
`;

export const Text = styled.p`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 0.5em;
		line-height: 1.8em;
		text-align: center;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		font-size: 0.7em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
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
		justify-content: space-around;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
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
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
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
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
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
		background-color: pink;
		justify-content: flex-start;
		align-items: center;
		margin: 0px auto;
		padding: 2em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const LinkButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		margin: 0.2em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const LinkButton = styled.button`
	background-color: #e85a4f;
	border: solid 3px #e85a4f;
	color: white;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	display: flex;
	:hover {
		background-color: white;
		color: #727272;
		border: none;
		letter-spacing: 0.2em;
	}
	@media only screen and (min-device-width: 0px) and (max-device-width: 320px) {
		border-radius: 15px;
		font-size: 0.5em;
		padding: 5px 0px;
	}

	@media only screen and (min-device-width: 321px) and (max-device-width: 480px) {
		border-radius: 15px;
		font-size: 0.5em;
		padding: 5px 10px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		border-radius: 20px;
		font-size: 0.7em;
		letter-spacing: 0.04em;
		line-height: 12px;
		padding: 5px 10px;
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

	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		padding: 3em;
		font-size: 0.5em;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		padding: 3em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
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

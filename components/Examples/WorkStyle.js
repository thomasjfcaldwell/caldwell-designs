import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		padding: 20px 0px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		margin: 4em auto;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: transparent;
	margin: 1em auto;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 90%;
		border-radius: 20px;
		border: solid 1px #e98074;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 80%;
		border-radius: 20px;
		border: solid 1px #e98074;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 75%;
		border-radius: 20px;
		border: solid 1px #e98074;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 70%;
		border-radius: 20px;
		border: solid 1px #e98074;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 60%;
		border-radius: 20px;
		border: solid 1px #e98074;
	}
`;
export const Title = styled.h2`
	color: white;
	background-color: #e98074;
	margin-top: 2em;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 15px;
		padding: 6px 12px;
		border-radius: 10px 0;
		filter: drop-shadow(0px 0px 6px #8e8d8a);
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		font-size: 16px;
		padding: 12px 24px;
		border-radius: 20px 0;
		filter: drop-shadow(0px 0px 4px #8e8d8a);
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		font-size: 17px;
		padding: 12px 24px;
		border-radius: 20px 0;
		filter: drop-shadow(0px 0px 6px #8e8d8a);
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		font-size: 17px;
		padding: 12px 24px;
		border-radius: 20px 0;
		filter: drop-shadow(0px 0px 6px #8e8d8a);
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		font-size: 17px;
		padding: 12px 24px;
		border-radius: 20px 0;
		filter: drop-shadow(0px 0px 6px #8e8d8a);
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 100%;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 50%;
		align-items: center;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 50%;
		align-items: center;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 50%;
	}
`;
export const Image = styled.img`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 70%;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 50%;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 100%;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 70%;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 90%;
	}
`;

export const Intro = styled.p`
	line-height: 1.7em;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 10px;
		text-align: center;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		font-size: 11px;
		margin: 1em auto;
		padding: 15px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		font-size: 12px;
		margin: 2em auto;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		font-size: 14px;
		margin: 1em auto;
		padding: 15px;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		font-size: 14px;
		margin: 1em auto;
		padding: 20px;
	}
`;

export const IntroContainer = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 80%;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 90%;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 100%;
	}
`;

export const Technologies = styled.p`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 7px;
		text-align: center;
		color: #727272;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		font-size: 10px;
		text-align: center;
		color: #727272;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		font-size: 10px;
		text-align: center;
		color: #727272;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		font-size: 10px;
		text-align: center;
		color: #727272;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		font-size: 12px;
		text-align: center;
		color: #727272;
	}
`;

export const TechnologiesContainer = styled.div`
	width: 75%;
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

export const LinksContainer = styled.div`
	display: flex;
	justify-content: space-around;
	margin-bottom: 1.5em;
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

export const Text = styled.p`
	font-size: 0.4em;
	color: #e98074;
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		font-size: 0.9em;
	}
`;

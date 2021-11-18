import styled from 'styled-components';

export const Wrapper = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px 0px;
	}
`;

export const ContentContainer = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 90%;
		border-radius: 20px;
		border: solid 1px #e98074;
		background-color: transparent;
		
	}
`;
export const Title = styled.h2`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		font-size: 15px;
		padding: 6px 12px;
		background-color: #e98074;
		margin-top: 2em;
		border-radius: 10px 0;
		color: white;
		filter: drop-shadow(0px 0px 6px #8e8d8a);
	}
`;

export const ImageContainer = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		display: flex;
		justify-content: center;
		margin: 3em 0;
	}
`;
export const Image = styled.img`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		width: 70%;
	}
`;

export const Intro = styled.p`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		font-size: 10px;
		text-align: center;
	}
`;

export const IntroContainer = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		width: 80%;
	}
`;

export const Technologies = styled.p`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		font-size: 7px;
		text-align: center;
		color: #727272;
	}
`;

export const TechnologiesContainer = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		width: 50%;
	}
`;

import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: grid;
	grid-template-columns: 130px 1fr;
	grid-template-rows: 20px 130px 20px 20px;
	margin: 2rem auto;
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
		grid-column-start: 2;
		grid-row-start: 2;
		grid-row-end: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		grid-column-start: 10;
		grid-column-end: 13;
		grid-row-start: 1;
		grid-row-end: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
`;

export const AboutTitle = styled.h2`
	font-size: 3rem;
	text-align: center;
`;

export const AboutImage = styled.img`
	margin-top: 10px;
	width: 120px;
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		width: 160px;
		margin: 20px auto;
	}
`;

export const AboutText = styled.p`
	font-size: 13px;
	font-weight: 300;
	grid-column-start: 2;
	line-height: 1.4;
	grid-row-start: 1;
	grid-row-end: 2;
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		font-size: 14px;
	}
`;

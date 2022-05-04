import styled from 'styled-components';

export const Container = styled.div`
	width: 85%;
	margin-inline: auto;
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 50px 1fr;
		margin: 1rem auto 5rem auto;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: 1fr;
		padding: 3rem;
	}
`;

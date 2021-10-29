import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	padding: 1rem;
	padding-top: 2rem;
	@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
		flex-direction: column;
		background-color: pink;
	}
`;

export const TitleContainer = styled.div`
	width: 50%;
	@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
		width: 100%;
		display: flex;
		justify-content: center;
	}
`;
export const Title = styled.h1`
	display: flex;
	margin-top: -10px;
	color: red;
`;

import styled from 'styled-components';

export const MarketingMaterialsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	background-color: purple;
	flex-wrap: wrap;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		flex-direction: column;
		justify-content: center;
		align-items:center;
	}
`;

export const FlyerContainer = styled.div`
	background-color: blue;
	width: 30%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 100%;
	}
`;

export const EmailContainer = styled.div`
	background-color: pink;
	width: 30%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 100%;
	}
`;

export const BannerContainer = styled.div`
	background-color: slategray;
	width: 30%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 100%;
	}
`;

export const HeaderContainer = styled.div`
	margin: 2em;
	background-color: green;
	width: 80%;
	display: flex;
	justify-content: center;
`;

export const Header = styled.h3`
	text-align: center;
	background-color: #e85a4f;
	color: white;
	font-weight: 200;
	margin-top: 10px;
	text-transform: uppercase;
	padding: 0.25em 1em;
	border-radius: 0 25px 0 25px;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-size: 1.2em;
	}
`;

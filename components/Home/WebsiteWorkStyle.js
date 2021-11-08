import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: 5em auto;
	align-items: flex-start;
`;

export const CommerceContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50%;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 100%;
	}
`;

export const CommerceHeaderContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const CommerceHeaderTextContainer = styled.div`
	margin: 0 1em;
	display: flex;
`;

export const CommerceHeaderText = styled.p`
	text-align: center;
	/* margin-top: -10px; */
	background-color: #727272;
	padding: 0.25em 1em;
	border-radius: 25px;
	color: white;
	font-weight: 200;
	letter-spacing: 0.04em;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-size: 0.7em;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	width: 70%;
	margin: 2em 0;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 100%;
	}
`;

export const PicnicContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50%;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 100%;
	}
`;

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	filter: drop-shadow(0 0 0.3rem #e98074);
`;

export const Header = styled.p`
	font-size: 1.2em;
	text-align: center;
	background-color: #e85a4f;
	color: white;
	font-weight: 600;
	text-transform: uppercase;
	padding: 0.25em 1em;
	border-radius: 0 25px 0 25px;
`;

export const SiteLinkContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 2em 0;
`;

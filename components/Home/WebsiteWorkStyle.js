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
		width:100%
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

export const CommerceHeaderText = styled.h5`
	text-align: center;
	margin-top: -10px;
	background-color: #727272;
	padding: 0.25em 1em;
	border-radius: 25px;
	color: white;
	font-weight: 300;
	text-transform: uppercase;
	letter-spacing: 0.09em;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-size:0.7em;
	}
`;

export const CommerceImagesContainer = styled.div`
	display: flex;
	width: 50%;
	margin: 2em 0;
	border: solid;
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

export const PicnicHeaderContainer = styled.div`
	display: flex;
	margin: 2em 0;
`;

export const PicnicHeader = styled.h5`
	text-align: center;
	background-color: #e85a4f;
	color: white;
	font-weight: 600;
	text-transform: uppercase;
	padding: 0.25em 1em;
	border-radius: 0 25px 0 25px;
`;

export const PicnicImageContainer = styled.div`
	display: flex;
	width: 50%;
	margin: 2em 0;
	border: solid;
	
`;

export const SiteLinkContainer = styled.div`
	display: flex;
	align-items: center;
`;

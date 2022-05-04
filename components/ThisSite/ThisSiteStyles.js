import styled from 'styled-components';

export const ThisSiteContainer = styled.section`
	background-color: ${(props) => props.theme.colors.secondary};
	width: 90%;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		position: relative;
		top: -500px;
		width: 80%;
		left: 70px;
	}
`;

export const ThisSiteHeader = styled.h5`
	margin: 10px 5px;
	color: ${(props) => props.theme.colors.primary};
	font-size: 15px;
	text-transform: uppercase;
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		font-size: 20px;
	}
`;
export const ThisSiteImage = styled.img`
	width: 100%;
	padding-inline: 1rem;
	border-radius: 10px;
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		width: 80%;
		margin: 0 auto;
	}
`;
export const ThisSiteText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	margin: 10px 4px;
	color: ${(props) => props.theme.colors.primary};
	font-size: 9px;
	text-align: justify;
	:after {
		content: '';
		display: inline-block;
		width: 100%;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		width: 90%;
		margin-inline: auto;
		font-size: 11px;
		text-align: left;
	}
`;
export const ThisSiteLink = styled.a`
	display: flex;
	justify-content: center;
	text-decoration: none;
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		padding: 2rem;
	}
`;

export const ThisSiteLinkIcon = styled.div``;
export const ThisSiteLinkTextContainer = styled.div``;
export const ThisSiteLinkTitle = styled.h5``;

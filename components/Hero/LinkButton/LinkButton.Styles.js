import styled from 'styled-components';

export const LinkButton = styled.a`
	font-size: 9px;
	border: 2px ${(props) => props.theme.colors.secondary} solid;
	border-radius: 1px;
	padding: 2px 40px;
	display: inline;
	line-height: 1.4;
	margin-top: 1px;
	letter-spacing: 0.08rem;
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		font-size: 12px;
	}
`;

export const WorkButton = styled(LinkButton)`
	text-align: center;
	font-size: 11px;
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
		width: 90%;
		position: relative;
		top: 270px;
		left: 150px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1480px) and (-webkit-min-device-pixel-ratio: 1) {
		width: 90%;
		position: relative;
		left: 174px;
		top: -50px;
		font-size: 12px;
	}
`;

export const AboutLink = styled(LinkButton)`
	padding: 2px 0;
	width: 155px;
	text-align: center;
	grid-row-start: 3;
	grid-row-end: 4;
	grid-column-start: 2;
	margin: 2rem auto;
`;

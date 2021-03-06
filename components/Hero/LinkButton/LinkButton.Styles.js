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
	@media ${(props) => props.theme.breakpoints.lg} {
		font-size: 12px;
	}
`;

export const WorkButton = styled(LinkButton)`
	text-align: center;
	font-size: 11px;
	@media ${(props) => props.theme.breakpoints.lg} {
		width: 90%;
		position: relative;
		top: 270px;
		left: 150px;
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		grid-row-start: 3;
		grid-column-start: span 4;
		width: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
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

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
`;

export const WorkButton = styled(LinkButton)`
	text-align: center;
	font-size: 11px;
`;

export const AboutLink = styled(LinkButton)`
	padding: 2px 0;
	width: 150px;
	text-align: center;
	grid-row-start: 3;
	grid-column-start: 2;
	margin: auto;
`;

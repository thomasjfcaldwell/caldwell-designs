import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: grid;
	width: 100%;
	grid-template: 7fr 1fr / 1fr 1fr;
	grid-area: 1/2/4/3;
	padding: 2rem;

	@media ${(props) => props.theme.breakpoints.md} {
		grid-area: 1/2/2/3;
		justify-content: center;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-area: 1/2/2/3;
	}
`;

export const AboutImage = styled.img`
	grid-area: 1/1/2/2;
	width: 100%;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 40%;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 40%;
	}
`;

export const AboutText = styled.p`
	font-size: 0.75rem;
	font-weight: 400;
	line-height: 1.5;
	margin: 1.5rem;
	width: 100%;
	grid-area: 1/2/2/3;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 0.8rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 0.8rem;
	}
`;

export const AboutLink = styled.a`
	font-size: 0.6rem;
	border: 2px ${(props) => props.theme.colors.secondary} solid;
	border-radius: 0.3rem;
	padding-block: 0.3rem;
	letter-spacing: 0.08rem;
	width: 50%;
	text-align: center;
	margin-inline: auto;
	margin-top: 0.3rem;
	grid-area: 2/1/3/3;
`;

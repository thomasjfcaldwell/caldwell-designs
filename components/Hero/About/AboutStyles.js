import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	grid-area: 1/2/3/3;
	@media ${(props) => props.theme.breakpoints.md} {
		grid-area: 1/2/2/3;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-area: 1/2/2/3;
	}
`;

export const AboutImage = styled.img`
	width: 40%;
	margin: 0.3rem auto;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 50%;
	}
`;

export const AboutText = styled.p`
	font-size: 0.65rem;
	font-weight: 500;
	line-height: 1.7;
	letter-spacing: 1px;
	margin: 0.6rem auto;
	width: 75%;
`;

export const AboutLink = styled.a`
	font-size: 0.6rem;
	border: 2px ${(props) => props.theme.colors.secondary} solid;
	border-radius: 0.3rem;
	padding-block: 0.4rem;
	letter-spacing: 0.08rem;
	width: 30%;
	text-align: center;
	margin: 0.5rem auto;
`;

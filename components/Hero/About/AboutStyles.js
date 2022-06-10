import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	grid-area: 1/2/4/3;

	@media ${(props) => props.theme.breakpoints.md} {
		grid-area: 1/2/2/3;
		justify-content: center;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-area: 1/2/2/3;
		background-color: pink;
	}
`;

export const AboutImage = styled.img`
	width: 50%;
	margin: 0 auto;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 40%;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 40%;
	}
`;

export const AboutText = styled.p`
	font-size: 1.1rem;
	font-weight: 500;
	line-height: 1.65;
	letter-spacing: 1px;
	margin: 3rem auto;
	width: 90%;
	text-align: justify;
	/* background-color: purple; */
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 0.8rem;
		margin: 3rem auto;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 0.8rem;
		padding: 2.5rem;
		text-align: justify;
	}
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

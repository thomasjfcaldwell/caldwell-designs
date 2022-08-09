import styled from 'styled-components';

export const AboutThomasContainer = styled.section`
	background-color: ${(props) => props.theme.colors.secondary};
	display: flex;
	flex-direction: column;
	border-radius: 1rem;
	grid-column-start: 2;
	grid-column-end: 3;
	width: 80%;
	margin: 0 auto;
	justify-content: space-evenly;
	padding: 0.5rem;
	@media ${(props) => props.theme.breakpoints.md} {
		grid-area: 2/1/3/2;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 2/1/3/2;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		grid-area: 2/1/3/2;
		width: 90%;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		grid-area: 2/1/3/2;
		width: 95%;
		padding: 1rem;
	}
`;

export const AboutThomasImage = styled.img`
	margin: 1rem auto;
	width: 80%;
	border-radius: 1rem;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 90%;
		margin: 2rem auto;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 90%;
		margin: 1rem auto;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		width: 90%;
		margin: 1rem auto;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		width: 100%;
		margin: 0.2rem auto;
	}
`;

export const AboutThomasText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	background-color: rgba(0, 0, 0, 0.1);
	font-size: 0.9rem;
	font-weight: 400;
	width: 90%;
	margin: 1rem auto;
	padding: 1.5rem;
	line-height: 1.65;
	border-radius: 1rem;
	text-align: center;
	letter-spacing: 0.05rem;
	@media ${(props) => props.theme.breakpoints.lg} {
		font-size: 0.8rem;
		margin: 1rem auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 0.8rem;
		margin: 1rem auto;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 0.8rem;
		margin: 0.2rem auto;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		font-size: 0.7rem;
		margin: 0.2rem auto;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		font-size: 0.7rem;
		margin: 0.2rem auto;
	}
`;

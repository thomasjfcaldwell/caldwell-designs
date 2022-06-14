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
		width: 90%;
		padding: 1.5rem;
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
		width: 95%;
		margin: 0.5rem auto;
	}
`;

export const AboutThomasText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	font-size: 0.9rem;
	font-weight: 400;
	line-height: 1.65;
	text-align: justify;
	width: 95%;
	margin: 0 auto;
	@media ${(props) => props.theme.breakpoints.xs} {
		padding: 0.5rem;
		font-size: 0.8rem;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		font-size: 0.7rem;
		line-height: 1.5;
	}
`;

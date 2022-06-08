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
	@media ${(props) => props.theme.breakpoints.md} {
		grid-area: 2/1/3/2;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 2/1/3/2;
	}
`;

export const AboutThomasImage = styled.img`
	margin: 0 auto;
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
`;

export const AboutThomasText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	font-size: 0.9rem;
	font-weight: 400;
	line-height: 1.7;
	text-align: justify;
	width: 100%;
	padding-inline: 2rem;
	margin-bottom: 20px;
`;

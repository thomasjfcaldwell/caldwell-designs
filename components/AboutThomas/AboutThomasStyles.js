import styled from 'styled-components';

export const AboutThomasTitle = styled.h4``;

export const AboutThomasContainer = styled.section`
	width: 90%;
	margin: 2rem auto;
	background-color: ${(props) => props.theme.colors.secondary};
	display: flex;
	flex-direction: column;
	border-radius: 10px;

	@media ${(props) => props.theme.breakpoints.xl} {
		width: 90%;
		margin: 4rem auto;
		flex-direction: row;
		padding: 2rem;
		align-items: center;
	}
`;

export const AboutThomasImage = styled.img`
	margin: auto;
	padding: 2rem;
	width: 90%;
	border-radius: 1rem;
	@media ${(props) => props.theme.breakpoints.xl} {
		width: 50%;
	}
`;

export const AboutThomasText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	padding: 0.5rem 2rem 2rem;
	font-size: 12px;
	font-weight: 400;
	line-height: 1.4;
	text-align: justify;
	@media ${(props) => props.theme.breakpoints.xl} {
		font-size: 15px;
	}
`;

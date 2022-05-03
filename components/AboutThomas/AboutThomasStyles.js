import styled from 'styled-components';

export const AboutThomasContainer = styled.section`
	width: 90%;
	margin: 2rem auto;
	background-color: ${(props) => props.theme.colors.secondary};
	display: flex;
	flex-direction: column;
`;

export const AboutThomasImage = styled.img`
	margin: auto;
	padding: 2rem;
	width: 90%;
	border-radius: 1rem;
`;

export const AboutThomasText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	padding: 0.5rem 2rem 2rem;
	font-size: 12px;
	font-weight: 400;
	line-height: 1.4;
	text-align: justify;
`;

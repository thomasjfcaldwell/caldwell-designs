import styled from 'styled-components';

export const AboutThomasContainer = styled.section`
	width: 90%;
	margin: 2rem auto;
	background-color: ${(props) => props.theme.colors.secondary};
`;

export const AboutThomasImage = styled.image``;

export const AboutThomasText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	padding: 2rem;
`;

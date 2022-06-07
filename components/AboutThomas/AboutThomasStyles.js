import styled from 'styled-components';

export const AboutThomasTitle = styled.h4``;

export const AboutThomasContainer = styled.section`
	background-color: ${(props) => props.theme.colors.secondary};
	width: 100%;
	display: flex;
	flex-direction: column;
	border-radius: 1rem;
`;

export const AboutThomasImage = styled.img`
	margin: auto;
	width: 80%;
`;

export const AboutThomasText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	font-size: 11px;
	font-weight: 400;
	line-height: 1.6;
	text-align: justify;
	width: 100%;
	padding-inline: 4rem;
	margin-bottom: 20px;
`;

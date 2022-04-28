import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: grid;
	grid-template-columns: 160px 1fr;
	grid-template-rows: 20px 150px 20px;
`;

export const AboutTitle = styled.h2`
	font-size: 20px;
	text-align: center;
`;

export const AboutImage = styled.image``;

export const AboutText = styled.p`
	font-size: 13px;
	font-weight: 300;
	grid-column-start: 2;
	line-height: 1.4;
	grid-row-start: 1;
	padding: 0 10px;
`;

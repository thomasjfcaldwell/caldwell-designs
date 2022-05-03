import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: grid;
	grid-template-columns: 130px 1fr;
	grid-template-rows: 20px 130px 20px 20px;
	margin: 2rem auto;
`;

export const AboutTitle = styled.h2`
	font-size: 20px;
	text-align: center;
`;

export const AboutImage = styled.img`
	margin-top: 10px;
	width: 120px;
`;

export const AboutText = styled.p`
	font-size: 13px;
	font-weight: 300;
	grid-column-start: 2;
	line-height: 1.4;
	grid-row-start: 1;
	grid-row-end: 2;
	/* padding: 0 10px; */
`;

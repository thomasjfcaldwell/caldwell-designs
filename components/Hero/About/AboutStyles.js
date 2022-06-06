import styled from 'styled-components';

export const AboutContainer = styled.div`
	grid-area: 1/2/3/3;
	@media ${(props) => props.theme.breakpoints.lg} {
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
`;

export const AboutTitle = styled.h2`
	font-size: 3rem;
	text-align: center;
`;

export const AboutImage = styled.img`
	margin-top: 10px;
	width: 120px;
	@media ${(props) => props.theme.breakpoints.xl} {
		width: 160px;
		margin: 20px auto;
	}
`;

export const AboutText = styled.p`
	font-size: 1rem;
	font-weight: 300;
	padding-inline: 1.5rem;
	grid-column-start: 2;
	line-height: 1.5;
	grid-row-start: 1;
	grid-row-end: 2;
	@media ${(props) => props.theme.breakpoints.xl} {
		font-size: 14px;
	}
`;

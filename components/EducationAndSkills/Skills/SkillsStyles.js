import styled from 'styled-components';

export const SkillsContainer = styled.section`
	width: 100%;
	background-color: ${(props) => props.theme.colors.secondary};
	border-radius: 10px;
	padding-block: 0.5rem;
	@media ${(props) => props.theme.breakpoints.lg} {
		/* grid-template-columns: repeat(8, 1fr);
		grid-template-rows: 2fr 2fr 2fr 1fr 1fr; */
		grid-column-start: 1;
		grid-column-end: 6;
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		padding-inline: 3rem;
	}
`;

export const SkillsText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	padding: 1rem 0.5rem;
	text-align: justify;
	font-size: 9.5px;
	line-height: 1.4;
	@media ${(props) => props.theme.breakpoints.lg} {
		/* grid-template-columns: repeat(8, 1fr);
		grid-template-rows: 2fr 2fr 2fr 1fr 1fr; */
		font-size: 12px;
		padding: 2rem 1rem;
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		font-size: 13px;
	}
`;

export const SkillsImages = styled.div`
	display: flex;
	justify-content: space-around;
	margin-block: 1.2rem;
`;

export const SkillsImage = styled.img`
	width: 30px;
	@media ${(props) => props.theme.breakpoints.lg} {
		/* grid-template-columns: repeat(8, 1fr);
		grid-template-rows: 2fr 2fr 2fr 1fr 1fr; */
		width: 60px;
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		/* grid-template-columns: repeat(8, 1fr);
		grid-template-rows: 2fr 2fr 2fr 1fr 1fr; */
		width: 60px;
	}
`;

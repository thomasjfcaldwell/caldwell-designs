import styled from 'styled-components';

export const SkillsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0rem 1rem;
	@media ${(props) => props.theme.breakpoints.md} {
		display: grid;
		grid-template-columns: 35% 65%;
		grid-area: 1/1/2/2;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 1/1/2/2;
	}
`;
export const SkillsContainer = styled.section`
	width: 100%;
	background-color: ${(props) => props.theme.colors.secondary};
	border-radius: 10px;
	padding-block: 0.5rem;
	@media ${(props) => props.theme.breakpoints.lg} {
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		padding-inline: 3rem;
	}
`;

export const SkillsText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	padding: 1rem 0.5rem;
	text-align: justify;
	font-size: 0.7rem;
	line-height: 1.4;
`;

export const SkillsImages = styled.div`
	display: flex;
	justify-content: space-around;
	margin-block: 1.2rem;
	@media ${(props) => props.theme.breakpoints.md} {
		margin-block: 0.3rem;
	}
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

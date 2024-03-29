import styled from 'styled-components';

export const SkillsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 95%;
	margin: 0 auto;
	@media ${(props) => props.theme.breakpoints.md} {
		display: grid;
		grid-template-columns: 35% 65%;
		grid-area: 1/1/2/2;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 1/1/2/2;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		grid-area: 1/1/2/2;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		grid-area: 1/1/2/2;
	}
`;
export const SkillsContainer = styled.section`
	width: 100%;
	background-color: ${(props) => props.theme.colors.secondary};
	border-radius: 10px;
	margin: 2rem auto;
	padding: 1rem;
`;

export const SkillsText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	padding: 0.5rem;
	text-align: justify;
	font-size: 0.7rem;
	line-height: 1.4;
`;

export const SkillsImages = styled.div`
	display: flex;
	justify-content: space-around;
	/* margin-block: 1.2rem; */
	padding: 1rem;
	@media ${(props) => props.theme.breakpoints.md} {
		margin-block: 0.3rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-block: 0.1rem;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		margin: 0;
	}
`;

export const SkillsImage = styled.img`
	width: 30px;
	@media ${(props) => props.theme.breakpoints.lg} {
		width: 60px;
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		width: 60px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 50px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 50px;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		width: 45px;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		width: 40px;
	}
`;

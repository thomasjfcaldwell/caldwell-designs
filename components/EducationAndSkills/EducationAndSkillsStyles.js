import styled from 'styled-components';

export const EducationAndSkillsContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-gap: 10px;
	width: 90%;
	margin: 2rem auto;
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: 1fr;
		grid-gap: 30px;
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		grid-gap: 80px;
		align-items: center;
	}
`;

import styled from 'styled-components';

export const AboutAndSkillWrapper = styled.div`
	display: grid;
	grid-template-columns: 40% 60%;
	grid-gap: 3rem;
	margin: 4rem auto;
	width: 100%;
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-gap: 0.5rem;
		grid-template-columns: 45% 55%;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		grid-gap: 3.5rem;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-gap: 2.5rem;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
	}
`;

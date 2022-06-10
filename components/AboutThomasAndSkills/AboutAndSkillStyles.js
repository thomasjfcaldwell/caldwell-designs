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
		grid-column-gap: 2.5rem;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
		margin: 1rem auto;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		grid-column-gap: 1.5rem;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
		margin: 0.5rem auto;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		grid-column-gap: 1.5rem;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
		margin: 0.5rem auto;
	}
`;

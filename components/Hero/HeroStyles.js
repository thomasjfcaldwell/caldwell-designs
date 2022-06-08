import styled from 'styled-components';

export const HeroContainer = styled.div`
	width: 100%;
	margin: 2rem auto;
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-rows: 2fr 1fr;
	grid-gap: 2rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		margin: 0.5rem auto;
		grid-gap: 0.5rem;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 2fr 1fr;

		grid-gap: 0.5rem;
		margin: 0.5rem auto;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 2fr 1fr;
	}
`;

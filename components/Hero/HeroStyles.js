import styled from 'styled-components';

export const HeroContainer = styled.div`
	width: 100%;
	margin: 2rem auto;
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-rows: 2fr 1fr;
	grid-gap: 2rem;
	@media ${(props) => props.theme.breakpoints.lg} {
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		/* display: grid;
		width: 100%;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: 1fr; */
		/* padding: 3rem; */
		/* margin-top: 2.5rem; */
	}
`;

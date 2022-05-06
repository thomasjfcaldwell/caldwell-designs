import styled from 'styled-components';

export const Container = styled.div`
	width: 85%;
	margin-inline: auto;
	@media ${(props) => props.theme.breakpoints.lg} {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 50px 1fr;
		margin: 1rem auto 5rem auto;
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: 1fr;
		padding: 3rem;
		margin-top: 2.5rem;
	}
`;

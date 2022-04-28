import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 2rem;
	padding: 1rem;
	padding-top: 2rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		justify-content: space-around;
		width: 90%;
		margin-inline: auto;
		position: sticky;
		top: 0.1px;
		background-color: ${(props) => props.theme.colors.primary};
	}
`;

export const LinkText = styled.a`
	color: ${(props) => props.theme.colors.secondary};
	font-family: ${(props) => props.theme.fonts.main};
	padding: 0;
	border: 0;
`;

import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 1rem;
	padding-top: 1rem;
	margin-inline: auto;
	width: 100%;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		justify-content: space-around;
		width: 100%;
		position: sticky;
		top: 0.01px;
		background-color: ${(props) => props.theme.colors.primary};
	}
	@media ${(props) => props.theme.breakpoints.md} {
		display: flex;
		justify-content: space-around;
		width: 100%;
		position: sticky;
		top: 0.01px;
		background-color: ${(props) => props.theme.colors.primary};
	}
`;

export const LinkText = styled.a`
	color: ${(props) => props.theme.colors.secondary};
	font-family: ${(props) => props.theme.fonts.main};
	padding: 0.5rem 0;
	border: 0;
	font-size: 16px;
	transition: all 0.3s ease-out;
	:hover {
		color: ${(props) => props.theme.colors.highlight};
		cursor: pointer;
		font-weight: 600;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		font-size: 12px;
	}
`;

import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
	width: 100%;
	margin-inline: auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	/* grid-template-rows: min-content max-content; */
	grid-gap: 2rem 1rem;
	background-color: blue;
	@media ${(props) => props.theme.breakpoints.xs} {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
		grid-area: 1/1/3/2;
	}

	@media ${(props) => props.theme.breakpoints.lg} {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		grid-area: 1/1/3/2;
		/* grid-template-rows: min-content max-content; */
	}
`;

export const ProjectsContainer = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.primary};
	width: 100%;
	height: 100%;
	border-radius: 10px;
	display: grid;
	grid-template-columns: ${(props) => (props.primary ? '2fr 1fr' : '1fr 2fr')};
	grid-template-rows: min-content 1fr auto;
	gap: 0.9rem 0;
	grid-row-start: span 2;
	grid-column-start: ${(props) => (props.primary ? '2' : '1')};
	background-color: grey;
	padding: 1rem;
`;

export const ProjectsNavLink = styled.p``;

export const ProjectsImage = styled.img`
	width: 10rem;
	margin-inline: auto;
	margin-top: 1rem;
	grid-area: ${(props) => (props.primary ? '1/2/4/3' : '1/1/4/2')};
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-top: 1rem;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		margin-top: 1rem;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		margin-top: 2.5rem;
	}
`;
export const ProjectsTitle = styled.h5`
	text-align: center;
	grid-area: ${(props) => (props.primary ? '1/1/2/2' : '1/2/2/3')};
	margin: 1.2rem auto;
	font-size: 1.1rem;
	@media ${(props) => props.theme.breakpoints.xs} {
		margin: 0.5rem auto;
	}
`;
export const ProjectsText = styled.p`
	font-size: 0.7rem;
	padding-inline: 1rem;
	line-height: 1.6;
	letter-spacing: 0.05rem;
	font-weight: 400;
	grid-area: ${(props) => (props.primary ? '2/1/3/2' : '2/2/3/3')};
	@media ${(props) => props.theme.breakpoints.xs} {
		line-height: 1.5;
		padding-inline: 0.2rem;
	}
`;
export const ProjectsLinkContainer = styled.div`
	display: flex;
	justify-content: space-around;
	background-color: green;
	grid-area: ${(props) => (props.primary ? '3/1/4/2' : '3/2/4/3')};
	@media ${(props) => props.theme.breakpoints.xs} {
		grid-area: ${(props) => (props.primary ? '3/1/4/3' : '3/1/4/3')};
		background-color: blue;
		margin-top: 1rem;
	}
`;
export const ProjectsLink = styled.a`
	display: flex;
	justify-content: space-around;
	text-decoration: none;
	align-items: center;
`;

export const ProjectsIcon = styled.div`
	${(props) => props.theme.colors.highlight};
`;
export const LinkTextContainer = styled.div``;
export const LinkTitle = styled.a`
	font-size: 7px;
	padding-inline: 5px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: ${(props) => props.theme.colors.primary};
`;

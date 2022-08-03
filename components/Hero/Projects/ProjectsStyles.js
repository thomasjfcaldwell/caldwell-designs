import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
	width: 100%;
	margin-inline: auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem 1rem;
	@media ${(props) => props.theme.breakpoints.xxs} {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.7rem;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.5rem;
		grid-area: 1/1/3/2;
	}

	@media ${(props) => props.theme.breakpoints.lg} {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		grid-area: 1/1/3/2;
	}
`;

export const ProjectsContainer = styled.div`
	padding: 1rem;
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.primary};
	width: min(600px, 90%);
	border-radius: 0.8rem;
	display: grid;
	grid-template-columns: ${(props) =>
		props.primary ? '1fr 120px' : '120px 1fr'};
	grid-template-rows: 1fr;
	gap: 0.1rem 0;
	grid-row-start: span 2;
	grid-column-start: ${(props) => (props.primary ? '2' : '1')};
	@media ${(props) => props.theme.breakpoints.xxs} {
		grid-template-columns: ${(props) =>
			props.primary ? '1fr 105px' : '95px 1fr'};
		padding: 0.5rem;
	}
`;

export const ProjectsNavLink = styled.p``;

export const ProjectsImageContainer = styled.div`
	/* background-color: green; */
	display: grid;
	align-items: center;
`;
export const ProjectsImage = styled.img`
	width: min(150px, 100%);
	grid-area: ${(props) => (props.primary ? '1/2/4/3' : '1/1/4/2')};
`;

export const ProjectContentContainer = styled.div``;
export const ProjectsTitle = styled.h5`
	text-align: center;
	margin: 0.2rem auto;
	font-size: 1.1rem;
	text-transform: uppercase;
	padding: 0.6rem;
`;
export const ProjectsText = styled.p`
	font-size: 0.7rem;
	padding-inline: 0.5rem;
	line-height: 1.6;
	letter-spacing: 0.05rem;
	margin: 0.7rem 0;
	text-align: center;
	@media ${(props) => props.theme.breakpoints.xxs} {
		margin: 0.4rem auto;
		padding-inline: ${(props) => (props.primary ? '0rem' : '0.1rem')};
		font-size: 0.55rem;
		line-height: 1.6;
		letter-spacing: 0.02rem;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		font-size: 0.6rem;
		padding-inline: 0;
		margin: 0.3rem 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 0;
		padding-inline: ${(props) => (props.primary ? '0.5rem' : '0rem')};
		font-size: 0.65rem;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		margin: 0;
		font-size: 0.6rem;
		padding: 0;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		margin: 0;
		font-size: 0.8rem;
		padding: 0;
	}
`;
export const ProjectsLinkContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	grid-area: ${(props) => (props.primary ? '3/1/4/3' : '3/1/4/3')};
	padding: 0.8rem;
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 0.2rem;
		margin: 1rem 0rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: ${(props) => (props.primary ? '3/1/4/2' : '3/2/4/3')};
		padding: 0.2rem;
		margin: 1rem 0rem;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		grid-area: ${(props) => (props.primary ? '3/1/4/2' : '3/2/4/3')};
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		grid-area: ${(props) => (props.primary ? '3/1/4/2' : '3/2/4/3')};
		justify-content: space-between;
		padding: 0.2rem;
	}
`;

export const ProjectsLink = styled.div`
	display: flex;
	align-items: center;
`;
export const ProjectsIcon = styled.div`
	display: inline;
	width: 10px;
`;

export const LinkTitle = styled.a`
	font-size: 0.5rem;
	padding-inline: 0.5rem;
	text-decoration: none;
	font-weight: 200;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: ${(props) => props.theme.colors.primary};
	:hover {
		color: blue;
		cursor: pointer;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		padding-inline: 0.4rem;
		letter-spacing: 0.5px;
		font-size: 0.45rem;
	}
`;

import styled from 'styled-components';

export const ThisSiteWrapper = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	@media ${(props) => props.theme.breakpoints.lg} {
		margin: 0 4rem;
	}
`;

export const ThisSiteContainer = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	padding: 1.5rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 80%;
		margin: 2rem auto;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		margin: 2rem auto;
	}
`;

export const ThisSiteImage = styled.img`
	width: 60%;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
	}
`;
export const ThisSiteText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	margin: 0.6rem auto;
	font-size: 0.9rem;
	line-height: 1.7;
	width: 100%;
	/* background-color: pink; */
`;
export const ThisSiteList = styled.ul`
	width: 75%;
	margin: 0 auto;
`;
export const ThisSiteListItem = styled.li`
	color: ${(props) => props.theme.colors.primary};
	font-size: 0.7rem;
	margin: 0.55rem auto;
	font-weight: 600;
`;

export const GitHubLinkTitle = styled.p`
	color: ${(props) => props.theme.colors.primary};
	font-size: 0.7rem;
`;
export const ThisSiteLink = styled.a`
	display: flex;
	justify-content: space-between;
	text-decoration: none;
	align-items: center;
	margin-top: 1rem;
`;

export const ThisSiteLinkIcon = styled.div`
	color: ${(props) => props.theme.colors.primary};
`;
export const ThisSiteLinkTextContainer = styled.div`
	padding-inline: 0.2rem;
`;
export const ThisSiteLinkTitle = styled.h5`
	font-size: 0.8rem;
	color: ${(props) => props.theme.colors.primary};
	margin: 0;
`;

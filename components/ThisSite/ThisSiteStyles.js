import styled from 'styled-components';

export const ThisSiteWrapper = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const ThisSiteContainer = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	padding: 1.5rem 0.75rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	@media ${(props) => props.theme.breakpoints.lg} {
		width: 90%;
		margin: 2rem auto;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		width: 80%;
		margin: 2rem auto;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		margin: 2rem auto;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		width: 90%;
		margin: 1rem auto;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		width: 95%;
		margin: 1rem auto;
	}
`;

export const ThisSiteImage = styled.img`
	width: 80%;
`;
export const ThisSiteText = styled.p`
	color: ${(props) => props.theme.colors.header};
	margin: 1rem auto;
	@media ${(props) => props.theme.breakpoints.lg} {
		text-align: center;
		letter-spacing: 0.001rem;
		font-size: 0.7rem;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 0.95rem;
		text-align: center;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 93%;
		font-size: 0.8rem;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		width: 95%;
		font-size: 0.8rem;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		font-size: 0.75rem;
		letter-spacing: 0.01rem;
		width: 100%;
		line-height: 1.6;
	}
`;
export const ThisSiteList = styled.ul`
	width: 100%;
	margin: 0 auto;
	list-style: none;
`;
export const ThisSiteListItem = styled.li`
	&:before {
		content: '😍';
		padding-right: 5px;
	}
	color: ${(props) => props.theme.colors.primary};
	font-size: 0.8rem;
	margin: 1rem auto;
	font-weight: 600;
	text-align: center;
`;

export const GitHubLinkTitle = styled.p`
	color: ${(props) => props.theme.colors.primary};
	font-size: ${(props) => (props.primary ? '0.65rem' : '0.8rem')};
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

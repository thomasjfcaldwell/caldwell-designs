import styled from 'styled-components';

export const ThisSiteContainer = styled.section`
	background-color: ${(props) => props.theme.colors.secondary};
	width: 90%;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	@media ${(props) => props.theme.breakpoints.xl} {
		width: 70%;
		margin-block: 5rem;
	}
`;

export const ThisSiteHeader = styled.h5`
	margin: 10px 5px;
	color: ${(props) => props.theme.colors.primary};
	font-size: 15px;
	text-transform: uppercase;
	@media ${(props) => props.theme.breakpoints.xl} {
		font-size: 20px;
	}
`;
export const ThisSiteImage = styled.img`
	width: 100%;
	padding-inline: 1rem;
	border-radius: 10px;
	@media ${(props) => props.theme.breakpoints.xl} {
		width: 80%;
		margin: 0 auto;
	}
`;
export const ThisSiteText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	margin: 10px 4px;
	color: ${(props) => props.theme.colors.primary};
	font-size: 9px;
	text-align: justify;
	:after {
		content: '';
		display: inline-block;
		width: 100%;
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		width: 90%;
		margin-inline: auto;
		font-size: 11px;
		text-align: left;
	}
`;
export const ThisSiteLink = styled.a`
	display: flex;
	justify-content: center;
	text-decoration: none;
	@media ${(props) => props.theme.breakpoints.xl} {
		padding: 2rem;
	}
`;

export const ThisSiteLinkIcon = styled.div``;
export const ThisSiteLinkTextContainer = styled.div``;
export const ThisSiteLinkTitle = styled.h5``;

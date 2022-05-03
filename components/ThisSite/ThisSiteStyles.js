import styled from 'styled-components';

export const ThisSiteContainer = styled.section`
	background-color: ${(props) => props.theme.colors.secondary};
	width: 90%;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
`;

export const ThisSiteHeader = styled.h5`
	margin: 10px 5px;
	color: ${(props) => props.theme.colors.primary};
	font-size: 15px;
	text-transform: uppercase;
`;
export const ThisSiteImage = styled.img`
	width: 100%;
	padding-inline: 1rem;
	border-radius: 10px;
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
`;
export const ThisSiteLink = styled.a`
	display: flex;
	justify-content: center;
	text-decoration: none;
`;

export const ThisSiteLinkIcon = styled.div``;
export const ThisSiteLinkTextContainer = styled.div``;
export const ThisSiteLinkTitle = styled.h5``;

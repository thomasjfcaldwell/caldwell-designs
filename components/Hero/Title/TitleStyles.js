import styled from 'styled-components';

export const TitleContainer = styled.div`
	/* margin: 1rem 0; */
	display: flex;
	justify-content: center;
	@media ${(props) => props.theme.breakpoints.lg} {
	}
	@media ${(props) => props.theme.breakpoints.xl} {
	}
`;

export const ProjectTitle = styled.h2``;

export const MoreProjectsLinkContainer = styled.div`
	@media ${(props) => props.theme.breakpoints.lg} {
	}
`;

export const Title = styled(ProjectTitle)`
	font-size: 3rem;
`;

export const ContactThomasTitle = styled(ProjectTitle)`
	font-size: 3rem;
`;
export const ContactThomasContainer = styled(TitleContainer)`
	justify-content: center;
`;

// export const MoreProjectsLink = styled.a`
// 	font-size: 9px;
// 	border: 2px ${(props) => props.theme.colors.secondary} solid;
// 	border-radius: 1px;
// 	padding: 2px 40px;
// 	display: inline;
// 	line-height: 1.4;
// 	margin-top: 1px;
// 	letter-spacing: 0.08rem;
// `;

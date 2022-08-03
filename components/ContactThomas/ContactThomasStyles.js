import styled from 'styled-components';

export const ContactThomasContainer = styled.section`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	grid-row-start: 2;
	grid-column-start: 1;
	grid-column-end: 3;
	@media ${(props) => props.theme.breakpoints.xxs} {
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		grid-row-start: 3;
		grid-row-end: 4;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-row-start: 3;
		grid-row-end: 4;
		width: 100%;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		grid-column-start: 2;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		width: 100%;
		grid-column-start: 2;
	}
`;
export const ContactThomasSocialMediaContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;
	padding: 0.3rem;
`;

export const ContactThomasSocialMediaLink = styled.a`
	padding-block: 1rem;
	color: white;
	text-decoration: none;
	:hover {
		text-decoration: underline;
	}
`;

export const SocialMediaIcon = styled.div`
	display: flex;
	justify-content: center;
`;

export const SocialTextContainer = styled.div`
	margin: 0.4rem auto;
`;

export const SocialMediaTitle = styled.h5`
	font-weight: 400;
	letter-spacing: 0.5px;
	font-size: 0.8rem;
`;

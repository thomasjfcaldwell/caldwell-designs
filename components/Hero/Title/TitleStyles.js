import styled from 'styled-components';

export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem auto;
	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 0.5rem auto;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		margin: 0.2rem auto;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		margin: 0.2rem auto;
	}
`;

export const Title = styled.h2`
	font-size: 2.2rem;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 1.8rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 1.5rem;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		font-size: 1.4rem;
	}
	@media ${(props) => props.theme.breakpoints.xxs} {
		font-size: 1.4rem;
	}
`;

import styled from 'styled-components';

export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem auto;
`;

export const Title = styled.h2`
	font-size: 2.2rem;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 1.8rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 1.5rem;
	}
`;

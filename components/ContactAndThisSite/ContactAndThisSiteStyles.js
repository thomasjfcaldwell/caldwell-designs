import styled from 'styled-components';

export const ContactAndThisSiteContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 2rem 0;
	@media ${(props) => props.theme.breakpoints.md} {
		flex-direction: column;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		flex-direction: column;
	}
`;

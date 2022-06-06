import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.5rem;
`;
export const Title = styled.h1`
	margin: 0;
	font-size: 35px;
	@media ${(props) => props.theme.breakpoints.xl} {
		font-size: 50px;
	}
`;
export const SubTitle = styled.h3`
	font-weight: 200;
	font-size: 20px;
	@media ${(props) => props.theme.breakpoints.xl} {
		font-size: 30px;
	}
`;

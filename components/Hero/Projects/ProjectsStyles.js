import styled from 'styled-components';

export const Container = styled.div`
	width: 90%;
	margin-inline: auto;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 15px;
`;

export const GameContainer = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.primary};
	width: 290px;
	height: 200px;
	border-radius: 10px;
	display: grid;
	grid-template-columns: 1fr 2fr;
`;

export const GameImage = styled.image``;
export const GameTitle = styled.h5``;
export const GameText = styled.p`
	font-size: 10px;
`;
export const GameLink = styled.a``;
export const GameCodeLink = styled.a``;
export const ShopContainer = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.primary};
	width: 290px;
	height: 200px;
	border-radius: 10px;
	display: grid;
	grid-template-columns: 1fr 2fr;
`;

export const ShopImage = styled.image``;
export const ShopTitle = styled.h5``;
export const ShopText = styled.p``;
export const ShopLink = styled.a``;
export const ShopCodeLink = styled.a``;

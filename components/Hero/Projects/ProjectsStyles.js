import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin-inline: auto;
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	grid-gap: 15px;
`;

export const GameContainer = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.primary};
	width: 290px;
	height: 200px;
	border-radius: 10px;
	display: grid;
	grid-template-columns: 110px 1fr;
	grid-template-rows: 30px 1fr 30px;
`;

export const GameImage = styled.img`
	width: 100px;
	margin: auto;
`;
export const GameTitle = styled.h5`
	text-align: center;
	margin-top: 1px;
	font-size: 20px;
`;
export const GameText = styled.p`
	font-size: 10px;
	grid-column-start: 2;
	grid-row-start: 2;
	line-height: 1.4;
	padding: 0.1rem;
`;
export const GameLinkContainer = styled.div`
	grid-row-start: 3;
	display: flex;
	grid-column-start: span 2;
	justify-content: space-around;
	padding-block: 0.5rem;
`;
export const GameLink = styled.a``;
export const GameCodeLink = styled.a``;

export const ShopContainer = styled(GameContainer)`
	grid-template-columns: 2fr 1fr;
	grid-template-rows: 30px 1fr 30px;
`;

export const ShopImage = styled.img`
	width: 150px;
	grid-column-start: 2;
	grid-row-start: span 2;
	margin: auto;
`;
export const ShopTitle = styled(GameTitle)`
	text-transform: uppercase;
	grid-row-start: 1;
`;
export const ShopText = styled(GameText)`
	grid-column-start: 1;
	padding-inline-start: 0.9rem;
`;

export const ShopLinkContainer = styled(GameLinkContainer)``;
export const ShopLink = styled.a``;
export const ShopCodeLink = styled.a``;

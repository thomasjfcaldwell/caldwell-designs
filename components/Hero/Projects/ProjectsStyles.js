import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin-inline: auto;
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	grid-gap: 15px;
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-column-start: span 1;
		grid-row-start: 2;
		background-color: red;
	}

	@media ${(props) => props.theme.breakpoints.xl} {
		grid-column-start: 1;
		grid-column-end: 8;
		grid-row-start: 1;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 25px;
		margin-top: 8rem;
		background-color: yellow;
	}
`;

export const GameContainer = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.primary};
	width: 300px;
	height: 200px;
	border-radius: 10px;
	display: grid;
	grid-template-columns: 100px 1fr;
	grid-template-rows: 30px 1fr 30px;
	@media ${(props) => props.theme.breakpoints.lg} {
		width: 380px;
		height: 200px;
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		/* grid-column-start: 1;
		grid-column-end: 4;
		grid-row-start: 2;
		grid-row-end: 10; */
		width: 400px;
		height: 250px;
		grid-template-columns: 120px 1fr;
	}
`;

export const GameImage = styled.img`
	width: 100px;
	margin-inline: auto;
	margin-top: 5px;
`;
export const GameTitle = styled.h5`
	text-align: center;
	margin-top: 5px;
	font-size: 18px;
	padding: 2px;
`;
export const GameText = styled.p`
	font-size: 10px;
	grid-column-start: 2;
	grid-row-start: 2;
	line-height: 1.4;
	padding: 0.1rem;
	@media ${(props) => props.theme.breakpoints.lg} {
		font-size: 12px;
		padding-inline: 0.5rem;
		margin-top: 5px;
	}
	@media ${(props) => props.theme.breakpoints.xl} {
		font-size: 14px;
		padding-inline: 0.5rem;
		margin-top: 10px;
	}
`;
export const GameLinkContainer = styled.div`
	grid-row-start: 3;
	display: flex;
	grid-column-start: span 2;
	justify-content: space-around;
	padding-block: 1rem;
`;
export const GameLink = styled.a`
	display: flex;
	justify-content: space-around;
	text-decoration: none;
	align-items: center;
`;

export const GameIcon = styled.div`
	${(props) => props.theme.colors.highlight};
`;
export const LinkTextContainer = styled.div``;
export const LinkTitle = styled.h5`
	font-size: 7px;
	padding-inline: 5px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: ${(props) => props.theme.colors.primary};
	/* margin-top: 2px; */
`;

export const ShopContainer = styled(GameContainer)`
	grid-template-columns: 2fr 1fr;
	grid-template-rows: 30px 1fr 30px;
	@media ${(props) => props.theme.breakpoints.lg} {
		grid-column-start: span 1;
		grid-row-start: 3;
	}
`;

export const ShopImage = styled.img`
	width: 155px;
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
export const ShopLink = styled.a`
	display: flex;
	justify-content: space-around;
	text-decoration: none;
	align-items: center;
`;
export const ShopCodeLink = styled.a``;
export const ShopIcon = styled.div`
	color: ${(props) => props.theme.colors.highlight};
`;

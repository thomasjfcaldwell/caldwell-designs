import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 25% 75%;
    grid-auto-rows: minmax(200px, auto);
	padding: 20px;
`;

export const ContentOne = styled.div`
	background-color: hotpink;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const ContentTwo = styled.div`
	background-color: lightseagreen;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const ContentThree = styled.div`
	background-color: midnightblue;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const ContentFour = styled.div`
	background-color: gold;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Headline = styled.h1`
	text-align: center;
	margin: 0px;
	color: white;
`;

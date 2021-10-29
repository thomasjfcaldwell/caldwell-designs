import styled from 'styled-components';
import { Navbar } from '../components/Navbar';

const Title = styled.h1`
	font-size: 50px;
	background-color: seagreen;
	color: ${({ theme }) => theme.colors.primary};
`;

const Header = styled.p`
	font-size: 100px;
	color: ${({ theme }) => theme.colors.primary};
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: yellowgreen;
	align-items: center;
`;

import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Container>
					<Title>shshshs</Title>
					<Header>ahahahah</Header>
				</Container>
			</>
		);
	}
}

export default Home;

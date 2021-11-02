import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import Hero from '../components/Home/Hero';
import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Hero />
			</>
		);
	}
}

export default Home;

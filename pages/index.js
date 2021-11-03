import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import Hero from '../components/Home/Hero';
import React, { Component } from 'react';
import WebsiteWork from '../components/Home/WebsiteWork';

class Home extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Hero />
				<WebsiteWork />
			</>
		);
	}
}

export default Home;

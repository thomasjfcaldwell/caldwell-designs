import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import Hero from '../components/Home/Hero';
import React, { Component } from 'react';
import WebsiteWork from '../components/Home/WebsiteWork';
import MarketingMaterials from '../components/Home/MarketingMaterials';
import WorkWithThomas from '../components/Home/WorkWithThomas';

class Home extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Hero />
				<WebsiteWork />
				<MarketingMaterials />
				<WorkWithThomas /> 
			</>
		);
	}
}

export default Home;

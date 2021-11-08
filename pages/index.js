import styled from 'styled-components';
import Hero from '../components/Home/Hero';
import React, { Component } from 'react';
import WebsiteWork from '../components/Home/WebsiteWork';
import MarketingMaterials from '../components/Home/MarketingMaterials';
import WorkWithThomas from '../components/Home/WorkWithThomas';
import { Layout } from '../layout/Layout';

class Home extends Component {
	render() {
		return (
			<>
				<Layout>
					<Hero />
					<WebsiteWork />
					<MarketingMaterials />
					<WorkWithThomas />
				</Layout>
			</>
		);
	}
}

export default Home;

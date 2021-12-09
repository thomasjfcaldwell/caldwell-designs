import styled from 'styled-components';
import Hero from '../components/Home/Hero';
import React, { Component } from 'react';
import WebsiteWork from '../components/Home/WebsiteWork';
import MarketingMaterials from '../components/Home/MarketingMaterials';
import WorkWithThomas from '../components/Home/WorkWithThomas';
import { Layout } from '../layout/Layout';
import Grid from '../components/Home/Grid';
import {Container} from '../components/Home/HomeStyle'

class Home extends Component {
	render() {
		return (
			<>
				<Layout>
					<Container>
						<Hero />
					</Container>
					<Container>
						<WebsiteWork />
					</Container>
					<Container>
						<Grid />
					</Container>
					{/* <MarketingMaterials /> */}
					<Container>
						<WorkWithThomas />
					</Container>
				</Layout>
			</>
		);
	}
}

export default Home;

import styled from 'styled-components';
import React, { Component } from 'react';
import Link from 'next/link';

import { useRef } from 'react';
import { Layout } from '../Layout/Layout';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import AboutThomas from '../components/AboutThomas/AboutThomas';
import ContactAndThisSite from '../components/ContactAndThisSite/ContactAndThisSite';
// import GlobalStyles from '../styles/globels';

class Home extends Component {
	render() {
		return (
			<Layout>
				<Header />
				<Hero />
				<WorkExperience />
				<AboutThomas />
				{/* <ContactAndThisSite /> */}
			</Layout>
		);
	}
}

export default Home;

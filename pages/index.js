import styled from 'styled-components';
import React, { Component } from 'react';
import Link from 'next/link';

import { useRef } from 'react';
import { Layout } from '../Layout/Layout';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import EducationAndSkills from '../components/EducationAndSkills/EducationAndSkills';
import AboutThomas from '../components/AboutThomas/AboutThomas';
import ContactAndThisSite from '../components/ContactAndThisSite/ContactAndThisSite';
// import GlobalStyles from '../styles/globels';
import Nav from '../components/Nav/Nav';

class Home extends Component {
	render() {
		return (
			<Layout>
				<Link
					href='../components/ContactAndThisSite/ContactAndThisSite#contact'
					scroll={false}>
					<a>The Team</a>
				</Link>
				<Nav />
				<Header />
				<Hero />
				<WorkExperience />
				<EducationAndSkills />
				<AboutThomas />
				<ContactAndThisSite id='contact' />
			</Layout>
		);
	}
}

export default Home;

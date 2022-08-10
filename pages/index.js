import styled from 'styled-components';
import React, { Component } from 'react';
import Link from 'next/link';
import { Layout } from '../Layout/Layout';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import AboutAndSkill from '../components/AboutThomasAndSkills/AboutAndSkill';
import ContactAndThisSite from '../components/ContactAndThisSite/ContactAndThisSite';

// import GlobalStyles from '../styles/globels';

class Home extends Component {
	render() {
		return (
			<Layout>
				<Header />
				<Hero />
				<WorkExperience />
				<AboutAndSkill />
				<ContactAndThisSite />
			</Layout>
		);
	}
}

export default Home;

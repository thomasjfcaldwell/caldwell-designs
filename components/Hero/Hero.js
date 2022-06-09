import React from 'react';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from '../ContactThomas/ContactThomas';
import { HeroContainer } from './HeroStyles';

const Hero = () => {
	return (
		<HeroContainer>
			{/* <Projects /> */}
			<About />
			<Contact />
		</HeroContainer>
	);
};

export default Hero;

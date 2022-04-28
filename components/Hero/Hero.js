import React from 'react';
import Projects from './Projects/Projects';
import About from './About/About';
import Title from './Title/Title';
import { Container } from './HeroStyles';

const Hero = () => {
	return (
		<Container>
			<Title />
			<Projects />
			<About />
		</Container>
	);
};

export default Hero;

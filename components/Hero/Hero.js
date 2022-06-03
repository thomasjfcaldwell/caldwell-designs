import React from 'react';
import Projects from './Projects/Projects';
import About from './About/About';
import TitleComponent from './Title/Title';
import { Container } from './HeroStyles';

const Hero = () => {
	return (
		<Container>
			<TitleComponent />
			<Projects />
			<About />
		</Container>
	);
};

export default Hero;

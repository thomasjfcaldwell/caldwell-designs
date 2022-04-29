import React from 'react';
import Image from 'next/image';

import {
	AboutTitle,
	AboutContainer,
	AboutImage,
	AboutText,
} from './AboutStyles';

import { AboutLink } from '../LinkButton/LinkButton.Styles';

const imageThomas = 'https://i.ibb.co/4jnGfqT/New-Portfolio-Image4-27.png';

const About = () => {
	return (
		<AboutContainer>
			<AboutTitle>About</AboutTitle>
			<AboutImage
				loading='lazy'
				src={imageThomas}
				alt='photo of thomas'
				className=''
			/>
			<AboutText>
				Forward thinking and mature web designer with proven experience
				designing and building clean, functional sites. Loves to learn while
				getting the Job done to the highest standard
			</AboutText>
			<AboutLink>Find Out More</AboutLink>
		</AboutContainer>
	);
};

export default About;

import React from 'react';
import Image from 'next/image';

import { AboutContainer, AboutImage, AboutText } from './AboutStyles';

import { Title, TitleContainer } from '../Title/TitleStyles';

import { AboutLink } from '../LinkButton/LinkButton.Styles';
import Link from 'next/link';

const imageThomas = 'https://i.ibb.co/4jnGfqT/New-Portfolio-Image4-27.png';

const About = () => {
	return (
		<AboutContainer>
			<TitleContainer>
				<Title>About</Title>
			</TitleContainer>
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
			<Link href='#about' scroll={false}>
				<AboutLink>Find Out More</AboutLink>
			</Link>
		</AboutContainer>
	);
};

export default About;

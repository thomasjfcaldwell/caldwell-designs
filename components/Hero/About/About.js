import React from 'react';
import Image from 'next/image';

import {
	AboutContainer,
	AboutTitleContainer,
	AboutTitle,
	AboutImageContainer,
	AboutImage,
	AboutTextContainer,
	AboutText,
	AboutLinkContainer,
	AboutLink,
} from './AboutStyles';

import Link from 'next/link';

const imageThomas = 'https://i.ibb.co/4jnGfqT/New-Portfolio-Image4-27.png';

const About = () => {
	return (
		<AboutContainer>
			<AboutTitleContainer>
				<AboutTitle>About</AboutTitle>
			</AboutTitleContainer>
			<AboutImageContainer>
				<AboutImage
					loading='lazy'
					src={imageThomas}
					alt='photo of thomas'
					className=''
				/>
			</AboutImageContainer>
			<AboutTextContainer>
				<AboutText>
					Forward thinking and mature web designer with proven experience
					designing and building clean, functional sites. Loves to learn while
					getting the Job done to the highest standard
				</AboutText>
			</AboutTextContainer>
			<AboutLinkContainer>
				<Link href='#about' scroll={false}>
					<AboutLink>Find Out More</AboutLink>
				</Link>
			</AboutLinkContainer>
		</AboutContainer>
	);
};

export default About;

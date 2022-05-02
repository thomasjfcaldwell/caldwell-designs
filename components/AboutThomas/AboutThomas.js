import React from 'react';

import {
	AboutThomasContainer,
	AboutThomasImage,
	AboutThomasText,
} from './AboutThomasStyles';

const imageOfThomas =
	'https://i.ibb.co/Dz1Kxf5/austin-distel-Tlu-Mvvr-Z57g-unsplash.jpg';

export default function AboutThomas() {
	return (
		<AboutThomasContainer>
			<AboutThomasImage
				loading='lazy'
				src={imageOfThomas}
				alt='image of thomas'
				className=''
			/>
			<AboutThomasText>
				A keen traveller, surfer and runner British by birth, but based in the
				US. Always curious about code and how web sites work but equally scared.
				An opportunity arose at a passed employment to set up and then
				management of a E-commerce site. With a thirst for knowledge I enrolled
				in Web Development Bootcamp to start my journey in front end
				development. Since completing my Bootcamp I have gained experience
				designing and developing websites for local business’ and my own
				e-commence site. Still thirsty I am looking for a role that will quench
				my thirst by demanding that am always pushing myself to improve every
				day.{' '}
			</AboutThomasText>
		</AboutThomasContainer>
	);
}

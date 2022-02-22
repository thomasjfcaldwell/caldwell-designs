import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GrFormNextLink } from 'react-icons/gr';
import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import {
	Wrapper,
	ContentContainer,
	ImageContainer,
	Image,
	LinksContainer,
	LinkButton,
	LinkButtonContainer,
	LinkText,
	TextContainer,
	Text,
	RequestContainer,
} from './HeroStyle';

import { Title, Line, TitleContainer } from './HomeStyle';

function Hero() {
	let iconStyles = { margin: '0 1px' };
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);
	return (
		<div>
			<TitleContainer data-aos='fade-up'>
				<Title>Get To Know Thomas</Title>
				<Line></Line>
			</TitleContainer>
			<Wrapper>
				<TextContainer>
					<Text>
						Thomas is a web developer and designer currently residing in
						Huntington Beach, CA. He uses all of the latest technologies to
						design and develop. Including all of Adobe’s creative cloud
						specializing in Photoshop, Illustrator, XD and InDesign. He has
						developed website using React Framework, Wordpress and Shopify.
						Originally from The United Kingdom he lives with his wife and pets.
						When he is not designing websites he like long walks on the beach
						and surfing.
					</Text>
				</TextContainer>
				<ContentContainer>
					<ImageContainer>
						<Image
							src='https://i.ibb.co/dJjyPrP/New-Portfolio-Image.jpg'
							alt='New-Portfolio-Image'
							border='0'
							// size={500}
						/>
					</ImageContainer>
					<LinksContainer>
						<LinkButtonContainer>
							<Link href='/contact' passHref>
								<LinkButton>
									Contact
									<GrFormNextLink size={6} style={iconStyles} />
								</LinkButton>
							</Link>
						</LinkButtonContainer>
						<LinkButtonContainer>
							<Link href='/examplesofwork' passHref>
								<LinkButton>
									Previous Work
									<GrFormNextLink size={6} style={iconStyles} />
								</LinkButton>
							</Link>
						</LinkButtonContainer>
						<LinkButtonContainer>
							<Link href='/workhistory' passHref>
								<LinkButton>
									Work History
									<GrFormNextLink size={6} style={iconStyles} />
								</LinkButton>
							</Link>
						</LinkButtonContainer>
					</LinksContainer>
				</ContentContainer>
				{/* <RequestContainer>
					<Link href='/' passHref>
						<LinkText>
							<a>
								Go To Home Page <BsFillArrowRightCircleFill size={10} />
							</a>
						</LinkText>
					</Link>
				</RequestContainer> */}
			</Wrapper>
		</div>
	);
}

export default Hero;

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
	TextContainer,
	Text,
	BackgroundDiv,
	HomeTitleContainer,
	HomeTitle,
} from './HeroStyle';

function Hero() {
	let iconStyles = {
		margin: '0 1px',
	};
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

	//  data-aos='fade-up'
	return (
		<div>
			<BackgroundDiv></BackgroundDiv>
			<Wrapper>
				<ContentContainer>
					<HomeTitleContainer>
						<HomeTitle>Get To Know Thomas</HomeTitle>
					</HomeTitleContainer>
					<ImageContainer>
						<Image
							src='https://i.ibb.co/vQ7h0nj/portfolio-Image2-23.png'
							alt='New-Portfolio-Image'
							border='0'
							// size={500}
						/>
					</ImageContainer>

					<TextContainer>
						<Text>
							Thomas is a web developer and designer currently residing in
							Huntington Beach, CA. He uses all of the latest technologies to
							design and develop. Including all of Adobe’s creative cloud
							specializing in Photoshop, Illustrator, XD and InDesign. He has
							developed website using React Framework, Wordpress and Shopify.
							Originally from The United Kingdom he lives with his wife and
							pets. When he is not designing websites he like long walks on the
							beach and surfing.
						</Text>
					</TextContainer>
					{/* <LinksContainer>
						<LinkButtonContainer>
							<Link href='/contact' passHref>
								<LinkButton>
									Contact
									<GrFormNextLink size={20} style={iconStyles} />
								</LinkButton>
							</Link>
						</LinkButtonContainer>
						<LinkButtonContainer>
							<Link href='/examplesofwork' passHref>
								<LinkButton>
									Projects
									<GrFormNextLink size={20} style={iconStyles} />
								</LinkButton>
							</Link>
						</LinkButtonContainer>
						<LinkButtonContainer>
							<Link href='/workhistory' passHref>
								<LinkButton>
									Work History
									<GrFormNextLink size={20} style={iconStyles} />
								</LinkButton>
							</Link>
						</LinkButtonContainer>
					</LinksContainer> */}
				</ContentContainer>
			</Wrapper>
		</div>
	);
}

export default Hero;

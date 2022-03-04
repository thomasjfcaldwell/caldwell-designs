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

	const portfolioImage = 'https://i.ibb.co/26FK8tR/New-Portfolio-Image2-24.png';
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

	return (
		<div>
			<BackgroundDiv></BackgroundDiv>
			<Wrapper>
				<ContentContainer>
					<HomeTitleContainer data-aos='fade-up'>
						<HomeTitle>Get To Know Thomas</HomeTitle>
					</HomeTitleContainer>
					<ImageContainer>
						<Image
							src={portfolioImage}
							alt='New-Portfolio-Image'
							border='0'
							// size={500}
						/>
					</ImageContainer>

					<TextContainer>
						<Text>
							Forward thinking and mature web designer with proven experince
							designing and building clean, functional sites. Skilled in Adobe
							Creative Suite, HTML, CSS, JavaScript and implements seamless UX
							and UI with creatively. Designed and Developed multiple sites
							including for small business’, solo owned business’ and Ecommerce
							store Originally from The United Kingdom Thomas lives with his
							wife and pets. When he is not designing websites he like long
							walks on the beach, surfing and following his favorite sports team
							Plymouth Argyle FC.
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

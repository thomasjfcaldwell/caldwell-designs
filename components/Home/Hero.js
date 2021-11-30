import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GrFormNextLink } from 'react-icons/gr';

import {
	Wrapper,
	Title,
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
	Line,
} from './HeroStyle';

function Hero() {
	let iconStyles = {};
	return (
		<div>
			<Title>Get To Know Thomas</Title>
			<Line></Line>
			<Wrapper>
				<TextContainer>
					<Text>
						Thomas is a web developer and designer currently residing in
						Huntington Beach, CA.
						<span>
							He uses all of the latest technologies to design and develop.
							Including all of Adobe’s creative cloud specializing in Photoshop,
							Illustrator, XD and InDesign. He has developed website using React
							Framework, Wordpress and Shopify. Originally from The United
							Kingdom he lives with his wife and pets. When he is not designing
							websites he like long walks on the beach and surfing.
						</span>
					</Text>
				</TextContainer>
				<ContentContainer>
					<ImageContainer>
						<Image
							src='https://i.ibb.co/DYQm9jW/thomasportfolioimage-1x1.jpg'
							alt='thomasportfolioimage'
							border='0'
							// size={500}
						/>
					</ImageContainer>
					<LinksContainer>
						<LinkButtonContainer>
							<LinkButton>
								Services & Pricing
								<GrFormNextLink size={11} style={iconStyles} />
							</LinkButton>
						</LinkButtonContainer>
						<LinkButtonContainer>
							<LinkButton>
								Previous Work
								<GrFormNextLink size={11} style={iconStyles} />
							</LinkButton>
						</LinkButtonContainer>
						<LinkButtonContainer>
							<LinkButton>
								Work History
								<GrFormNextLink size={11} style={iconStyles} />
							</LinkButton>
						</LinkButtonContainer>
					</LinksContainer>
				</ContentContainer>
				<RequestContainer>
					<Link href='/playing' passHref>
						<LinkText>
							<a>
								Project Request <BsFillArrowRightCircleFill size={15} />
							</a>
						</LinkText>
					</Link>
				</RequestContainer>
			</Wrapper>
		</div>
	);
}

export default Hero;

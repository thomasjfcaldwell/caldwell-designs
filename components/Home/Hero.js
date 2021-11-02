import {
	Container,
	Title,
	ContentContainer,
	ImageContainer,
	Image,
	LinksContainer,
	LinkButton,
	TextContainer,
	Text,
} from './HeroStyle';
import thomasPhoto from '../../public/Images/thomasportfolioimage.jpg';

function Hero() {
	return (
		<div>
			<Container>
				<Title>Get To Know Thomas Better</Title>
				<ContentContainer>
					<ImageContainer>
						<Image
							src='https://i.ibb.co/Lv40RtJ/thomasportfolioimage.jpg'
							alt='thomasportfolioimage'
							border='0'
							size={300}
						/>
					</ImageContainer>
					<LinksContainer>
						<LinkButton>hello</LinkButton>
						<LinkButton>goodbye</LinkButton>
						<LinkButton>yo man</LinkButton>
					</LinksContainer>
				</ContentContainer>
				<TextContainer>
					<Text>
						Thomas is a web developer and designer currently residing in
						Huntington Beach, CA He uses all of the latest technologies to
						design and develop. Including all of Adobe’s creative cloud
						specializing in Photoshop, Illustrator, XD and InDesign. He has
						developed website using React Framework, Wordpress and Shopify.
						Originally from The United Kingdom he lives with his wife and pets.
						When he's not designing websites he like long walks on the beach and
						surfing.
					</Text>
				</TextContainer>
			</Container>
		</div>
	);
}

export default Hero;

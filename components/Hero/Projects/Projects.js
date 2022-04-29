import React from 'react';
import {
	Container,
	GameContainer,
	GameImage,
	GameTitle,
	GameText,
	GameLinkContainer,
	GameLink,
	GameCodeLink,
	ShopContainer,
	ShopImage,
	ShopTitle,
	ShopText,
	ShopLinkContainer,
	ShopLink,
	ShopCodeLink,
} from './ProjectsStyles';

const shopImage = 'https://i.ibb.co/N2LTVg6/store-Mock-Up1-phonetablet.png';

const gameImage = 'https://i.ibb.co/rHv6ZqK/capital-Mock-Up.png';

import { WorkButton } from '../LinkButton/LinkButton.Styles';

const Projects = () => {
	return (
		<Container>
			<GameContainer>
				<GameImage
					loading='lazy'
					src={gameImage}
					alt='Mock up of Trivia'
					className=''
				/>
				<GameTitle>GAME</GameTitle>
				<GameText>
					This is a trivia game build with JavaScript, CSS and HTML. Using a 3rd
					Party Api for the data, I developed a game testing the users knowledge
					of capitals cites. Built with vanilla JavaScript I used Logic to match
					the questions to the answer, keep track of scores, beat the game or
					loose and reset.
				</GameText>
				<GameLinkContainer>
					<GameLink>Play Game</GameLink>
					<GameCodeLink>See Code</GameCodeLink>
				</GameLinkContainer>
			</GameContainer>
			<ShopContainer>
				<ShopImage
					loading='lazy'
					src={shopImage}
					alt='Mock Up of Store'
					className=''
				/>
				<ShopTitle>E-COMMENCE</ShopTitle>
				<ShopText>
					Store built using Shopify and React. I wanted to build an Unquote site
					that allowed me To use Shopify for the backend and routes but use All
					of my own custom CSS to Bring the site to life and stamp on own
					personality on to it.
				</ShopText>
				<ShopLinkContainer>
					<ShopLink>Play Shop</ShopLink>
					<ShopCodeLink>See Code</ShopCodeLink>
				</ShopLinkContainer>
			</ShopContainer>
			<WorkButton>Go to Work Experince</WorkButton>
		</Container>
	);
};

export default Projects;

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
	ShopLink,
	ShopCodeLink,
} from './ProjectsStyles';

const gameImage = 'https://i.ibb.co/rHv6ZqK/capital-Mock-Up.png';

import { WorkButton } from '../LinkButton/LinkButton.Styles';

const Projects = () => {
	return (
		<Container>
			<GameContainer>
				<GameImage
					loading='lazy'
					src={gameImage}
					alt='photo of thomas'
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
				<ShopImage />
				<ShopTitle>Shop</ShopTitle>
				{/* <ShopText>
				
				</ShopText> */}
				<ShopLink>Play Shop</ShopLink>
				<ShopCodeLink>See Code</ShopCodeLink>
			</ShopContainer>
			<WorkButton>Go to Work Experince</WorkButton>
		</Container>
	);
};

export default Projects;

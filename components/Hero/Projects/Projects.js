import React from 'react';
import {
	Container,
	GameContainer,
	GameImage,
	GameTitle,
	GameText,
	GameLink,
	GameCodeLink,
	ShopContainer,
	ShopImage,
	ShopTitle,
	ShopText,
	ShopLink,
	ShopCodeLink,
} from './ProjectsStyles';

import { WorkButton } from '../LinkButton/LinkButton.Styles';

const Projects = () => {
	return (
		<Container>
			<GameContainer>
				<GameImage />
				<GameTitle>GAME</GameTitle>
				<GameText>
					This is a trivia game build with JavaScript, CSS and HTML. Using a 3rd
					Party Api for the data, I developed a game testing the users knowledge
					of capitals cites. Built with vanilla JavaScript I used Logic to match
					the questions to the answer, keep track of scores, beat the game or
					loose and reset.
				</GameText>
				<GameLink>Play Game</GameLink>
				<GameCodeLink>See Code</GameCodeLink>
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

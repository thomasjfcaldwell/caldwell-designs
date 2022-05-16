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
	GameIcon,
	LinkTextContainer,
	LinkTitle,
	ShopContainer,
	ShopImage,
	ShopTitle,
	ShopText,
	ShopLinkContainer,
	ShopLink,
	ShopCodeLink,
	ShopIcon,
	ShopLinkTextContainer,
	ShopLinkTitle,
} from './ProjectsStyles';

import Link from 'next/link';

const shopImage = 'https://i.ibb.co/N2LTVg6/store-Mock-Up1-phonetablet.png';

const gameImage = 'https://i.ibb.co/rHv6ZqK/capital-Mock-Up.png';

import {
	AiFillGithub,
	AiFillPlayCircle,
	AiOutlineShoppingCart,
} from 'react-icons/ai';

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
					<GameLink>
						<GameIcon style={{ color: '#7FBD9B' }}>
							<AiFillPlayCircle />
						</GameIcon>
						<LinkTextContainer>
							<Link
								href='https://thomasjfcaldwell.github.io/project1-capitalsoftheworld-trivia-game/'
								scroll={false}>
								<LinkTitle>Play Game</LinkTitle>
							</Link>
						</LinkTextContainer>
					</GameLink>
					<GameLink>
						<GameIcon style={{ color: '#7FBD9B' }}>
							<AiFillGithub />
						</GameIcon>
						<LinkTextContainer>
							<Link
								href='https://github.com/thomasjfcaldwell/project1-capitalsoftheworld-trivia-game'
								scroll={false}>
								<LinkTitle>See Code</LinkTitle>
							</Link>
						</LinkTextContainer>
					</GameLink>
				</GameLinkContainer>
			</GameContainer>
			<ShopContainer>
				<ShopImage
					loading='lazy'
					src={shopImage}
					alt='Mock Up of Store'
					className=''
				/>
				<ShopTitle>STORE</ShopTitle>
				<ShopText>
					Store built using Shopify and React. I wanted to build an Unquote site
					that allowed me To use Shopify for the backend and routes but use All
					of my own custom CSS to Bring the site to life and stamp on own
					personality on to it.
				</ShopText>
				<ShopLinkContainer>
					<ShopLink>
						<ShopIcon style={{ color: '#7FBD9B' }}>
							<AiOutlineShoppingCart />
						</ShopIcon>
						<LinkTextContainer>
							<Link href='https://easyandquickgifts.com/' scroll={false}>
								<LinkTitle>Visit Shop</LinkTitle>
							</Link>
						</LinkTextContainer>
					</ShopLink>
					<ShopLink>
						<ShopIcon style={{ color: '#7FBD9B' }}>
							<AiFillGithub />
						</ShopIcon>
						<LinkTextContainer>
							<Link href='https://github.com/thomasjfcaldwell' scroll={false}>
								<LinkTitle>See Code</LinkTitle>
							</Link>
						</LinkTextContainer>
					</ShopLink>
				</ShopLinkContainer>
			</ShopContainer>
			<Link href='#work-history' scroll={false}>
				<WorkButton>Go to Work Experince</WorkButton>
			</Link>
		</Container>
	);
};

export default Projects;

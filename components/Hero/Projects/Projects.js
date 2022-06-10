import React from 'react';
import {
	ProjectsWrapper,
	ProjectsContainer,
	ProjectsImage,
	ProjectsTitle,
	ProjectsText,
	LinkTitle,
	ProjectsLinkContainer,
	ProjectsLink,
	ProjectsIcon,
	ProjectsNavLink,
} from './ProjectsStyles';

import { Title, TitleContainer } from '../Title/TitleStyles';

const shopImage =
	'https://res.cloudinary.com/djjqsmlei/image/upload/v1654551125/storeMockUp1.phone_zaaryb.png';

const gameImage = 'https://i.ibb.co/rHv6ZqK/capital-Mock-Up.png';

import {
	AiFillGithub,
	AiFillPlayCircle,
	AiOutlineShoppingCart,
} from 'react-icons/ai';

const Projects = () => {
	return (
		<ProjectsWrapper>
			<TitleContainer>
				<Title>Projects</Title>
			</TitleContainer>
			<ProjectsContainer>
				<ProjectsImage
					loading='lazy'
					src={gameImage}
					alt='Mock up of Trivia'
					className=''
				/>

				<ProjectsTitle>GAME</ProjectsTitle>
				<ProjectsText>
					This is a trivia game build with JavaScript, CSS and HTML. Testing
					users knowledge of the worlds capital cities. Using JSON data from a
					3rd party API and JavaScript logic the game keeps track of the correct
					answers allowing the user to either win or lose.
				</ProjectsText>
				<ProjectsLinkContainer>
					<ProjectsLink>
						<ProjectsIcon style={{ color: '#7FBD9B' }}>
							<AiFillPlayCircle />
						</ProjectsIcon>
						<LinkTitle
							href='https://thomasjfcaldwell.github.io/project1-capitalsoftheworld-trivia-game/'
							scroll={false}>
							Play Game
						</LinkTitle>
					</ProjectsLink>
					<ProjectsLink>
						<ProjectsIcon style={{ color: '#7FBD9B' }}>
							<AiFillGithub />
						</ProjectsIcon>
						<LinkTitle
							href='https://github.com/thomasjfcaldwell/project1-capitalsoftheworld-trivia-game'
							scroll={false}>
							See Code
						</LinkTitle>
					</ProjectsLink>
				</ProjectsLinkContainer>
			</ProjectsContainer>
			<ProjectsContainer primary>
				<ProjectsTitle primary>STORE</ProjectsTitle>
				<ProjectsText primary>
					Store built using Shopify and React. Purpose of site is to sell
					original designed gifts to the public. Solo project from the start I
					am responsible for all aspects of the site. Including merchandise
					design, site design and development plus promotional marketing assets.
				</ProjectsText>
				<ProjectsImage
					primary
					loading='lazy'
					src={shopImage}
					alt='Mock Up of Store'
					className=''
				/>
				<ProjectsLinkContainer primary>
					<ProjectsLink>
						<ProjectsIcon style={{ color: '#7FBD9B' }}>
							<AiOutlineShoppingCart />
						</ProjectsIcon>
						<LinkTitle href='https://easyandquickgifts.com/' scroll={false}>
							Visit Shop
						</LinkTitle>
					</ProjectsLink>
					<ProjectsLink>
						<ProjectsIcon style={{ color: '#7FBD9B' }}>
							<AiFillGithub />
						</ProjectsIcon>
						<LinkTitle
							href='https://github.com/thomasjfcaldwell'
							scroll={false}>
							See Code
						</LinkTitle>
					</ProjectsLink>
				</ProjectsLinkContainer>
			</ProjectsContainer>
		</ProjectsWrapper>
	);
};

export default Projects;

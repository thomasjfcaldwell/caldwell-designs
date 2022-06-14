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
	'https://res.cloudinary.com/djjqsmlei/image/upload/v1655244423/billcaldwellmockup_wplprc.png';

const gameImage = 'https://i.ibb.co/rHv6ZqK/capital-Mock-Up.png';

import { AiFillGithub, AiFillPlayCircle, AiOutlineUser } from 'react-icons/ai';

const Projects = () => {
	return (
		<ProjectsWrapper id='projects'>
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
				<ProjectsTitle primary>Artist Portfolio</ProjectsTitle>
				<ProjectsText primary>
					Personal portfolio designed and developed for a close family member.
					Site was built using vanilla html,css and JavaStript. The site uses
					semantic markup and is responsive over all devices and screen size.
					Currently working on an update to the site.
				</ProjectsText>
				<ProjectsImage
					primary
					loading='lazy'
					src={shopImage}
					alt='Mock up of billcaldwell.com'
					className=''
				/>
				<ProjectsLinkContainer primary>
					<ProjectsLink>
						<ProjectsIcon style={{ color: '#7FBD9B' }}>
							<AiOutlineUser />
						</ProjectsIcon>
						<LinkTitle
							href='https://thomasjfcaldwell.github.io/billcaldwell.com/'
							scroll={false}>
							Visit Site
						</LinkTitle>
					</ProjectsLink>
					<ProjectsLink>
						<ProjectsIcon style={{ color: '#7FBD9B' }}>
							<AiFillGithub />
						</ProjectsIcon>
						<LinkTitle
							href='https://github.com/thomasjfcaldwell/billcaldwell.com'
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

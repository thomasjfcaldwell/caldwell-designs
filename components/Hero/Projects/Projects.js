import React from 'react';
import {
	ProjectsWrapper,
	ProjectsContainer,
	ProjectsImageContainer,
	ProjectsImage,
	ProjectContentContainer,
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
				<ProjectsImageContainer>
					<ProjectsImage
						loading='lazy'
						src={gameImage}
						alt='Mock up of Trivia'
						className=''
					/>
				</ProjectsImageContainer>
				<ProjectContentContainer>
					<ProjectsTitle>GAME</ProjectsTitle>
					<ProjectsText>
						This is a trivia game build with JavaScript, CSS and HTML. Testing
						users knowledge of the worlds capital cities. Using JSON data from a
						3rd party API and JavaScript logic.
					</ProjectsText>
					<ProjectsLinkContainer>
						<ProjectsLink>
							<ProjectsIcon style={{ color: '#7FBD9B' }}>
								<AiFillPlayCircle />
							</ProjectsIcon>
							<LinkTitle
								href='https://thomasjfcaldwell.github.io/project1-capitalsoftheworld-trivia-game/'
								// scroll={false}>
							>
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
				</ProjectContentContainer>
			</ProjectsContainer>
			<ProjectsContainer primary>
				<ProjectContentContainer>
					<ProjectsTitle primary>Artist Portfolio</ProjectsTitle>
					<ProjectsText primary>
						Personal portfolio designed and developed for family member.Built
						using vanilla html,css & JavaStript.Semantic markup and is
						responsive over all devices and screen size.
					</ProjectsText>
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
				</ProjectContentContainer>
				<ProjectsImageContainer>
					<ProjectsImage
						primary
						loading='lazy'
						src={shopImage}
						alt='Mock up of billcaldwell.com'
						className=''
					/>
				</ProjectsImageContainer>
			</ProjectsContainer>
		</ProjectsWrapper>
	);
};

export default Projects;

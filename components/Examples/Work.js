import { Projects } from '../../constants/constants';
import {
	Wrapper,
	WorkTitle,
	ContentContainer,
	Image,
	Intro,
	ImageContainer,
	IntroContainer,
	Technologies,
	TechnologiesContainer,
	LinksContainer,
	Text,
} from './WorkStyle';

import { Title, Line, TitleContainer } from '../Home/HomeStyle';
import Link from 'next/link';

import { AiOutlineDeploymentUnit, AiFillGithub } from 'react-icons/ai';

function Work() {
	return (
		<div>
			<TitleContainer>
				<Title>Previous Work</Title>
				<Line></Line>
			</TitleContainer>
			<Wrapper>
				{Projects.map((user, id) => (
					<ContentContainer key={id}>
						<WorkTitle>{user.title}</WorkTitle>
						<ImageContainer>
							<Image src={user.image} alt='the app in action' />
						</ImageContainer>
						<IntroContainer>
							<Intro>{user.intro}</Intro>
						</IntroContainer>
						<TechnologiesContainer>
							<Technologies>{user.technologies}</Technologies>
						</TechnologiesContainer>
						<LinksContainer>
							<Link href={user.deployed} passHref>
								<Text>
									Deployed Site{' '}
									<AiOutlineDeploymentUnit
										size={20}
										style={{
											margin: '0 0.7em',
										}}
									/>
								</Text>
							</Link>
							<Link href={user.github} passHref>
								<Text>
									Github Repo
									<AiFillGithub
										size={20}
										style={{
											margin: '0 0.7em',
										}}
									/>
								</Text>
							</Link>
						</LinksContainer>
					</ContentContainer>
				))}
			</Wrapper>
		</div>
	);
}

export default Work;

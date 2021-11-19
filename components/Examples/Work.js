import { Projects } from '../../constants/constants';
import {
	Wrapper,
	Title,
	ContentContainer,
	Image,
	Intro,
	ImageContainer,
	IntroContainer,
	Technologies,
	TechnologiesContainer,
	LinksContainer,
} from './WorkStyle';

import Link from 'next/link';

import { AiOutlineDeploymentUnit, AiFillGithub } from 'react-icons/ai';

function Work() {
	return (
		<div>
			{Projects.map((user, id) => (
				<Wrapper key={id}>
					<ContentContainer>
						<Title>{user.title}</Title>
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
								<AiOutlineDeploymentUnit
									size={20}
									style={{
										margin: '0 0.7em',
									}}
								/>
							</Link>
							<Link href={user.github} passHref>
								<AiFillGithub
									size={20}
									style={{
										margin: '0 0.7em',
									}}
								/>
							</Link>
						</LinksContainer>
					</ContentContainer>
				</Wrapper>
			))}
		</div>
	);
}

export default Work;

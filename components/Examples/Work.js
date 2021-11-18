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
} from './WorkStyle';

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
					</ContentContainer>
				</Wrapper>
			))}
		</div>
	);
}

export default Work;

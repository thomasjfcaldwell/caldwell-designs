import React, { Component } from 'react';
import {
	UnderTitle,
	DescriptionContainer,
	StepContainer,
	WorkWithThomasWrapper,
	HeadlineContainer,
	Step,
	Description,
	ContentContainer,
	Headline,
	RedContainer,
	Red,
	BlackContainer,
	Black,
} from '../Home/WorkWithThomasStyle';

import { Title, Line, TitleContainer } from './HomeStyle';

import { process } from '../../constants/constants';

export default class WorkWithThomas extends Component {
	render() {
		return (
			<div>
				<TitleContainer>
				<Title>Work With Thomas</Title>
				<Line></Line>
				</TitleContainer>

				<WorkWithThomasWrapper>
					<div>
						{process.map((step, id) => (
							<ContentContainer key={id}>
								<StepContainer>
									<Step>{step.step}</Step>
								</StepContainer>
								<RedContainer>
									<Red></Red>
								</RedContainer>
								<DescriptionContainer>
									<Description>{step.description}</Description>
								</DescriptionContainer>
								<HeadlineContainer>
									<Headline>{step.headline}</Headline>
								</HeadlineContainer>
								<BlackContainer>
									<Black></Black>
								</BlackContainer>
							</ContentContainer>
						))}
					</div>
				</WorkWithThomasWrapper>
			</div>
		);
	}
}

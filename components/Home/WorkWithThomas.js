import React, { Component } from 'react';
import {
	TitleContainer,
	Title,
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
	Line,
} from '../Home/WorkWithThomasStyle';

import { process } from '../../constants/constants';

export default class WorkWithThomas extends Component {
	render() {
		return (
			<div>
				<Title>Work With Thomas</Title>
				<Line></Line>

				<div>
					{process.map((step, id) => (
						<WorkWithThomasWrapper key={id}>
							<ContentContainer>
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
						</WorkWithThomasWrapper>
					))}
				</div>
			</div>
		);
	}
}

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
					<ContentContainer>
						<StepContainer>
							<Step>Step 1</Step>
						</StepContainer>
						<RedContainer>
							<Red></Red>
						</RedContainer>
						<DescriptionContainer>
							<Description>
								The start of possible Collaboration is the project request. Your
								info allows me to understand if I am the right fit for your
								project. If yes, I will arrange a call. If No, I will do my best
								to recommend someone that is
							</Description>
						</DescriptionContainer>
						<HeadlineContainer>
							<Headline>Project Request</Headline>
						</HeadlineContainer>
						<BlackContainer>
							<Black></Black>
						</BlackContainer>
					</ContentContainer>
					<ContentContainer>
						<StepContainer>
							<Step>Step 2</Step>
						</StepContainer>
						<RedContainer>
							<Red></Red>
						</RedContainer>
						<DescriptionContainer>
							<Description>
								In are first meeting we will talk about your exit goods and
								requirements, I’ll answer any questions you have define goals
								and next steps
							</Description>
						</DescriptionContainer>
						<HeadlineContainer>
							<Headline>First Meeting</Headline>
						</HeadlineContainer>
						<BlackContainer>
							<Black></Black>
						</BlackContainer>
					</ContentContainer>
					<ContentContainer>
						<StepContainer>
							<Step>Step 3</Step>
						</StepContainer>
						<RedContainer>
							<Red></Red>
						</RedContainer>
						<DescriptionContainer>
							<Description>
								Once I have as much information as possible on your project.I
								will create an individual proposal. All proposals will be job
								completed and not charged by the hours. This means you will have
								a full overview of the costs and time-frame.
							</Description>
						</DescriptionContainer>
						<HeadlineContainer>
							<Headline>Proposal</Headline>
						</HeadlineContainer>
						<BlackContainer>
							<Black></Black>
						</BlackContainer>
					</ContentContainer>
					<ContentContainer>
						<StepContainer>
							<Step>Step 4</Step>
						</StepContainer>
						<RedContainer>
							<Red></Red>
						</RedContainer>
						<DescriptionContainer>
							<Description>
								I will then start to Implement the project with particular
								emphasis on communication. Through the communication channel of
								your choice with regular updates.
							</Description>
						</DescriptionContainer>
						<HeadlineContainer>
							<Headline>Implementation</Headline>
						</HeadlineContainer>
						<BlackContainer>
							<Black></Black>
						</BlackContainer>
					</ContentContainer>
					<ContentContainer>
						<StepContainer>
							<Step>Step 5</Step>
						</StepContainer>
						<RedContainer>
							<Red></Red>
						</RedContainer>
						<DescriptionContainer>
							<Description>
								On completion of the project, the finished project goes through
								internal quality assurances. Once put through it paces it will
								be handed over to you the client.
							</Description>
						</DescriptionContainer>
						<HeadlineContainer>
							<Headline>Launch/Handover</Headline>
						</HeadlineContainer>
						<BlackContainer>
							<Black></Black>
						</BlackContainer>
					</ContentContainer>
				</WorkWithThomasWrapper>
			</div>
		);
	}
}

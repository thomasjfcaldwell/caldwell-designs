import React, { Component } from 'react';

import { process } from '../../constants/constants';
import {
	DescriptionContainer,
	StepContainer,
	WorkWithThomasWrapper,
	HeadlineContainer,
	Step,
	Description,
} from '../Home/WorkWithThomasStyle';

export default class WorkWithThomas extends Component {
	render() {
		return (
			<div>
				<WorkWithThomasWrapper>
					<StepContainer>
						{process.map(function (d, idx) {
							return <Step key={idx}>{d.step}</Step>;
						})}
					</StepContainer>
					<DescriptionContainer>
						{process.map(function (d, idx) {
							return (
								<Description key={idx}>
									{d.description}
								</Description>
							);
						})}
					</DescriptionContainer>
					<HeadlineContainer>
						{process.map(function (d, idx) {
							return (
								<p key={idx} style={{ fontSize: '12px' }}>
									{d.headline}
								</p>
							);
						})}
					</HeadlineContainer>
				</WorkWithThomasWrapper>
			</div>
		);
	}
}

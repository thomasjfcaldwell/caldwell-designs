import React from 'react';
import { Title, Line, TitleContainer } from '../Home/HomeStyle';
import {
	SkillsWrapper,
	SkillsContainer,
	SkillsHeader,
	SkillsList,
	SkillsListItem,
} from './SkillsStyles';

export default function Skills() {
	return (
		<div>
			<TitleContainer>
				<Title>Skills</Title>
				<Line></Line>
			</TitleContainer>
			<SkillsWrapper>
				<SkillsContainer>
					<SkillsHeader>Technologies</SkillsHeader>
					<SkillsList>
						<SkillsListItem>HTML</SkillsListItem>
						<SkillsListItem>CSS</SkillsListItem>
						<SkillsListItem>JavaScript</SkillsListItem>
						<SkillsListItem>React</SkillsListItem>
						<SkillsListItem>Next JS</SkillsListItem>
					</SkillsList>
					<SkillsList>
						<SkillsListItem>Wordpress</SkillsListItem>
						<SkillsListItem>Visual Studio Code</SkillsListItem>
						<SkillsListItem>Big Commerce</SkillsListItem>
						<SkillsListItem>Shopify</SkillsListItem>
						<SkillsListItem>Constant Contact</SkillsListItem>
					</SkillsList>
					<SkillsList>
						<SkillsListItem>Photoshop</SkillsListItem>
						<SkillsListItem>Illustrator</SkillsListItem>
						<SkillsListItem>InDesign</SkillsListItem>
						<SkillsListItem>Adobe XD</SkillsListItem>
						<SkillsListItem>Dreamweaver</SkillsListItem>
					</SkillsList>
				</SkillsContainer>
				<SkillsContainer>
					<SkillsHeader>Other Skills</SkillsHeader>
					<SkillsList>
						<SkillsListItem>Time management</SkillsListItem>
						<SkillsListItem>Problem-solving</SkillsListItem>
						<SkillsListItem>Attention to detail</SkillsListItem>
						<SkillsListItem>Flexible</SkillsListItem>
						<SkillsListItem>Open Minded</SkillsListItem>
					</SkillsList>
				</SkillsContainer>
			</SkillsWrapper>
		</div>
	);
}

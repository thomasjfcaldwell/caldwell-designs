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
				<Title>Tech Skills</Title>
				<Line></Line>
			</TitleContainer>
			<SkillsWrapper>
				<SkillsContainer>
					<SkillsHeader>Languages & Frameworks</SkillsHeader>
					<SkillsList>
						<SkillsListItem>HTML</SkillsListItem>
						<SkillsListItem>CSS</SkillsListItem>
						<SkillsListItem>JavaScript</SkillsListItem>
						<SkillsListItem>React</SkillsListItem>
						<SkillsListItem>Next JS</SkillsListItem>
					</SkillsList>
				</SkillsContainer>
				<SkillsContainer>
					<SkillsHeader>Software</SkillsHeader>
					<SkillsList>
						<SkillsListItem>Photoshop</SkillsListItem>
						<SkillsListItem>Illustrator</SkillsListItem>
						<SkillsListItem>InDesign</SkillsListItem>
						<SkillsListItem>Adobe XD</SkillsListItem>
					</SkillsList>
				</SkillsContainer>
				<SkillsContainer>
					<SkillsHeader>Other Skills</SkillsHeader>
					<SkillsList>
						<SkillsListItem>Constant Contact</SkillsListItem>
						<SkillsListItem>Quickbooks</SkillsListItem>
					</SkillsList>
				</SkillsContainer>
			</SkillsWrapper>
		</div>
	);
}

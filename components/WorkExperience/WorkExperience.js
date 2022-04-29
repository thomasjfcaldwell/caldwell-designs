import React from 'react';

import {
	WorkExperienceContainer,
	EasyAndQuickContainer,
	WowContainer,
	ECigContainer,
	BurgerContainer,
	JobTitleContainer,
	YearText,
	CompanyAndPositionContainer,
	CompanyText,
	PositionText,
	JobBox,
	JobBoxHeader,
	JobText,
	EasyAndQuickImage,
} from './WorkExperienceStyles';
import {
	WorkExperienceTitleContainer,
	WorkExperienceTitle,
} from '../Hero/Title/TitleStyles';

export default function WorkExperience() {
	return (
		<WorkExperienceContainer>
			<WorkExperienceTitleContainer>
				<WorkExperienceTitle>Work Experience</WorkExperienceTitle>
			</WorkExperienceTitleContainer>
			<EasyAndQuickContainer>
				<JobTitleContainer>
					<YearText>2022</YearText>
					<CompanyAndPositionContainer>
						<CompanyText>EASY AND QUICK GIFTS</CompanyText>
						<PositionText>WEB DESIGNER/OWNER</PositionText>
					</CompanyAndPositionContainer>
				</JobTitleContainer>
				<JobBox>
					<EasyAndQuickImage />
					<JobBoxHeader>Responsibilities And Achievements</JobBoxHeader>
					<JobText>
						{/* Set up Shopify store with React. Designed all products for sale.
						Poduced all UI including components using CSS/SCSS. Set up payment
						channels and shipping. Photoshop Illustrator Shopify React library
						CSS. */}
					</JobText>
				</JobBox>
			</EasyAndQuickContainer>
			<WowContainer>
				<JobTitleContainer>
					<YearText>2021</YearText>
					<CompanyAndPositionContainer>
						<CompanyText>WOW EVENTS</CompanyText>
						<PositionText>WEB DESIGN</PositionText>
					</CompanyAndPositionContainer>
				</JobTitleContainer>
				<JobBox>
					<EasyAndQuickImage />
					<JobBoxHeader>Responsibilities And Achievements</JobBoxHeader>
					<JobText>
						{/* Set up Shopify store with React. Designed all products for sale.
						Poduced all UI including components using CSS/SCSS. Set up payment
						channels and shipping. Photoshop Illustrator Shopify React library
						CSS. */}
					</JobText>
				</JobBox>
			</WowContainer>
			<ECigContainer className='e-cig'>
				<JobTitleContainer>
					<YearText>2016-20</YearText>
					<CompanyAndPositionContainer>
						<CompanyText>WOW EVENTS</CompanyText>
						<PositionText>WEB DESIGN</PositionText>
					</CompanyAndPositionContainer>
				</JobTitleContainer>
				<JobBox>
					<EasyAndQuickImage />
					<JobBoxHeader>Responsibilities And Achievements</JobBoxHeader>
					<JobText>
						{/* Set up Shopify store with React. Designed all products for sale.
							Poduced all UI including components using CSS/SCSS. Set up payment
							channels and shipping. Photoshop Illustrator Shopify React library
							CSS. */}
					</JobText>
				</JobBox>
			</ECigContainer>
			<BurgerContainer>
				<JobTitleContainer>
					<YearText>2013-16</YearText>
					<CompanyAndPositionContainer>
						<CompanyText>BURGER MONSTER</CompanyText>
						<PositionText>SALES/OFFICE MANAGER</PositionText>
					</CompanyAndPositionContainer>
				</JobTitleContainer>
				<JobBox>
					<EasyAndQuickImage />
					<JobBoxHeader>Responsibilities And Achievements</JobBoxHeader>
					<JobText>
						{/* Set up Shopify store with React. Designed all products for sale.
						Poduced all UI including components using CSS/SCSS. Set up payment
						channels and shipping. Photoshop Illustrator Shopify React library
						CSS. */}
					</JobText>
				</JobBox>
			</BurgerContainer>
		</WorkExperienceContainer>
	);
}

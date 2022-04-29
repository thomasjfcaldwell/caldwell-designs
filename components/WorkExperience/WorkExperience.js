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
	WowJobBox,
	WowJobBoxHeader,
	WowJobText,
	ECigJobBox,
	ECigJobBoxHeader,
	ECigJobText,
	BurgerJobBox,
	BurgerJobBoxHeader,
	BurgerJobText,
	WowTabletImage,
	WowDesktopImage,
	EasyAndQuickImage,
} from './WorkExperienceStyles';
import {
	WorkExperienceTitleContainer,
	WorkExperienceTitle,
} from '../Hero/Title/TitleStyles';

const quickAndEasyImage = 'https://i.ibb.co/F37wjJB/store-Mock-Up1-phone.png';
const wowTabletImage = 'https://i.ibb.co/0rxLhkV/picnics-Mockup-Tablet.png';
const wowDesktopImage = 'https://i.ibb.co/1Xs799T/picnic-destop-mock-Up.png';

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
					<EasyAndQuickImage
						loading='lazy'
						src={quickAndEasyImage}
						alt='Mock up of Easy and Quick gifts'
						className=''
					/>
					<JobBoxHeader>Responsibilities And Achievements</JobBoxHeader>
					<JobText>
						Set up Shopify store with React. Designed all products for sale.
						Poduced all UI including components using CSS/SCSS. Set up payment
						channels and shipping. Photoshop Illustrator Shopify React library
						CSS.
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
				<WowJobBox>
					<WowTabletImage
						loading='lazy'
						src={wowTabletImage}
						alt='Mock up of Wow Picnics Tablet'
						className=''
					/>
					<WowDesktopImage
						loading='lazy'
						src={wowDesktopImage}
						alt='Mock up of Wow Picnics desktop'
						className=''
					/>
					<WowJobBoxHeader>Responsibilities And Achievements</WowJobBoxHeader>
					<WowJobText>
						Set up Shopify store with React. Designed all products for sale.
						Poduced all UI including components using CSS/SCSS. Set up payment
						channels and shipping. Photoshop Illustrator Shopify React library
						CSS.
					</WowJobText>
				</WowJobBox>
			</WowContainer>
			<ECigContainer className='e-cig'>
				<JobTitleContainer>
					<YearText>2016-20</YearText>
					<CompanyAndPositionContainer>
						<CompanyText>E-CIG GALLERY</CompanyText>
						<PositionText>MARKETING MANAGER/DESIGNER</PositionText>
					</CompanyAndPositionContainer>
				</JobTitleContainer>
				<ECigJobBox>
					<ECigJobBoxHeader>Responsibilities And Achievements</ECigJobBoxHeader>
					<ECigJobText>
						Set up Shopify store with React. Designed all products for sale.
						Poduced all UI including components using CSS/SCSS. Set up payment
						channels and shipping. Photoshop Illustrator Shopify React library
						CSS.
					</ECigJobText>
				</ECigJobBox>
			</ECigContainer>
			<BurgerContainer>
				<JobTitleContainer>
					<YearText>2013-16</YearText>
					<CompanyAndPositionContainer>
						<CompanyText>BURGER MONSTER</CompanyText>
						<PositionText>SALES/OFFICE MANAGER</PositionText>
					</CompanyAndPositionContainer>
				</JobTitleContainer>
				<BurgerJobBox>
					<BurgerJobBoxHeader>
						Responsibilities And Achievements
					</BurgerJobBoxHeader>
					<BurgerJobText>
						Set up Shopify store with React. Designed all products for sale.
						Poduced all UI including components using CSS/SCSS. Set up payment
						channels and shipping. Photoshop Illustrator Shopify React library
						CSS.
					</BurgerJobText>
				</BurgerJobBox>
			</BurgerContainer>
		</WorkExperienceContainer>
	);
}

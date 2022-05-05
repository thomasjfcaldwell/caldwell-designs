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
		<WorkExperienceContainer id='work-history'>
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
						Plan, design and develop stand alone site for the purposes of
						showing information on services offered and to receive booking leads
						for those service. Also produce print marketing assets. Within a few
						months add all services and content to existing website. Tools used
						include React, Bootstrap for styling, 3rd party forms integrated
						into site to collect potential customer details. Photoshop for image
						editing and resizing, InDesign for flyer and brochure production.
					</WowJobText>
				</WowJobBox>
			</WowContainer>
			<ECigContainer className='e-cig'>
				<JobTitleContainer>
					<YearText>2016-20</YearText>
					<CompanyAndPositionContainer>
						<CompanyText>E-CIG GALLERY</CompanyText>
						<PositionText>MARKETING MANAGER</PositionText>
					</CompanyAndPositionContainer>
				</JobTitleContainer>
				<ECigJobBox>
					<ECigJobBoxHeader>Responsibilities And Achievements</ECigJobBoxHeader>
					<ECigJobText>
						Assisted in brand new website built on Big Commerce platform
						including SEO. Management of website from start up. Within first
						year moved site from basic template to more interactive site for
						E-commerce store to improve user experience. Updated non-ecommce
						site using Wordpress plug-in Elementor. Responsible all marketing
						materials online and print - including HTML emails sent using
						Constant Contact, web banners and print mailers sent to 15,000 shops
						within the USA. Rebranded company to a more professional and forward
						thinking business.
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
						In charge of booking all events including private and public using
						Salesforce as a CRM and organizing of schedule.. Answer phone,
						design invoices and surchure business. Follow up on sent invoices,
						management of social media and design of menus.
					</BurgerJobText>
				</BurgerJobBox>
			</BurgerContainer>
		</WorkExperienceContainer>
	);
}

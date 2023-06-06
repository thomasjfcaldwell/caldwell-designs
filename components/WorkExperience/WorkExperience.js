import React from 'react';
import {
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiShopify,
	SiReact,
	SiBootstrap,
	SiGoogledrive,
	SiAdobeindesign,
	SiAdobedreamweaver,
	SiBigcommerce,
	SiWordpress,
	SiSalesforce,
	SiFacebook,
	SiYelp,
} from 'react-icons/si';
import {
	WorkExperienceContainer,
	WorkExperienceRow,
	JobContainer,
	JobTitleContainer,
	YearText,
	CompanyAndPositionContainer,
	CompanyText,
	PositionText,
	JobBox,
	JobBoxBottom,
	JobBoxHeader,
	JobImage,
	JobList,
	JobListItem,
	JobSoftWareContainer,
	JobSoftWareHeader,
	JobSoftWareTextContainer,
	JobSoftWareIconText,
	JobSoftWareIconContainer,
} from './WorkExperienceStyles';

import { TitleContainer, Title } from '../Hero/Title/TitleStyles';
import Education from '../EducationAndSkills/Education/Education';

import Process from '../../constants/constants';
const quickAndEasyImage = 'https://i.ibb.co/F37wjJB/store-Mock-Up1-phone.png';
const picnicMockUp =
	'https://res.cloudinary.com/djjqsmlei/image/upload/v1654555298/picnicMockUp1.phone_t0kak2.png';
const wowDesktopImage = 'https://i.ibb.co/1Xs799T/picnic-destop-mock-Up.png';

{
	/* make  */
}

export default function WorkExperience() {
	return (
		<WorkExperienceContainer id='work-history'>
			{/* CONTAINER FOR HEADER JOBS AND EDUCATION */}
			{/* first row with title */}
			<WorkExperienceRow>
				console.log({Process});
				<TitleContainer>
					<Title>Work Experience</Title>
				</TitleContainer>
			</WorkExperienceRow>
			{/* 2nd row with 2 columns */}
			<WorkExperienceRow>
				<JobContainer>
					<JobTitleContainer>
						<YearText>2022</YearText>
						<CompanyAndPositionContainer>
							<CompanyText>EASY AND QUICK GIFTS</CompanyText>
							<PositionText>WEB DESIGNER/OWNER</PositionText>
						</CompanyAndPositionContainer>
					</JobTitleContainer>
					<JobBox>
						<JobImage
							loading='lazy'
							src={quickAndEasyImage}
							alt='Mock up of Easy and Quick gifts'
							className=''
						/>
						<JobBoxHeader>MAIN RESPONSIBILITIES</JobBoxHeader>
						<JobList>
							{/* make  job list a click to see more */}
							<JobListItem>Integrated Shopify store with React</JobListItem>
							<JobListItem>Designed original merchandise for sale</JobListItem>
							<JobListItem>
								Used React and Bootstrap for shop templates
							</JobListItem>
							<JobListItem>Set up payment channels and shipping</JobListItem>
						</JobList>
						<JobSoftWareContainer>
							<JobSoftWareHeader>Software Used</JobSoftWareHeader>
							<JobSoftWareIconContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Photoshop</JobSoftWareIconText>
									<SiAdobephotoshop />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Illustrator</JobSoftWareIconText>
									<SiAdobeillustrator />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Shopify</JobSoftWareIconText>
									<SiShopify />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>React</JobSoftWareIconText>
									<SiReact />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Bootstrap</JobSoftWareIconText>
									<SiBootstrap />
								</JobSoftWareTextContainer>
							</JobSoftWareIconContainer>
						</JobSoftWareContainer>
					</JobBox>
				</JobContainer>
				<JobContainer>
					<JobTitleContainer>
						<YearText>2021</YearText>
						<CompanyAndPositionContainer>
							<CompanyText>WOW EVENTS</CompanyText>
							<PositionText>WEB DESIGN</PositionText>
						</CompanyAndPositionContainer>
					</JobTitleContainer>
					<JobBox>
						<JobBoxHeader>MAIN RESPONSIBILITIES</JobBoxHeader>
						<JobImage
							primary
							loading='lazy'
							src={picnicMockUp}
							alt='Picnic Mock Up on iPhone'
							className=''
						/>
						<JobList>
							<JobListItem>
								Planned, designed and developed booking site using React and
								Bootstrap
							</JobListItem>
							<JobListItem>
								Integrated 3rd party software to handle leads
							</JobListItem>
							<JobListItem>
								All product photography including editing
							</JobListItem>
							<JobListItem>
								flyer and brochure design and production.
							</JobListItem>
						</JobList>
						<JobSoftWareContainer>
							<JobSoftWareHeader>Software Used</JobSoftWareHeader>
							<JobSoftWareIconContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Photoshop</JobSoftWareIconText>
									<SiAdobephotoshop />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>indesign</JobSoftWareIconText>
									<SiAdobeindesign />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Google Forms</JobSoftWareIconText>
									<SiGoogledrive />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>React</JobSoftWareIconText>
									<SiReact />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Bootstrap</JobSoftWareIconText>
									<SiBootstrap />
								</JobSoftWareTextContainer>
							</JobSoftWareIconContainer>
						</JobSoftWareContainer>
					</JobBox>
				</JobContainer>
			</WorkExperienceRow>
			{/* 2nd row with 3 columns */}
			<WorkExperienceRow primary>
				<JobContainer>
					<JobTitleContainer>
						<YearText>2016-20</YearText>
						<CompanyAndPositionContainer>
							<CompanyText>E-CIG GALLERY</CompanyText>
							<PositionText>MARKETING MANAGER</PositionText>
						</CompanyAndPositionContainer>
					</JobTitleContainer>
					<JobBoxBottom>
						<JobBoxHeader primary>Main Responsibilities</JobBoxHeader>
						<JobList primary>
							<JobListItem primary>
								Management of marketing content and team.
							</JobListItem>
							<JobListItem primary>
								Set up E-Commence site using BigCommence and maintained
							</JobListItem>
							<JobListItem primary>
								Produced marketing email blasts using HTML
							</JobListItem>
							<JobListItem primary>
								Product photography, all print marketing materials
							</JobListItem>
						</JobList>
						<JobSoftWareContainer primary>
							<JobSoftWareHeader>Software Used</JobSoftWareHeader>
							<JobSoftWareIconContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Photoshop</JobSoftWareIconText>
									<SiAdobephotoshop />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>ECommerce</JobSoftWareIconText>
									<SiBigcommerce />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Wordpress</JobSoftWareIconText>
									<SiWordpress />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Dreamweaver</JobSoftWareIconText>
									<SiAdobedreamweaver />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Indesign</JobSoftWareIconText>
									<SiAdobeindesign />
								</JobSoftWareTextContainer>
							</JobSoftWareIconContainer>
						</JobSoftWareContainer>
					</JobBoxBottom>
				</JobContainer>
				<JobContainer>
					<JobTitleContainer>
						<YearText>2013-16</YearText>
						<CompanyAndPositionContainer>
							<CompanyText>BURGER MONSTER</CompanyText>
							<PositionText>SALES/OFFICE MANAGER</PositionText>
						</CompanyAndPositionContainer>
					</JobTitleContainer>
					<JobBoxBottom>
						<JobBoxHeader primary>MAIN RESPONSIBILITIES</JobBoxHeader>
						<JobList primary>
							<JobListItem primary>
								Answer phone, respond to leads and secure business by follow up.
							</JobListItem>
							<JobListItem primary>
								Collect payments and schedule service
							</JobListItem>
							<JobListItem primary>Management of social media</JobListItem>
							<JobListItem primary>Follow up on service</JobListItem>
						</JobList>
						<JobSoftWareContainer primary>
							<JobSoftWareHeader>Software Used</JobSoftWareHeader>
							<JobSoftWareIconContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Google forms</JobSoftWareIconText>
									<SiGoogledrive />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Salesforce</JobSoftWareIconText>
									<SiSalesforce />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Facebook</JobSoftWareIconText>
									<SiFacebook />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Yelp</JobSoftWareIconText>
									<SiYelp />
								</JobSoftWareTextContainer>
								<JobSoftWareTextContainer>
									<JobSoftWareIconText>Indesign</JobSoftWareIconText>
									<SiAdobeindesign />
								</JobSoftWareTextContainer>
							</JobSoftWareIconContainer>
						</JobSoftWareContainer>
					</JobBoxBottom>
				</JobContainer>
				<Education />
			</WorkExperienceRow>
		</WorkExperienceContainer>
	);
}

import Link from 'next/link';
import Image from 'next/image';
import {
	Wrapper,
	Container,
	SiteHeaderContainer,
	SiteHeader,
	Line,
	SiteLinkContainer,
	TextContainer,
	Text,
	LinkText,
	SectionHeaderContainer,
	SectionHeader,
} from '../Home/WebsiteWorkStyle.js';

import { ImageContainer } from '../Home/WebsiteWorkStyle';

import {
	CgWebsite,
	CgChevronDoubleRightO,
	CgChevronDoubleLeftO,
} from 'react-icons/cg';

import React from 'react';

import EcommerceImage from '../../public/Images/HomePage/Ecommence.mockupsAll.png';

import PicnicImage from '../../public/Images/HomePage/picnic.Mockup.All.png';

function WebsiteWork() {
	let iconStyles = { margin: '10px 10px' };
	return (
		<div>
			<SectionHeaderContainer>
				<SectionHeader>Developed Websites</SectionHeader>
				<Line></Line>
				<Line></Line>
			</SectionHeaderContainer>
			<Wrapper>
				<Container>
					<SiteHeaderContainer>
						<SiteHeader>E-Commerce Site</SiteHeader>
					</SiteHeaderContainer>
					<ImageContainer>
						<Image src={EcommerceImage} alt='Mock Up Of Ecommerce site' />
					</ImageContainer>
					<TextContainer>
						<Text>
							E-Commerce site with all original products. Site built using
							Shopify - Site is live and is able to receive orders{' '}
						</Text>
					</TextContainer>
					<SiteLinkContainer>
						<Link href='https://easyandquickgifts.com/' passHref>
							<LinkText>
								See Live Site
								<CgWebsite
									size={20}
									style={{
										margin: '0 0.3em',
									}}
								/>
							</LinkText>
						</Link>
					</SiteLinkContainer>
				</Container>
				<Container>
					<SiteHeaderContainer>
						<SiteHeader>POP-UP PICNIC SITE</SiteHeader>
					</SiteHeaderContainer>
					<ImageContainer>
						<Image src={PicnicImage} alt='Mock Up Of Picnic site' />
					</ImageContainer>
					<TextContainer>
						<Text>
							Fully active site set up to receive bookings for events. Site
							Built using react and bootstrap plus 3rd party service intergrated
							into site to accept bookings.
						</Text>
					</TextContainer>
					<SiteLinkContainer>
						<Link href='http://www.pop-uppicnics.com/' passHref>
							<LinkText>
								See Live Site
								<CgWebsite
									size={20}
									style={{
										margin: '0 0.3em',
									}}
								/>
							</LinkText>
						</Link>
					</SiteLinkContainer>
				</Container>
			</Wrapper>
		</div>
	);
}

export default WebsiteWork;

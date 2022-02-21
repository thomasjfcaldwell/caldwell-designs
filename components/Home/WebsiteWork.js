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
	LinkToSitesContainer,
	LinkToSites,
} from '../Home/WebsiteWorkStyle.js';
import { ImageContainer } from '../Home/WebsiteWorkStyle';
import {
	CgWebsite,
	CgChevronDoubleRightO,
	CgChevronDoubleLeftO,
} from 'react-icons/cg';
import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import EcommerceImage from '../../public/Images/HomePage/Ecommence.mockupsAll.png';

import PicnicImage from '../../public/Images/HomePage/picnic.Mockup.All.png';

function WebsiteWork() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div data-aos='fade-right'>
			<SectionHeaderContainer>
				<SectionHeader>Developed Websites</SectionHeader>
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
									size={30}
									style={{
										padding: '0 0.2rem',
									}}
								/>
							</LinkText>
						</Link>
					</SiteLinkContainer>
				</Container>
				<Container>
					<SiteHeaderContainer>
						<SiteHeader>Pop-Up Picnic Site</SiteHeader>
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
								See Live Site{' '}
								<CgWebsite
									size={30}
									style={{
										padding: '0 0.2rem',
									}}
								/>
							</LinkText>
						</Link>
					</SiteLinkContainer>
				</Container>
			</Wrapper>
			<LinkToSitesContainer>
				<Link href='/examplesofwork' passHref>
					<LinkToSites>See More Sites Here</LinkToSites>
				</Link>
			</LinkToSitesContainer>
		</div>
	);
}

export default WebsiteWork;

import Link from 'next/link';
import Image from 'next/image';
import {
	Wrapper,
	Container,
	HeaderTextContainer,
	HeaderText,
	SiteHeaderContainer,
	SiteHeader,
	SiteLinkContainer,
	TextContainer,
	Text,
} from '../Home/WebsiteWorkStyle.js';

import { ImageContainer } from '../Home/WebsiteWorkStyle';

import { CgWebsite } from 'react-icons/cg';

import React from 'react';

import EcommerceImage from '../../public/Images/HomePage/Ecommence.mockupsAll.png';

import PicnicImage from '../../public/Images/HomePage/picnic.Mockup.All.png';

function WebsiteWork() {
	return (
		<Wrapper>
			<HeaderTextContainer>
				<HeaderText>Previous Work Websites</HeaderText>
			</HeaderTextContainer>
			<Container>
				<SiteHeaderContainer>
					<SiteHeader>E-Commerce Site</SiteHeader>
				</SiteHeaderContainer>
				<ImageContainer>
					<Image src={EcommerceImage} alt='Mock Up Of Ecommerce site' />
				</ImageContainer>
				<TextContainer>
					<Text>
						E-Commerce site with all original products. Site built using Shopify
						- Site is live and is able to receive orders{' '}
					</Text>
				</TextContainer>
				<SiteLinkContainer>
					<Link href='/playing' assHref>
						<a
							style={{
								display: 'flex',
								alignItems: 'center',
								textDecoration: 'none',
								color: '#E98074',
								fontSize: '0.5em',
							}}>
							See Live Site
							<CgWebsite
								size={20}
								style={{
									margin: '0 0.3em',
								}}
							/>
						</a>
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
						Fully active site set up to receive bookings for events. Site Built
						using react and bootstrap plus 3rd party service intergrated into
						site to accept bookings.
					</Text>
				</TextContainer>
				<SiteLinkContainer>
					<Link href='/playing' assHref>
						<a
							style={{
								display: 'flex',
								alignItems: 'center',
								textDecoration: 'none',
								color: '#E98074',
								fontSize: '0.5em',
							}}>
							See Live Site
							<CgWebsite
								size={20}
								style={{
									margin: '0 0.3em',
								}}
							/>
						</a>
					</Link>
				</SiteLinkContainer>
			</Container>
			<HeaderTextContainer>
				<HeaderText>More Websites</HeaderText>
			</HeaderTextContainer>
		</Wrapper>
	);
}

export default WebsiteWork;

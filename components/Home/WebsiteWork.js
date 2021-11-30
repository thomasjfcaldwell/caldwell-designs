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
	LinkText,
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
		<Wrapper>
			<Container>
				<HeaderTextContainer>
					<HeaderText>
						<CgChevronDoubleLeftO style={iconStyles} />
						Previous Work Websites
						<CgChevronDoubleRightO style={iconStyles} />
					</HeaderText>
				</HeaderTextContainer>
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
						Fully active site set up to receive bookings for events. Site Built
						using react and bootstrap plus 3rd party service intergrated into
						site to accept bookings.
					</Text>
				</TextContainer>
				<SiteLinkContainer>
					<Link href='/playing' assHref>
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
				<HeaderTextContainer>
					<HeaderText>
						<CgChevronDoubleLeftO style={iconStyles} />
						More Websites
						<CgChevronDoubleRightO style={iconStyles} />
					</HeaderText>
				</HeaderTextContainer>
			</Container>
		</Wrapper>
	);
}

export default WebsiteWork;

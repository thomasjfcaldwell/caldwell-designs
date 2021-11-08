import Link from 'next/link';
import Image from 'next/image';
import {
	Container,
	CommerceContainer,
	CommerceHeaderContainer,
	CommerceHeaderTextContainer,
	CommerceHeaderText,
	PicnicContainer,
	HeaderContainer,
	Header,
	SiteLinkContainer,
} from '../Home/WebsiteWorkStyle.js';

import { ImageContainer } from '../Home/WebsiteWorkStyle';

import { CgWebsite } from 'react-icons/cg';

import React from 'react';

import EcommerceImage from '../../public/Images/HomePage/Ecommence.mockupsAll.png';

import PicnicImage from '../../public/Images/HomePage/picnic.Mockup.All.png';

function WebsiteWork() {
	return (
		<Container>
			<CommerceContainer sm={12} lg={6}>
				<CommerceHeaderContainer>
					<CommerceHeaderTextContainer>
						<CommerceHeaderText>Previous Work</CommerceHeaderText>
					</CommerceHeaderTextContainer>
					<CommerceHeaderTextContainer>
						<CommerceHeaderText>Website</CommerceHeaderText>
					</CommerceHeaderTextContainer>
				</CommerceHeaderContainer>
				<ImageContainer>
					<Image src={EcommerceImage} alt='Mock Up Of Ecommerce site' />
				</ImageContainer>
				<SiteLinkContainer>
					<Link href='/playing' assHref>
						<a
							style={{
								display: 'flex',
								alignItems: 'center',
								textDecoration: 'none',
								color: '#E98074',
							}}>
							see live site{' '}
							<CgWebsite
								style={{
									margin: '10px',
								}}
								size={30}
							/>
						</a>
					</Link>
				</SiteLinkContainer>
				<HeaderContainer>
					<Header>E-COMMENCE SITE</Header>
				</HeaderContainer>
			</CommerceContainer>
			<PicnicContainer>
				<HeaderContainer>
					<Header>POP-UP PICNIC SITE</Header>
				</HeaderContainer>
				<SiteLinkContainer>
					<Link href='/playing' assHref>
						<a
							style={{
								display: 'flex',
								alignItems: 'center',
								textDecoration: 'none',
								color: '#E98074',
							}}>
							see live site{' '}
							<CgWebsite
								style={{
									margin: '10px',
								}}
								size={30}
							/>
						</a>
					</Link>
				</SiteLinkContainer>
				<ImageContainer>
					<Image src={PicnicImage} alt='Mock Up Of Picnic site' />
				</ImageContainer>
				<CommerceHeaderContainer>
					<CommerceHeaderTextContainer>
						<CommerceHeaderText>See More Websites</CommerceHeaderText>
					</CommerceHeaderTextContainer>
				</CommerceHeaderContainer>
			</PicnicContainer>
		</Container>
	);
}

export default WebsiteWork;

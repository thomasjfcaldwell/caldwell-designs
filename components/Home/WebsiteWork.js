import Link from 'next/link';
import Image from 'next/image';
import {
	Container,
	CommerceContainer,
	CommerceHeaderContainer,
	CommerceHeaderTextContainer,
	CommerceHeaderText,
	PicnicContainer,
	PicnicHeaderContainer,
	PicnicHeader,
	SiteLinkContainer,
} from '../Home/WebsiteWorkStyle.js';

import {
	PicnicImageContainer,
	CommerceImagesContainer,
} from '../Home/WebsiteWorkStyle';

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
				<CommerceImagesContainer>
					<Image src={EcommerceImage} alt='Mock Up Of Ecommerce site' />
				</CommerceImagesContainer>
				<SiteLinkContainer>
					<Link href='/playing' assHref>
						<a>
							see live site
							<CgWebsite size={50} />
						</a>
					</Link>
				</SiteLinkContainer>
				<PicnicHeaderContainer>
					<PicnicHeader>E-COMMENCE SITE</PicnicHeader>
				</PicnicHeaderContainer>
			</CommerceContainer>
			<PicnicContainer>
				<PicnicHeaderContainer>
					<PicnicHeader>POP-UP PICNIC SITE</PicnicHeader>
				</PicnicHeaderContainer>
				<SiteLinkContainer>
					<Link href='/playing' assHref>
						<a>
							see live site
							<CgWebsite size={50} />
						</a>
					</Link>
				</SiteLinkContainer>
				<PicnicImageContainer>
					<Image src={PicnicImage} alt='Mock Up Of Ecommerce site' />
				</PicnicImageContainer>
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

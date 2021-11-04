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
	PicnicGalleryContainer,
	SiteLinkContainer,
} from '../Home/WebsiteWorkStyle.js';

import {
	PicnicImageContainer,
	CommerceImagesContainer,
} from '../Home/WebsiteWorkStyle';



import { CgWebsite } from 'react-icons/cg';

import React from 'react';

import PicnicsMain from '../../public/Images/HomePage/popuppicnicMain.png';
import PicnicsIphone from '../../public/Images/HomePage/popuppicnichomepage.iphone.png';
import PicnicsIphone1 from '../../public/Images/HomePage/picnics.mockup.ipone.png';
import PicnicsAndroid from '../../public/Images/HomePage/picnics.mockup.andriod.png';

import EcommerceMain from '../../public/Images/HomePage/ecommercemockup.desktop.jpg';
import EcommerceSide1 from '../../public/Images/HomePage/android.ecommerce.mockup.jpg';
import EcommerceSide2 from '../../public/Images/HomePage/ipad.mockup.ecommerce.jpg';
import EcommerceSide3 from '../../public/Images/HomePage/iphone.eccomance.mockup.jpg';

function WebsiteWork() {
	return (
		<Container>
			<CommerceContainer>
				<CommerceHeaderContainer>
					<CommerceHeaderTextContainer>
						<CommerceHeaderText>Previous Work</CommerceHeaderText>
					</CommerceHeaderTextContainer>
					<CommerceHeaderTextContainer>
						<CommerceHeaderText>Website</CommerceHeaderText>
					</CommerceHeaderTextContainer>
				</CommerceHeaderContainer>
				<CommerceImagesContainer>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
						}}>
						<Image
							src={EcommerceMain}
							alt='popuppicnic-Main'
							border='0'
							width={600}
							height={550}
						/>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}>
						<Image
							src={EcommerceSide1}
							alt='popuppicnic-Main'
							border='0'
							width={200}
							height={150}
						/>
						<Image
							src={EcommerceSide2}
							alt='popuppicnic-Main'
							border='0'
							width={200}
							height={150}
						/>
						<Image
							src={EcommerceSide3}
							alt='popuppicnic-Main'
							border='0'
							width={200}
							height={150}
						/>
					</div>
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
				<PicnicGalleryContainer>
					<Image
						src={PicnicsMain}
						alt='popuppicnic-Main'
						border='0'
						width={500}
						height={400}
					/>
				</PicnicGalleryContainer>
				<PicnicImageContainer>
					<Image
						src={PicnicsIphone}
						alt='popuppicnic-Main'
						border='4'
						width={200}
						height={300}
					/>
					<Image
						src={PicnicsIphone1}
						alt='popuppicnic-Main'
						border='0'
						width={200}
						height={300}
					/>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}>
						<Image
							src={PicnicsAndroid}
							alt='popuppicnic-Main'
							border='0'
							width={200}
							height={150}
						/>
						<Image
							src={PicnicsAndroid}
							alt='popuppicnic-Main'
							border='0'
							width={200}
							height={150}
						/>
					</div>
				</PicnicImageContainer>
			</PicnicContainer>
		</Container>
	);
}

export default WebsiteWork;

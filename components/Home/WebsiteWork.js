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
} from '../Home/WebsiteWorkStyle.js';

import {
	PicnicImageContainer,
	CommerceImagesContainer,
} from '../Home/WebsiteWorkStyle';

import { CgWebsite } from 'react-icons/cg';

import React from 'react';

import PicnicsMain from '../../public/Images/HomePage/popuppicnicMain.png';
import PicnicsIphone from '../../public/Images/HomePage/popuppicnichomepage.iphone.png';

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
					<div>
						<Image
							src={PicnicsMain}
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
							padding: '10px',
						}}>
						<Image
							src={PicnicsIphone}
							alt='popuppicnic-Main'
							border='0'
							width={200}
							height={150}
						/>
						<Image
							src={PicnicsIphone}
							alt='popuppicnic-Main'
							border='0'
							width={200}
							height={150}
						/>
						<Image
							src={PicnicsIphone}
							alt='popuppicnic-Main'
							border='0'
							width={200}
							height={150}
						/>
					</div>
				</CommerceImagesContainer>
				<PicnicHeaderContainer>
					<Link href='/playing' assHref>
						<a>
							see live site
							<CgWebsite size={100} />
						</a>
					</Link>
					<PicnicHeader>E-COMMENCE SITE</PicnicHeader>
				</PicnicHeaderContainer>
			</CommerceContainer>
			<PicnicContainer>
				<PicnicHeaderContainer>
					<PicnicHeader>POP-UP PICNIC SITE</PicnicHeader>
					<Link href='/playing' assHref>
						<a>
							see live site
							<CgWebsite size={100} />
						</a>
					</Link>
				</PicnicHeaderContainer>
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
						src={PicnicsIphone}
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
							src={PicnicsIphone}
							alt='popuppicnic-Main'
							border='0'
							width={200}
							height={150}
						/>
						<Image
							src={PicnicsIphone}
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

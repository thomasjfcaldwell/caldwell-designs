import React from 'react';
import {
	SkillsContainer,
	SkillsText,
	SkillsImages,
	SkillsImage,
	SkillsWrapper,
} from './SkillsStyles';

import { Title, TitleContainer } from '../../Hero/Title/TitleStyles';

const inDesignImage = 'https://i.ibb.co/VHr0HCr/indesign.png';
const illustratorImage = 'https://i.ibb.co/g6W22DS/illustrator.png';
const photoshopImage = 'https://i.ibb.co/rsNx931/ps-appicon.png';
const adobeXDImage = 'https://i.ibb.co/SyD1c5m/xd.png';
const gitHubImage =
	'https://i.ibb.co/4VNJQtz/github-logo-9-BBCA663-A4-seeklogo-com.png';
const htmlImage =
	'https://i.ibb.co/sgS9sxR/html5-logo-EF92-D240-D7-seeklogo-com.png';
const cssImage =
	'https://i.ibb.co/VMN8CMh/css3-logo-8724075274-seeklogo-com.png';
const javascriptImage =
	'https://i.ibb.co/CVKLzkw/javascript-logo-E967-E87-D74-seeklogo-com.png';
const bootstrapImage =
	'https://i.ibb.co/JqW9tKY/bootstrap-logo-3-C30-FB2-A16-seeklogo-com.png';
const wordpressImage =
	'https://i.ibb.co/82dY37t/wordpress-icon-logo-45667-D3313-seeklogo-com.png';
const vscodeImage =
	'https://i.ibb.co/9br3v19/visual-studio-code-logo-449-D71944-F-seeklogo-com.png';
const reactImage =
	'https://i.ibb.co/G25hRmW/react-logo-7-B3-CE81517-seeklogo-com.png"';

export default function Skills() {
	return (
		<SkillsWrapper>
			<TitleContainer>
				<Title>Favorite Technologies</Title>
			</TitleContainer>
			<SkillsContainer>
				<SkillsText>
					I am experienced in using Adobe Creative Cloud to produce print and
					web graphics. Along with Photo editing using Photoshop, Logo and icon
					design with Illustrator, layouts with Indesign plus Web Mock ups with
					Adobe XD
				</SkillsText>
				<SkillsImages>
					<SkillsImage
						loading='lazy'
						src={inDesignImage}
						alt='logo of inDesignImage'
						className=''
					/>
					<SkillsImage
						loading='lazy'
						src={illustratorImage}
						alt='logo of inDesignImage'
						className=''
					/>
					<SkillsImage
						loading='lazy'
						src={photoshopImage}
						alt='logo of inDesignImage'
						className=''
					/>
					<SkillsImage
						loading='lazy'
						src={adobeXDImage}
						alt='logo of inDesignImage'
						className=''
					/>
				</SkillsImages>
				<SkillsText>
					I have experience all the skills necessary for Web Development
					including development languages, git control and bug fixing knowledge.
				</SkillsText>
				<SkillsImages>
					<SkillsImage
						loading='lazy'
						src={gitHubImage}
						alt='logo of inDesignImage'
						className=''
					/>
					<SkillsImage
						loading='lazy'
						src={htmlImage}
						alt='logo of inDesignImage'
						className=''
					/>
					<SkillsImage
						loading='lazy'
						src={cssImage}
						alt='logo of inDesignImage'
						className=''
					/>
					<SkillsImage
						loading='lazy'
						src={javascriptImage}
						alt='logo of inDesignImage'
						className=''
					/>
				</SkillsImages>
				<SkillsText>
					On top of Web Development languages I have experience in Web Design
					and Development frameworks, libraries and code editors. Including
					Wordpress, React and Bootstrap.
				</SkillsText>
				<SkillsImages>
					<SkillsImage
						loading='lazy'
						src={reactImage}
						alt='logo of inDesignImage'
						className=''
					/>
					<SkillsImage
						loading='lazy'
						src={vscodeImage}
						alt='logo of inDesignImage'
						className=''
					/>
					<SkillsImage
						loading='lazy'
						src={wordpressImage}
						alt='logo of inDesignImage'
						className=''
					/>
					<SkillsImage
						loading='lazy'
						src={bootstrapImage}
						alt='logo of inDesign'
						className=''
					/>
				</SkillsImages>
			</SkillsContainer>
		</SkillsWrapper>
	);
}

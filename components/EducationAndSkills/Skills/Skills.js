import React from 'react';
import {
	SkillsContainer,
	SkillsText,
	SkillsImages,
	SkillsImage,
} from './SkillsStyles';

const inDesign = 'https://i.ibb.co/VHr0HCr/indesign.png';

export default function Skills() {
	return (
		<SkillsContainer>
			<SkillsText>
				I am experienced in using Adobe Creative Cloud to produce print and web
				graphics. Along with Photo editing using Photoshop, Logo and icon design
				with Illustrator, layouts with Indesign plus Web Mock ups with Adobe XD
			</SkillsText>
			<SkillsImages>
				<SkillsImage
					loading='lazy'
					src={inDesign}
					alt='logo of inDesign'
					className=''
				/>
				<SkillsImage
					loading='lazy'
					src={inDesign}
					alt='logo of inDesign'
					className=''
				/>
				<SkillsImage
					loading='lazy'
					src={inDesign}
					alt='logo of inDesign'
					className=''
				/>
				<SkillsImage
					loading='lazy'
					src={inDesign}
					alt='logo of inDesign'
					className=''
				/>
			</SkillsImages>
			<SkillsText>
				I am experienced in using Adobe Creative Cloud to produce print and web
				graphics. Along with Photo editing using Photoshop, Logo and icon design
				with Illustrator, layouts with Indesign plus Web Mock ups with Adobe XD
			</SkillsText>
			<SkillsImages>
				<SkillsImage
					loading='lazy'
					src={inDesign}
					alt='logo of inDesign'
					className=''
				/>
				<SkillsImage
					loading='lazy'
					src={inDesign}
					alt='logo of inDesign'
					className=''
				/>
				<SkillsImage
					loading='lazy'
					src={inDesign}
					alt='logo of inDesign'
					className=''
				/>
				<SkillsImage
					loading='lazy'
					src={inDesign}
					alt='logo of inDesign'
					className=''
				/>
			</SkillsImages>
			<SkillsText>
				I am experienced in using Adobe Creative Cloud to produce print and web
				graphics. Along with Photo editing using Photoshop, Logo and icon design
				with Illustrator, layouts with Indesign plus Web Mock ups with Adobe XD
			</SkillsText>
			<SkillsImages>
				<SkillsImage
					loading='lazy'
					src={inDesign}
					alt='logo of inDesign'
					className=''
				/>
				<SkillsImage
					loading='lazy'
					src={inDesign}
					alt='logo of inDesign'
					className=''
				/>
				<SkillsImage
					loading='lazy'
					src={inDesign}
					alt='logo of inDesign'
					className=''
				/>
				<SkillsImage
					loading='lazy'
					src={inDesign}
					alt='logo of inDesign'
					className=''
				/>
			</SkillsImages>
		</SkillsContainer>
	);
}

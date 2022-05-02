import React from 'react';
import {
	ListOfTechContainer,
	ListOfTechLine1,
	ListOfTechLine2,
	ListOfTechLine3,
	ListOfTechHTML,
	ListOfTechCSS,
	ListOfTechJavascript,
	ListOfTechReact,
	ListOfTechNode,
	ListOfTechExpress,
	ListOfTechPython,
	ListOfTechDjango,
	ListOfTechPostgresql,
	ListOfTechMongo,
} from './ListOfTechStyles';

export default function ListOfTech() {
	return (
		<ListOfTechContainer>
			<ListOfTechLine1>
				<ListOfTechHTML>HTML</ListOfTechHTML>
				<ListOfTechCSS>CSS</ListOfTechCSS>
				<ListOfTechJavascript>JAVASCRIPT</ListOfTechJavascript>
				<ListOfTechReact>REACT</ListOfTechReact>
			</ListOfTechLine1>
			<ListOfTechLine2>
				<ListOfTechNode>NODE JS</ListOfTechNode>
				<ListOfTechExpress>EXPRESS</ListOfTechExpress>
				<ListOfTechPython>PYTHON</ListOfTechPython>
			</ListOfTechLine2>
			<ListOfTechLine3>
				<ListOfTechDjango>DJANGO</ListOfTechDjango>
				<ListOfTechPostgresql>POSTGRESQL</ListOfTechPostgresql>
				<ListOfTechMongo>MONGODB</ListOfTechMongo>
			</ListOfTechLine3>
		</ListOfTechContainer>
	);
}

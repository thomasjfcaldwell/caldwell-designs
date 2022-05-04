import styled from 'styled-components';

export const ListOfTechContainer = styled.section``;

export const ListOfTechLine1 = styled.div`
	margin-block-end: 0.5rem;
	width: 100%;
`;

export const ListOfTechLine2 = styled(ListOfTechLine1)``;
export const ListOfTechLine3 = styled(ListOfTechLine1)``;

export const ListOfTechHTML = styled.p`
	font-size: 8px;
	padding-inline: 2px;
	display: inline;
	color: ${(props) => props.theme.colors.primary};
`;
export const ListOfTechCSS = styled(ListOfTechHTML)``;
export const ListOfTechJavascript = styled(ListOfTechHTML)`
	padding-inline: 9px;
`;
export const ListOfTechReact = styled(ListOfTechHTML)``;
export const ListOfTechNode = styled(ListOfTechHTML)``;
export const ListOfTechExpress = styled(ListOfTechHTML)`
	padding-inline: 15px;
`;
export const ListOfTechPython = styled(ListOfTechHTML)``;
export const ListOfTechDjango = styled(ListOfTechHTML)``;
export const ListOfTechPostgresql = styled(ListOfTechHTML)``;
export const ListOfTechMongo = styled(ListOfTechHTML)``;

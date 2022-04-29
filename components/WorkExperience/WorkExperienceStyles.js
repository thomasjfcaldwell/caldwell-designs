import styled from 'styled-components';

export const WorkExperienceContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	margin: auto;
	grid-gap: 15px;
	/* justify-content: center; */
`;

export const JobTitleContainer = styled.div`
	display: grid;
	grid-template-columns: max-content max-content;
	grid-template-rows: min-height;
	margin-left: 3px;
`;

export const YearText = styled.h3`
	font-size: 35px;
	grid-row-start: 1;
`;

export const CompanyAndPositionContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 7px;
	margin-left: 2px;
`;
export const CompanyText = styled.h4`
	font-size: 13px;
	font-weight: 500;
`;
export const PositionText = styled.h5`
	font-size: 11px;
	font-weight: 300;
	letter-spacing: 0.7px;
`;

export const EasyAndQuickContainer = styled.div``;

export const EasyAndQuickImage = styled.img``;

export const WowContainer = styled(EasyAndQuickContainer)``;

export const ECigContainer = styled(EasyAndQuickContainer)``;

export const BurgerContainer = styled(EasyAndQuickContainer)``;

export const JobBox = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	margin: auto;
	border-radius: 10px;
	width: 300px;
`;
export const JobBoxHeader = styled.h5``;
export const JobText = styled.p``;

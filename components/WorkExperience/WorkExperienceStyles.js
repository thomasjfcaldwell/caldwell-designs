import styled from 'styled-components';

export const WorkExperienceContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	margin: auto;
	grid-gap: 15px;
`;

export const EasyAndQuickContainer = styled.div`
	width: 90%;
	background-color: ${(props) => props.theme.colors.secondary};
	margin: auto;
	border-radius: 10px;
`;

export const WowContainer = styled(EasyAndQuickContainer)``;

export const ECigContainer = styled(EasyAndQuickContainer)``;

export const BurgerContainer = styled(EasyAndQuickContainer)``;

import styled from 'styled-components';

export const SkillsContainer = styled.section`
	width: 100%;
	background-color: ${(props) => props.theme.colors.secondary};
	border-radius: 10px;
	padding-block: 1rem;
`;

export const SkillsText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	padding: 0.5rem 1rem;
`;

export const SkillsImages = styled.div`
	display: flex;
	justify-content: space-around;
	margin-block: 1rem;
`;

export const SkillsImage = styled.img`
	width: 25px;
`;

import styled from 'styled-components';

export const SkillsContainer = styled.section`
	width: 100%;
	background-color: ${(props) => props.theme.colors.secondary};
	border-radius: 10px;
	padding-block: 0.5rem;
`;

export const SkillsText = styled.p`
	color: ${(props) => props.theme.colors.primary};
	padding: 1rem 0.5rem;
	text-align: justify;
	font-size: 9.5px;
	line-height: 1.4;
`;

export const SkillsImages = styled.div`
	display: flex;
	justify-content: space-around;
	margin-block: 1.2rem;
`;

export const SkillsImage = styled.img`
	width: 30px;
`;

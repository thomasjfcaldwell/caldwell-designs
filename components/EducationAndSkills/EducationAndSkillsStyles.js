import styled from 'styled-components';

export const EducationAndSkillsContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-gap: 10px;
	width: 90%;
	margin: 2rem auto;
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: 1fr;
		grid-gap: 30px;
	}
`;

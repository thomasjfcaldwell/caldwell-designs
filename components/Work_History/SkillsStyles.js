import styled from 'styled-components';
export const SkillsWrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 20px;
	align-items: flex-start;
	@media only screen and (min-width: 320px) and (max-width: 600px) {
		flex-direction: column;
		align-text: center;
	}
`;
export const SkillsContainer = styled.div`
	width: 33.3%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	@media only screen and (min-width: 320px) and (max-width: 600px) {
		width: 100%;
		margin: 0 auto;
	}
`;
export const SkillsHeader = styled.h1`
	font-size: 0.9em;
	font-weight: 550;
	text-align: center;
	margin: 10px auto;
	border-radius: 20px;
	border: solid 1px #e98074;
	padding: 5px 10px;
`;

export const SkillsList = styled.ul`
	list-style-type: none; /* Remove bullets */
	padding: 0; /* Remove padding */
	/* margin: 0 auto; / */
`;

export const SkillsListItem = styled.li`
	font-size: 0.8em;
	font-weight: 600;
	/* margin: 0 2px; */
	color: #e98074;
`;

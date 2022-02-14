import styled from 'styled-components';
export const SkillsWrapper = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	padding: 5rem;
	align-items: start;
	gap: 1rem;

	@media only screen and (min-width: 320px) and (max-width: 600px) {
		grid-template-columns: 1fr;
		padding: 0;
	}
`;
export const SkillsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background-color: white;
	padding: 4rem;
	height: 15rem;
	border: solid 0.3rem #e98074;
	border-radius: 0.8rem;
	box-shadow: 0rem 0.3rem 10px rgba(0, 0, 0, 0.3);
	@media only screen and (min-width: 320px) and (max-width: 600px) {
		flex-direction: column;
		height: 30rem;
		padding: 1rem;
		width: 80%;
		margin: 0 auto;
		justify-content: center;
	}
`;
export const SkillsHeader = styled.h1`
	font-size: 1.2rem;
	font-weight: 550;
	text-align: center;
	color: #e98074;
`;

export const SkillsList = styled.div``;

export const SkillsListItem = styled.p`
	font-size: 0.9rem;
	font-weight: 500;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	margin: 0.2rem auto;
`;

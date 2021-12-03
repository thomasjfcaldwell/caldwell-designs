import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		height: 40vh;
		margin: 1em 0;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		/* background-color: crimson; */
		width: 100%;
		margin: 0 10px;
		padding: 50px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		align-items: center;
		justify-content: space-between;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		align-items: center;
		justify-content: space-around;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		align-items: center;
		justify-content: space-evenly;
	}
`;

export const TitleContainer = styled.div`
	/* display: flex; */
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		margin: 0 30px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		margin-left: -200px;
	}
`;
export const Title = styled.h1`
	font-weight: 200;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 1.4rem;
		margin-top: 5px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		
	}
`;

export const LinkContainer = styled.div`
	display: flex;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		margin: 2em 0em;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const LinkText = styled.a`
	text-decoration: none;
	color: #e98074;
	&:hover {
		color: #727272;
		opacity: 10;
		cursor: progress;
	}
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 0.7em;
		margin: 0 0.5em;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		font-size: 0.5em;
		margin: 0 0.9em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		font-size: 0.6em;
		margin-right: 50px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		font-size: 0.6em;
		padding: 2em;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		font-size: 0.9em;
		padding: 1em;
	}
`;

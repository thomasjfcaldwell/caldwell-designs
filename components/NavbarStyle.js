import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	@media only screen and (min-device-width: 768px) and (max-device-width: 1200px) {
		justify-content: center;
		align-items: center;
	}
	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		height: 40vh;
	}
`;

export const TitleContainer = styled.div`
	/* display: flex; */
	@media only screen and (min-device-width: 768px) and (max-device-width: 1200px) {
	}

	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
		/* background-color:goldenrod; */
		border: solid 2px #e85a4f;
		border-radius: 20px;
		padding: 0px 10px;
	}
`;
export const Title = styled.h1`
	font-weight: 200;
	@media only screen and (min-device-width: 768px) and (max-device-width: 1200px) {
	}
	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
		font-size: 1.4rem;
		margin-top:5px;
	}
`;

export const LinkContainer = styled.div`
	display: flex;
	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
		margin: 2em 0em;
	}
`;

export const LinkText = styled.a`
	text-decoration: none;
	color: #e98074;
	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
		font-size: 0.6em;
		margin: 0 0.5em;
	}
`;

import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding-top: 2rem;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		flex-direction: column;
		align-items: center;
		text-decoration: none;
	}
`;

export const TitleContainer = styled.div`
	width: 50%;
	justify-content: center;
	display: flex;

	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		width: 100%;
	}
`;
export const Title = styled.h1`
	display: flex;
	color: #d8c3a5;
	padding: 0.2rem;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	font-size: 2rem;
	text-shadow: 2px 2px #e98074;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		font-size: 1.7rem;
	}
`;

export const LinkContainer = styled.div`
	width: 75%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 30em;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
		flex-direction: column;
		margin-left: 0em;
	}
`;

export const LinkText = styled.a`
	text-decoration: none;
	color: #e98074;
	padding: 1em;
	@media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
	}
`;

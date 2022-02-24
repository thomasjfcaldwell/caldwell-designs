import styled from 'styled-components';

export const Title = styled.h2`
	font-weight: 600;
	line-height: 0.8em;
	font-size: 1rem;
	color: #e98074;
	width: 50%;
	@media only screen and (min-width: 80px) and (max-width: 424px) {
	}
	@media only screen and (min-width: 425px) and (max-width: 480px) {
	}

	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const Container = styled.div`
	margin: 2em auto;
`;

export const HomeButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto 5rem auto;
`;

export const HomeButtonText = styled.button`
	text-decoration: none;
	color: #8e8d8a;
	display: inline-block;
	background: none;
	font-size: 0.7em;
	margin-top: 3em;
	padding: 0.5em 1em;
	border-radius: 30px;
	border: solid #8e8d8a 1px;
	transition: all 0.2s;
	:hover {
		font-size: 0.8em;
		cursor: pointer;
		transform: translateY(-0.25em);
	}
`;

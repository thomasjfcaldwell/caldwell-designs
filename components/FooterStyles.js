import styled from 'styled-components';

export const HeadlineContainer = styled.div`
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		background-color: goldenrod;
		margin: 20px 20px;
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

export const Headline = styled.h1`
	font-weight: 600;
	line-height: 0.9em;
	@media only screen and (min-width: 320px) and (max-width: 424px) {
		font-size: 2.1em;
		/* background-color: yellow; */
		padding-left: 10px;
		line-height: 0.9em;
	}
	@media only screen and (min-width: 425px) and (max-width: 480px) {
		font-size: 2.5em;
		padding-left: 13px;
	}

	@media only screen and (min-width: 481px) and (max-width: 768px) {
		/* background-color: green; */
		display: block;
		width: 40%;
		font-size: 2.6em;
		padding-left: 10px;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		width: 40%;
		font-size: 2.6em;
		padding-left: 10px;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const Line = styled.div`
	background-color: #e98074;
	margin-top: -5px;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		width: 200px;
		height: 2px;
		margin-left: 15px;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		width: 290px;
		height: 2px;
		margin-left: 12px;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		width: 290px;
		height: 2px;
		margin-left: 12px;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
		width: 430px;
		height: 3px;
		background-color: #e98074;
		margin: 0px 0 0 90px;
	}
`;

export const ContactDetailsContainer = styled.div`
	@media only screen and (min-width: 320px) and (max-width: 480px) {
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

export const FooterWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		grid-template-columns: 1fr;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const ContactContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: calc(100% - 1rem);
	padding: 0.5rem;

	@media only screen and (min-width: 320px) and (max-width: 480px) {
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

export const FooterBottom = styled.div`
	min-height: 10vh;
	background-color: #e98074;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.25rem 0.25rem 0 0;
`;

export const FooterBottomText = styled.h5`
	margin: 0 auto;
	padding: 0.2rem;
	display: inline;
	text-align: center;
	font-size: 0.8rem;
`;

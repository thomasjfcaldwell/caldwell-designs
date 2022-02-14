import styled from 'styled-components';

export const Header = styled.h1`
	font-size: 0.9em;
	border-radius: 10px;
	border: 2px solid #e98074;
	padding: 0.2em 0.5em;
	font-weight: 550;
`;
export const HeaderContainer = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100px;
`;

export const ContactFormWrapper = styled.section`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

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

export const Form = styled.form`
	background-color: #e98074;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	padding: 2rem;
	border-radius: 1rem;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		width: 60%;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		width: 80%;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		width: 75%;
	}
	@media only screen and (min-width: 1281px) {
		width: 50%;
	}
`;

export const FormInputContainer = styled.div`
	/* background-color: yellowgreen; */
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		/* margin: 5px auto; */
		display: flex;
		font-size: 0.5rem;
		width: 100%;
		justify-content: center;
		padding: 5px;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		/* margin: 5px auto; */
		width: 80%;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		/* margin: 5px auto; */
		width: 100%;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		width: 90%;
		/* display: flex;
		justify-content: center; */
	}
	@media only screen and (min-width: 1281px) {
		margin: 5px auto;
		width: 100%;
		display: flex;
	}
`;

export const Label = styled.label`
	font-weight: 600;
	font-size: 0.4rem;
	margin: 1rem auto;
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
export const Input = styled.input`
	border: 0.3rem solid white;
	font-size: 0.7rem;
	width: 100%;
	border-radius: 0.3rem;
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
export const InputMessage = styled.textarea`
	/* background: grey; */
	width: 100%;
	height: 10rem;
	border-radius: 0.3rem;
	border: 0.3rem solid transparent;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		/* margin-top: -19px; */
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

export const MessageTitle = styled.p`
	font-size: 0.7rem;
	text-align: center;
	font-weight: 500;
	letter-spacing: 0.1em;
	margin: 1em auto;
	color: white;

	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		/* background-color: palevioletred; */
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
		margin: 2em auto;
		font-size: 15px;
	}
`;

export const InputSubmitContainer = styled.div`
	display: flex;
	margin: 1.5rem auto;
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

export const InputSubmit = styled.input`
	background-color: white;
	font-size: 0.8rem;
	color: #727272;
	border: 0.4rem solid transparent;
	border-radius: 0.4rem;
	transition: all 0.5s ease-out;
	:hover {
		background-color: #727272;
		color: white;
	}
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

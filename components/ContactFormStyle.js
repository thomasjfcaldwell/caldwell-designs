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
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		width: 100%;
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
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		border-radius: 10px;
		width: 90%;
		padding: 10px;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		width: 80%;
		margin: 10px 0;
		border-radius: 10px;
		padding: 10px;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		width: 100%;
		/* margin: 10px 0; */
		border-radius: 10px;
		padding: 10px;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		padding: 15px;
		width: 100%;
		border-radius: 15px;
	}
	@media only screen and (min-width: 1281px) {
		padding: 30px;
		min-width: 600px;
		margin: 20px auto;
		border-radius: 15px;
	}
	/* background-color: cornflowerblue; */
`;

export const FormInputContainer = styled.div`
	/* background-color: yellowgreen; */
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		/* margin: 5px auto; */
		display: flex;
		font-size: 0.5em;
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
	font-size: 0.8em;
	/* display: block; */
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		/* margin-top: 1px; */
		padding: 9px;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		margin: 0.4em auto;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		margin: 0.2em auto;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		margin: 10px auto;
	}
	@media only screen and (min-width: 1281px) {
		margin-top: 5px;
		padding: 5px;
	}
`;
export const Input = styled.input`
	border: 5px solid white;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		width: 100%;
		height: 30px;
		border-radius: 5px;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		width: 100%;
		border-radius: 5px;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		width: 100%;
		border-radius: 5px;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		width: 100%;
		border-radius: 5px;
		/* line-height:30px; */
	}
	@media only screen and (min-width: 1281px) {
		width: 100%;
		border-radius: 5px;
	}
`;
export const InputMessage = styled.textarea`
	/* background: grey; */
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		width: 100%;
		height: 120px;
		border-radius: 5px;
		border: 5px solid transparent;
		/* margin-top: -19px; */
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		width: 100%;
		height: 150px;
		border-radius: 5px;
		border: 10px solid transparent;
		/* background-color: lightsalmon;   */
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		width: 100%;
		height: 100px;
		border-radius: 5px;
		border: 10px solid transparent;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		width: 100%;
		height: 100px;
		border-radius: 5px;
		border: 10px solid transparent;
	}
	@media only screen and (min-width: 1281px) {
		width: 100%;
		height: 100px;
		border-radius: 5px;
		border: 10px solid transparent;
	}
`;

export const MessageTitle = styled.p`
	font-size: 1.1em;
	text-align: center;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	/* line-height: 80px; */

	margin: 1em auto;

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
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		display: flex;
		margin: 20px;
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
	font-size: 1em;
	color: #7277272;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		width: 100%;
		border-radius: 10px;
		border: 5px solid transparent;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		/* background-color: plum;  */
		border-radius: 15px;
		border: 5px solid transparent;
		margin: 2em 0em;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		border-radius: 15px;
		border: 5px solid transparent;
		margin: 1em 0em;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		border-radius: 15px;
		border: 5px solid transparent;
		margin: 1em 0em;
	}
	@media only screen and (min-width: 1281px) {
		border-radius: 15px;
		border: 5px solid transparent;
		margin: 1em 0em;
	}
`;

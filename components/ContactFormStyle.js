import styled from 'styled-components';

export const ContactFormWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
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

export const Form = styled.form`
	background-color: #e98074;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 90%;
		border-radius: 10px;
		padding: 10px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 70%;
		margin: 10px 0;
		border-radius: 10px;
		padding: 60px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 50%;
		margin: 10px 0;
		border-radius: 10px;
		padding: 20px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		padding: 30px;
		width: 50%;
		margin: 20px auto;
		border-radius: 15px;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		padding: 30px;
		width: 50%;
		margin: 20px auto;
		border-radius: 15px;
	}
	/* background-color: cornflowerblue; */
`;

export const FormInputContainer = styled.div`
	/* background-color: yellowgreen; */
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		margin: 10px auto;
		display: flex;
		font-size: 0.5em;
		width: 100%;
		justify-content: center;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		margin: 5px auto;
		width: 100%;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		margin: 5px auto;
		width: 100%;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		margin: 5px auto;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		margin: 5px auto;
		width: 100%;
		display: flex;
	}
`;

export const Label = styled.label`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		margin-top: 1px;
		padding: 10px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		/* background-color: rosybrown; */
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		margin-top: 5px;
		padding: 5px;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		margin-top: 5px;
		padding: 5px;
	}
`;
export const Input = styled.input`
	border: 5px solid white;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 90%;
		height: 30px;
		border-radius: 5px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 100%;
		border-radius: 5px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 100%;
		border-radius: 5px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 100%;
		border-radius: 5px;
		/* line-height:30px; */
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 100%;
		border-radius: 5px;
	}
`;
export const InputMessage = styled.input`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 90%;
		height: 90px;
		border-radius: 5px;
		border: 5px solid white;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 100%;
		height: 150px;
		border-radius: 5px;
		border: 10px solid white;
		/* background-color: lightsalmon;   */
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 100%;
		height: 100px;
		border-radius: 5px;
		border: 10px solid white;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 100%;
		height: 100px;
		border-radius: 5px;
		border: 10px solid white;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 100%;
		height: 100px;
		border-radius: 5px;
		border: 10px solid white;
	}
`;

export const MessageTitle = styled.p`
	font-size: 12px;
	text-align: center;
	font-weight: 600;
	padding-top: 5px;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		/* background-color: palevioletred; */
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		margin: 2em auto;
		font-size: 15px;
	}
`;

export const InputSubmitContainer = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		display: flex;
		/* margin: 20px; */
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

export const InputSubmit = styled.input`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 100%;
		border-radius: 10px;
		border: 5px solid white;
		font-size: 10px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		/* background-color: plum;  */
		border-radius: 15px;
		border: 5px solid white;
		margin: 2em 0em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		border-radius: 15px;
		border: 5px solid white;
		margin: 1em 0em;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		border-radius: 15px;
		border: 5px solid white;
		margin: 1em 0em;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		border-radius: 15px;
		border: 5px solid white;
		margin: 1em 0em;
	}
`;

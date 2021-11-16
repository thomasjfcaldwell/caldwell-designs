import styled from 'styled-components';

export const ContactFormWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const Form = styled.form`
	width: 80%;

	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		margin: 20px;
		border-radius: 10px;
		background-color: #e98074;
	}
	/* background-color: cornflowerblue; */
`;

export const FormInputContainer = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		margin: 10px auto;
		display: flex;
		font-size: 0.5em;
		width: 100%;
		/* background-color: yellowgreen; */
		justify-content: center;
	}
`;

export const Label = styled.label`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
	}
`;
export const Input = styled.input`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		width: 90%;
		height: 30px;
		border-radius: 5px;
		border: 5px solid white;
	}
`;
export const InputMessage = styled.input`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		width: 90%;
		height: 90px;
		border-radius: 5px;
		border: 5px solid white;
	}
`;

export const MessageTitle = styled.p`
	@media only screen and (max-width: 600px) {
		font-size: 12px;
		text-align: center;
		font-weight: 600;
		padding-top: 5px;
	}
`;

export const InputSubmitContainer = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		display: flex;
		justify-content: center;
		margin: 20px;
	}
`;

export const InputSubmit = styled.input`
	@media only screen and (min-device-width: 300px) and (max-device-width: 600px) {
		width: 30%;
		border-radius: 20px;
		border: 5px solid white;
		font-size: 10px;
	}
`;

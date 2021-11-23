import {
	ContactFormWrapper,
	Form,
	FormInputContainer,
	Label,
	Input,
	InputSubmit,
	InputMessage,
	InputSubmitContainer,
	MessageTitle,
} from './ContactFormStyle';


function ContactForm() {

	return (
		<ContactFormWrapper>
			<p>Send a Project Request</p>
			<Form >
				<FormInputContainer>
					<Input type='text' name='name' placeholder='Name'  />
				</FormInputContainer>
				<FormInputContainer>
					<Input type='text' name='email' placeholder='Email'  />
				</FormInputContainer>
				<FormInputContainer>
					<Input type='text' name='phone' placeholder='Phone'  />
				</FormInputContainer>
				<MessageTitle>Send A Message</MessageTitle>
				<FormInputContainer>
					<InputMessage type='text' name='message' />
				</FormInputContainer>
				<InputSubmitContainer>
					<InputSubmit type='submit' />
				</InputSubmitContainer>
			</Form>
		</ContactFormWrapper>
	);
}

export default ContactForm;

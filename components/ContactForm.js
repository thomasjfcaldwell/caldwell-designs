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
import { useState } from 'react';

function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);
	return (
		<ContactFormWrapper>
			<p>Send a Project Request</p>
			<Form>
				<FormInputContainer>
					<Input
						type='text'
						name='name'
						placeholder='Name'
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</FormInputContainer>
				<FormInputContainer>
					<Input
						type='text'
						name='email'
						placeholder='Email'
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</FormInputContainer>
				<FormInputContainer>
					<Input
						type='text'
						name='phone'
						placeholder='Phone'
						onChange={(e) => {
							setPhone(e.target.value);
						}}
					/>
				</FormInputContainer>
				<MessageTitle>Send A Message</MessageTitle>
				<FormInputContainer>
					<InputMessage
						type='text'
						name='message'
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					/>
				</FormInputContainer>
				<InputSubmitContainer>
					<InputSubmit type='submit' />
				</InputSubmitContainer>
			</Form>
		</ContactFormWrapper>
	);
}

export default ContactForm;

import {
	Header,
	HeaderContainer,
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

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('sending');

		let data = {
			name,
			email,
			phone,
			message,
		};
		fetch('http://https://caldwell-designs.vercel.app/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log('Response received');
			if (res.status === 200) {
				console.log('Response succeeded!');
				setSubmitted(true);
				setName('');
				setPhone('');
				setEmail('');
				setMessage('');
			}
		});
	};

	return (
		<ContactFormWrapper>
			{/* <HeaderContainer>
				<Header>Send a Project Request</Header>
			</HeaderContainer> */}

			<Form>
				<FormInputContainer>
					<Label id='name' htmlFor='name'>
						Name
					</Label>
					<Input
						type='text'
						onChange={(e) => {
							setName(e.target.value);
						}}
						name='name'
						placeholder='Name'
					/>
				</FormInputContainer>
				<FormInputContainer>
					<Label id='email' htmlFor='email'>
						Email
					</Label>
					<Input
						type='text'
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						name='email'
						placeholder='Email'
					/>
				</FormInputContainer>
				<FormInputContainer>
					<Label id='phone' htmlFor='phone'>
						Phone
					</Label>
					<Input
						type='text'
						onChange={(e) => {
							setPhone(e.target.value);
						}}
						name='phone'
						placeholder='Phone'
					/>
				</FormInputContainer>
				<MessageTitle>Send A Message</MessageTitle>
				<FormInputContainer>
					<Label id='message' htmlFor='message'>
						Message
					</Label>
					<InputMessage
						type='text'
						onChange={(e) => {
							setMessage(e.target.value);
						}}
						name='message'
					/>
				</FormInputContainer>
				<InputSubmitContainer>
					<InputSubmit
						type='submit'
						onClick={(e) => {
							handleSubmit(e);
						}}
					/>
				</InputSubmitContainer>
			</Form>
		</ContactFormWrapper>
	);
}

export default ContactForm;

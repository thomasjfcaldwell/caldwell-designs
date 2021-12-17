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
		fetch('https://caldwell-designs.vercel.app/api/contact', {
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

			<Form
				action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdYWaw0WkN_qpVogvapyKaZqx9A_hqGmmMWrWsYIPSziWcBRg/formResponse'
				method='get'>
				<FormInputContainer>
					<Label id='entry.1673834915' htmlFor='name'>
						Name
					</Label>
					<Input type='text' name='entry.1673834915' placeholder='Name' />
				</FormInputContainer>
				<FormInputContainer>
					<Label name='entry.218700094' htmlFor='email'>
						Email
					</Label>
					<Input type='text' name='entry.218700094' placeholder='Email' />
				</FormInputContainer>
				<FormInputContainer>
					<Label name='entry.1613609491' htmlFor='phone'>
						Phone
					</Label>
					<Input type='text' name='entry.1613609491' placeholder='Phone' />
				</FormInputContainer>
				<MessageTitle>Send A Message</MessageTitle>
				<FormInputContainer>
					<Label name='entry.1359360774' htmlFor='message'>
						Message
					</Label>
					<InputMessage type='text' name='entry.1359360774' />
				</FormInputContainer>
				<InputSubmitContainer>
					<InputSubmit type='submit' />
				</InputSubmitContainer>
			</Form>
		</ContactFormWrapper>
	);
}

export default ContactForm;

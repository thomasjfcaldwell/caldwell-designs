import React from 'react';

import {
	ContactThomasContainer,
	ContactThomasSocialMediaContainer,
	ContactThomasSocialMediaLink,
	ContactThomasTitleContainer,
	ContactThomasTitle,
} from './ContactThomasStyles';

const socialMediaData = [
	{ number: 1, text: 'bummmy bum' },
	{ number: 2, text: 'Number 2' },
	{ number: 3, text: 'number 3' },
];

function ContactThomas() {
	return (
		<ContactThomasContainer>
			<ContactThomasTitleContainer>
				<ContactThomasTitle>Contact Thomas</ContactThomasTitle>
			</ContactThomasTitleContainer>
			<ContactThomasSocialMediaContainer>
				<ContactThomasSocialMediaLink>email</ContactThomasSocialMediaLink>
				<ContactThomasSocialMediaLink>linkedin</ContactThomasSocialMediaLink>
				<ContactThomasSocialMediaLink>Github</ContactThomasSocialMediaLink>
			</ContactThomasSocialMediaContainer>
		</ContactThomasContainer>
	);
}

export default ContactThomas;

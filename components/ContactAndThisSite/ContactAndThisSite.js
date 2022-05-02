import React from 'react';
import ContactThomas from '../ContactThomas/ContactThomas';
import ThisSite from '../ThisSite/ThisSite';

import { ContactAndThisSiteContainer } from './ContactAndThisSiteStyles';

export default function ContactAndThisSite() {
	return (
		<ContactAndThisSiteContainer>
			<ContactThomas />
			<ThisSite />
		</ContactAndThisSiteContainer>
	);
}

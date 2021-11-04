import Link from 'next/link';
import { Navbar } from '../../components/Navbar';

function ContactPage() {
	return (
		<>
			<div>
				<Navbar />
				<Link href='/'>
					<a>go back</a>
				</Link>
			</div>
		</>
	);
}

export default ContactPage;

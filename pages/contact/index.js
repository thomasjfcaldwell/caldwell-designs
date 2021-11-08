import Link from 'next/link';
import { Layout } from '../../layout/Layout';

function ContactPage() {
	return (
		<>
			<div>
				<Layout>
					<Link href='/'>
						<a>go back</a>
					</Link>
				</Layout>
			</div>
		</>
	);
}

export default ContactPage;

import { Layout } from '../layout/Layout';

import Work from '../components/Examples/Work';
import HomeButton from '../components/HomeButton';

function Examples() {
	return (
		<>
			<div>
				<Layout>
					<Work />
					<HomeButton />
				</Layout>
			</div>
		</>
	);
}

export default Examples;

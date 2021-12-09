import React from 'react';

import { Container, ContentOne,ContentTwo, ContentThree, ContentFour, Headline } from './GridStyle';

function Grid() {
	return (
		<div>
			<Container>
				<ContentOne>
					<Headline>One</Headline>
				</ContentOne>
				<ContentTwo>
					<Headline>Two</Headline>
				</ContentTwo>
				<ContentThree>
					<Headline>Three</Headline>
				</ContentThree>
				<ContentFour>
					<Headline>Four</Headline>
				</ContentFour>
			</Container>
		</div>
	);
}

export default Grid;

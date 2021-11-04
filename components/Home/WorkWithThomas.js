import { TitleContainer, Title } from '../Home/WorkWithThomasStyle';
import React from 'react';
import { projects } from '../../constants/constants.js';

const WorkWithThomas = () => (
	<div>
		<h2>bummy</h2>
		{projects.map((p, i) => {
			<TitleContainer key={i}>
				<h4>{p.description}</h4>
			</TitleContainer>;
		})}
	</div>
);

export default WorkWithThomas;

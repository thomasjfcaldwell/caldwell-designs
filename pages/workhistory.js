import React, { Component } from 'react';
import { Layout } from '../layout/Layout';
import Jobs from '../components/Work_History/Jobs';
import Skills from '../components/Work_History/Skills';
import HomeButton from '../components/HomeButton';

export default class workhistory extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Jobs />
					<Skills />
					<HomeButton />
				</Layout>
			</div>
		);
	}
}

import React from 'react';
import { Layout } from '../layout/Layout';

export default class Counter extends React.Component {
	state = { count: 0 };

	increment = () => this.setState({ count: this.state.count + 10 });
	decrement = () => this.setState({ count: this.state.count - 1 });

	render() {
		return (
			<>
				<Layout>
					<div
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<p>{this.state.count}</p>
						<button onClick={this.increment}>+</button>
						<button onClick={this.decrement}>-</button>
					</div>
				</Layout>
			</>
		);
	}
}

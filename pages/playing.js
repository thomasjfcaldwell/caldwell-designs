import React from 'react';
import { Navbar } from '../components/Navbar';

export default class Counter extends React.Component {
	state = { count: 0 };

	increment = () => this.setState({ count: this.state.count + 10 });
	decrement = () => this.setState({ count: this.state.count - 1 });

	render() {
		return (
			<>
				<Navbar />
				<div
					style={{
						width: '50%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<p>{this.state.count}</p>
					<button onClick={this.increment}>+</button>
					<button onClick={this.decrement}>-</button>
				</div>
			</>
		);
	}
}

import React from 'react';
import { Layout } from '../layout/Layout';

export default class Counter extends React.Component {
	state = { count: 0, open: false };
	
	increment = () => this.setState({ count: this.state.count + 10 });
	decrement = () => this.setState({ count: this.state.count - 1 });
	moreIncrement = () => this.setState({ count: this.state.count + 109 });
	reset = () => this.setState({ count: 0 });
	openDoor = () => this.setState({ open: true });
	
	
	render() {
		
		return (
			<>
				<Layout>
					<div
						style={{
							width: '100%',
							display: 'flex',
							
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<p>{this.state.count}</p>
						<button onClick={this.increment}>+</button>
						<button onClick={this.decrement}>-</button>
						<button onClick={this.moreIncrement}>++</button>
						<button onClick={this.reset}>reset</button>
						<button onClick={this.openDoor}>open</button>
					</div>
				</Layout>
			</>
		);
	}
}

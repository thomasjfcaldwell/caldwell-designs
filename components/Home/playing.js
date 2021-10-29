import React, { Component } from 'react';
import { Button } from 'bootstrap';

function Playing() {
	state = { count: 0 };

	increment = () => this.setState({ count: this.state.count + 1 });
	decrement = () => this.setState({ count: this.state.count - 1 });
	// render() {
	return (
		<div>
			<Button onClick={this.increment}>+</Button>
			<button onClick={this.decrement}>-</button>
		</div>
	);
}

export default Playing;

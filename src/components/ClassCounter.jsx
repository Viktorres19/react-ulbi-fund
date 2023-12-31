import React from 'react'

class ClassCounter extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			likes: 0
		}
		this.increment = this.increment.bind(this)
		this.decrement = this.decrement.bind(this)
	}
	increment() {
		this.setState({likes: this.state.likes + 1})
	}
	decrement() {
		this.setState({likes: this.state.likes - 1})
	}
	render() {
		return (
			<div>
				<div>
					{ this.state.likes }
				</div>
				<div>
					<button onClick={this.increment}>Increment</button>
					<button onClick={this.decrement}>Decrement</button>
				</div>
			</div>
		)
	}
}

export default ClassCounter

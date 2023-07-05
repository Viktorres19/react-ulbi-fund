import React, {useState} from 'react'

const Counter = () => {
	const [likes, setLikes] = useState(0)

	const increment = () => {
		setLikes(likes + 1)
	}
	const decrement = () => {
		setLikes(likes - 1)
	}

	return (
		<div>
			<div>
				{ likes }
			</div>
			<div>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
			</div>
		</div>
	)
}

export default Counter

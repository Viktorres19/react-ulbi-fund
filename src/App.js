import {useState} from 'react'
const App = () => {
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('Input text')

  const increment = () => {
    setLikes(likes + 1)
  }
  const decrement = () => {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>{value}</h2>
        <input
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </div>
      <div>
        { likes }
      </div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;

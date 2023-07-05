import {useState} from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'
const App = () => {
  const [value, setValue] = useState('Input text')


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
      <Counter />
      <ClassCounter />
    </div>
  );
}

export default App

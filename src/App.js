import './styles/App.css'
import {useState} from 'react'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'PHP', body: 'Back End'},
    {id: 3, title: 'CSS', body: 'Styles'},
    {id: 4, title: 'HTML', body: 'Layout'},
  ])
  const [title, setTitle] = useState('asdfas')

  const addNewPost = () => {
    console.log(title)
  }

  return (
    <div className="App">
      <form>
        {/*керуємий компонент*/}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder={title}
        />
        <MyInput type="text" placeholder="Опис посту" />
        <MyButton onClick={addNewPost}>Створити пост</MyButton>
      </form>
      <PostList posts={posts} title="Перелік постів 1" />
    </div>
  );
}

export default App

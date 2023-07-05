import './styles/App.css'
import {useState} from 'react'
import PostList from './components/PostList'
const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'PHP', body: 'Back End'},
    {id: 3, title: 'CSS', body: 'Styles'},
    {id: 4, title: 'HTML', body: 'Layout'},
  ])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Назва посту" />
        <input type="text" placeholder="Опис посту" />
        <button>Створити пост</button>
      </form>
      <PostList posts={posts} title="Перелік постів 1" />
    </div>
  );
}

export default App

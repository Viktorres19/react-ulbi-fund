import './styles/App.css'
import {useState} from 'react'
import PostList from './components/PostList'
import PostForm from "./components/PostForm";
const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'PHP', body: 'Back End'},
    {id: 3, title: 'CSS', body: 'Styles'},
    {id: 4, title: 'HTML', body: 'Layout'},
  ])

  const createPost = (newPost) => {
    /*розгортаємо старий масив в кінець цього масиву добавляємо новий пост*/
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length
        ? <PostList remove={removePost} posts={posts} title="Перелік постів 1" />
        : <h1 style={{textAlign: 'center'}}>Пости не були знайдені</h1>
      }
    </div>
  );
}

export default App

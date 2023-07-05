import './styles/App.css'
import {useState} from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'
const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'PHP', body: 'Back End'},
    {id: 3, title: 'CSS', body: 'Styles'},
    {id: 4, title: 'HTML', body: 'Layout'},
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    /*розгортаємо старий масив в кінець цього масиву добавляємо новий пост*/
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const sortPosts = (sort) => {
    setSelectedSort(sort)
    /*розгорнемо пости в новий масив (копію) і відсортуємо цей масив, тому що напряму стан мутувати не можна*/
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортування"
          options={[
            {value: 'title', name: 'За назвою'},
            {value: 'body', name: 'За описом'},
          ]}
        />
      </div>
      {posts.length
        ? <PostList remove={removePost} posts={posts} title="Перелік постів 1" />
        : <h1 style={{textAlign: 'center'}}>Пости не були знайдені</h1>
      }
    </div>
  );
}

export default App

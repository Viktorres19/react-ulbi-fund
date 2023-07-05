import './styles/App.css'
import {useState} from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'
import MyInput from './components/UI/input/MyInput'
const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'PHP', body: 'Back End'},
    {id: 3, title: 'CSS', body: 'Styles'},
    {id: 4, title: 'HTML', body: 'Layout'},
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts() {
    console.log('Sorted posts function has executed')
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }

  const sortedPosts = getSortedPosts()

  const createPost = (newPost) => {
    /*розгортаємо старий масив в кінець цього масиву добавляємо новий пост*/
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Пошук..."
        />
        <hr style={{margin: '15px 0'}}/>
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
        ? <PostList remove={removePost} posts={sortedPosts} title="Перелік постів 1" />
        : <h1 style={{textAlign: 'center'}}>Пости не були знайдені</h1>
      }
    </div>
  );
}

export default App

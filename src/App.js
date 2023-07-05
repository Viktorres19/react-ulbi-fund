import './styles/App.css'
import {useState, useEffect} from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'
import Loader from './components/UI/Loader/Loader'

import {usePosts} from './hooks/usePosts'
import PostService from './API/PostService'
const App = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, []) //щоб функція відпрацювала один раз треба масив залежностей залишити пустим (можна задавати залежності через зап'яту)

  const createPost = (newPost) => {
    /*розгортаємо старий масив в кінець цього масиву добавляємо новий пост*/
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostsLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts)
    setIsPostsLoading(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Створити пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Перелік постів 1" />
      }
    </div>
  );
}

export default App

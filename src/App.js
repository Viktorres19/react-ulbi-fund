import './styles/App.css'
import {useState, useRef} from 'react'
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
  /*const [title, setTitle] = useState('')
  const [body, setBody] = useState('')*/
  /*міняємо змінні на об'єкт*/
  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  /*example how to receive data from the input which is not controlled*/
  /*const bodyInputRef = useRef()*/

  const addNewPost = (e) => {
    e.preventDefault()
/*    const newPost = {
      id: Date.now(),
      title,
      body
    }*/
    /*розгортаємо інформацію з поста*/
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
    /*setTitle('')
    setBody('')*/
    /*console.log(newPost)*/
    /*console.log(bodyInputRef.current.value)*/
  }

  return (
    <div className="App">
      <form>
        {/*керуємий компонент*/}
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Текст 1"
        />
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Текст 2"
        />
        {/*не контролюємий компонент*/}
        {/*<MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Опис посту"
        />*/}
        <MyButton onClick={addNewPost}>Створити пост</MyButton>
      </form>
      <PostList posts={posts} title="Перелік постів 1" />
    </div>
  );
}

export default App

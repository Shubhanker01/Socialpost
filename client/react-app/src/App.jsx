import './App.css'
import DisplayPost from './components/DisplayPost'
import UserPost from './components/UserPost'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

function App() {
  
  return (
    <>
      <h1>Your Posts</h1>
      <Router>
        <Routes>
          <Route path='/' element={<UserPost/>}></Route>
          <Route path='/displaypost' element={<DisplayPost/>}>My posts</Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

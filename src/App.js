import './App.css';
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About'

function App() {
  return (
    <div className="App">
      {/* put the navbar here */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />}>
          <Route path="" element={<PostsLists />} />
          <Route path=":slug" element={<Post />} />
        </Route> 
        
      </Routes>
     
    </div>
  );
}

export default App;

function NavBar(){
  return(
    <nav style={{ padding:20 }}>
      <Link to="/" style={{ margin: 10 }}>Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/posts" >Posts</Link>

    </nav>
     
  )
}

const BlogPosts = {
  '1':{
    title:'First Blog Post',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  '2':{
    title:'Second Blog Post',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
}

function Posts(){
  return(
    <div style={{ padding:20 }}>
      <h2>Blog</h2>
      <Outlet />
    </div>
  )
}

function PostsLists(){
  return(
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => {
        
        return(
          <li key={slug}>
            <Link to={`/posts/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        )
      })}
      {/* {Object.entries(BlogPosts)} ->  this converts the object to an array*/}
    </ul>
  )
}

function Post(){
  const { slug } = useParams()
  const post = BlogPosts[slug]
  const { title, description } = post

  return(
    <div style={{ padding: 20}}>
      <h3>{title}</h3>
      <p>{description}</p>

    </div>
  )
} 
import logo from './logo.svg';
import './App.css';
import PostList from './features/posts/PostList';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <div className="App">
      <AddPostForm></AddPostForm>
      <PostList></PostList>
    </div>
  );
}

export default App;

import './App.css';
import React, { useRef, useEffect } from 'react';
import film from './Film-1.png';
import {Post} from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, uploadPost } from './actions';
//const host = "https://proj2-api.callanhand.me:8442";

function newPost() {
  return (<div className="new-post">modal</div>);
}

function App() {


  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  //const initial_images = [{username: 'jennah', caption: 'hey', image: Image}];
  // OR initial_images = [{username: 'jennah', caption: 'hey', image_url: host/images/image_name}];


  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const fileInputRef = useRef();

  const onUpload = event => {
    const fileInput = fileInputRef.current;
    if (fileInput.files.length > 0) {
      setTimeout(() => dispatch(uploadPost(fileInput.files[0], document.getElementById("username").value, document.getElementById("caption").value)), 60000);
      
    }
  }

  return (

    <div className="App">

      <div>
        <label>
          Username:
          <input id="username" type="text" name="name" />
        </label>
        <label>
          Caption:
          <input id="caption" type="text" name="caption"></input>
        </label>
        <input type="file" ref={fileInputRef} />
        <button onClick={onUpload}>upload</button>
      </div>

      <div>
        <ul >
          {posts.map(post => <Post key={post.id} post={post}/>) }
        </ul>
      </div>

      <div className="top-header">
        <button id="button" className="link" onClick={newPost}>&#43;  New Post</button>
        <a className="link" href="post.html">Activity</a>
        <img className="image" src={film} alt="camera"></img>
        <a className="link" href="post.html">Scheduled Posts</a>
        <a className="link" href="post.html">Profile</a>
      </div>
    </div>
  );
}

export default App;

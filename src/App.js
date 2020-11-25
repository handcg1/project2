import './App.css';
import film from './Film-1.png';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchImages } from './actions';

function newPost() {
  return (<div className="new-post">modal</div>);
}

function App() {

  const images = useSelector(state => state.images);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (

    <div className="App">

      {/* TODO: make this modal show up upon page load
          note: it should probably be made into a component
          b/c it's dynamic 
          
          {prompt("username:")}
          */
          }

        <div> 
          {images.map(image => <img src={`http://proj2-api.callanhand.me:3443/image/${image}`} />)}
          {console.log(images)}
        </div>


      <div className="username-modal">
        <label>
          Username:
          <input type="text" name="name" />
        </label>
        <button>enter</button>
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

import './App.css';
import React, { useRef, useEffect } from 'react';
import film from './Film-1.png';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImages, uploadImage } from './actions';


/*
 const images = useSelector(state => state.images);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

*/
//const host = "https://proj2-api.callanhand.me:8442";

function newPost() {
  return (<div className="new-post">modal</div>);
}

function App() {


  const images = useSelector(state => state.images);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const fileInputRef = useRef();

  const onUpload = event => {
    const fileInput = fileInputRef.current;
    if (fileInput.files.length > 0) {
      setTimeout(() => dispatch(uploadImage(fileInput.files[0], document.getElementById("username").value, document.getElementById("caption").value)), 60000);
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
          {images.map(image => <li> <img class="image" alt="insert caption here" src={`http://proj2-api.callanhand.me:3443/image/${image}`} /> </li>)}
        </ul>

        {/* {console.log(images)} */}
        <h1> USERNAME </h1>
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

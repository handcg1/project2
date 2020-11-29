import './App.css';
import React, {useRef, useEffect} from 'react';
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
const host = "https://proj2-api.callanhand.me:8442";

function newPost() {
  return (<div className="new-post">modal</div>);
}


// function uploadImage(image) {

//   const post = {username, picture, caption}; 

//   //const formData = new FormData();
//   //formData.append('image', image);

//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(post),
//   }

//   fetch(`${host}/upload-post`, options)
//             .then(response => response.text())
//             .then(data => {
//               console.log(data);
//             });

// }





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
      dispatch(uploadImage(fileInput.files[0]));
    }
  }

  return (

    <div className="App">

      {/* TODO: make this modal show up upon page load
          note: it should probably be made into a component
          b/c it's dynamic 
          
          {prompt("username:")}
          */
          }

      <div>
      <label>
          Username:
          <input type="text" name="name" />
        </label>
        <input type="file" ref={fileInputRef}/>
          <button onClick={onUpload}>upload</button>
      </div>

        <div> 
        <ul >
          {images.map(image => <li> <img class="image" src={`http://proj2-api.callanhand.me:3443/image/${image}`} /> </li> )}
        </ul>
      
      
          
          {console.log(images)}
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

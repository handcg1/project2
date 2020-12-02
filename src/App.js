import './App.css';
import React, { useRef, useEffect } from 'react';
import film from './Film-1.png';
import { Post } from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, uploadPost } from './actions';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function newPost() {
  return (<div className="new-post">modal</div>);
}


function App() {

  const [show, setShow] = useState(true);
  const [username, setUsername] = useState("");

  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const fileInputRef = useRef();

  const onUpload = event => {
    const fileInput = fileInputRef.current;
    if (fileInput.files.length > 0) {
      setTimeout(() => dispatch(uploadPost(fileInput.files[0], username, document.getElementById("caption").value)), 60000);
    }
  }

  const handleClose = () => {
    document.getElementById("top-class").style.opacity = 1;
    var errorBox = document.getElementById("error");
    if (username.length < 3) {
      errorBox.innerHTML = "Please enter a username longer than 2 characters.";
      return;
    }
    setShow(false);
  }


  return (



    <div className="App" id="top-class">

      <Modal className="username-modal" 
        animation={false}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>

        <Modal.Header className="username-modal-header">
          <Modal.Title>Welcome to Memory Stack!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="username-modal-body">
          <p></p>
          <input className="username" type="text" onChange={e => setUsername(e.target.value)}></input>
        </Modal.Body>
        <Modal.Footer className="username-modal-footer">
        <div id="error"></div> 
          <Button variant="primary" onClick={handleClose}>
            Enter
            </Button>
        </Modal.Footer>
      </Modal>


      <div>
        <label>
          Caption:
          <input id="caption" type="text" name="caption"></input>
        </label>
        <input type="file" ref={fileInputRef} />
        <button onClick={onUpload}>upload</button>
      </div>

      <div className="top-header">
        <button id="button" className="link" onClick={newPost}>&#43;  New Post</button>
        <a className="link" href="post.html">Activity</a>
        <img className="image" src={film} alt="camera"></img>
        <a className="link" href="post.html">Scheduled Posts</a>
        <a className="link" href="post.html">Profile</a>
      </div>

      <div>
        <ul >
          {posts.map(post => <Post key={post.id} post={post} />)}
        </ul>
      </div>
    </div>

    
  );
}

export default App;

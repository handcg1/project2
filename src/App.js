import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import film from './Film-1.png';
import { Post } from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, uploadPost } from './actions';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function App() {

  const [showUsernameModal, setshowUsernameModal] = useState(true);
  const [showNewPostModal, setNewPostModal] = useState(false);


  const [username, setUsername] = useState("");
  const [caption, setCaption] = useState("");

  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const fileInputRef = useRef();

  const onUpload = event => {
    
    const fileInput = fileInputRef.current;
    if (fileInput.files.length > 0) {
      setTimeout(() => dispatch(uploadPost(fileInput.files[0], username, caption)), 60000);
    }
  }

  const handleClose = () => {

    if (username.length < 3) {
      alert("Please enter a username longer than 2 characters.");
      return;
    } else {
      var elements = document.getElementsByClassName("opacity-element");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = 1;
      }
      setshowUsernameModal(false);
    }

  }


  const closeNewPostModal = () => {
    onUpload();
    var elements = document.getElementsByClassName("opacity-element");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = 1;
    }
    setNewPostModal(false);
  }

  const closeWithoutUploading = () => {
    var elements = document.getElementsByClassName("opacity-element");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = 1;
    }
    setNewPostModal(false);
  }

  const newPost = () => {
    var elements = document.getElementsByClassName("opacity-element");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = .5;
    }
    setNewPostModal(true);
  }




  return (

    <div className="App opacity-element" >

      {/* USERNAME MODAL */}
      <Modal className="username-modal"
        animation={false}
        show={showUsernameModal}
        onHide={handleClose}
        keyboard={false}>

        <Modal.Header className="username-modal-header">
          <Modal.Title>Welcome to Memory Stack!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="username-modal-body">
          <p>Where your memories live on and you can enjoy the moment.</p>
          <input className="username" type="text" onChange={e => setUsername(e.target.value)}></input>
        </Modal.Body>
        <Modal.Footer className="username-modal-footer">
          <Button variant="primary" onClick={handleClose}>
            Enter
            </Button>
        </Modal.Footer>
      </Modal>

      {/* NEW POST MODAL */}
      <Modal className="new-post-modal"
        animation={false}
        show={showNewPostModal}
        onHide={closeNewPostModal}
        keyboard={false}>

        <Modal.Header className="new-post-modal-header">
          <h2 id="new-post-header">{username}'s new post</h2>
        </Modal.Header>
        <Modal.Body className="new-post-modal-body">
          <div id="picture-input"><span id="select-image-file">Select Image File</span><input type="file" accept="image/png, image/jpeg, image/jpg" ref={fileInputRef}/></div>
          <div id="caption-input"><textarea id="caption" type="text" placeholder="Enter caption..." onChange={e => setCaption(e.target.value)}></textarea></div>
          <div><button id="upload-button" className="new-post-button" onClick={closeNewPostModal}>
            <span>Upload Post</span>
          </button></div>
          <div><button id="exit-button" className="new-post-button" onClick={closeWithoutUploading}>
            Exit
          </button></div>
        </Modal.Body>
      </Modal>

      <div className="opacity-element top-header">
        <button id="new-post" className="link" onClick={newPost}>&#43;  New Post</button>
        <button className="link" >Activity</button>
        <img className="image" src={film} alt="camera"></img>
        <button className="link" >Scheduled Posts</button>
        <button className="link" >Profile</button>
      </div>

      <div className="grid opacity-element"> 
         {posts.map(post => <Post key={post.id} post={post} />)} 
      </div> 

    </div>
  );
}

export default App; 
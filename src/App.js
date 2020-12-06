import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import film from './Film-1.png';
import { Post } from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, uploadPost } from './actions';
import Modal from 'react-bootstrap/Modal';


function App() {

  const [showUsernameModal, setshowUsernameModal] = useState(true);
  const [showNewPostModal, setNewPostModal] = useState(false);
  const [username, setUsername] = useState("");
  const [caption, setCaption] = useState("");

  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    disableClicks();
  }, [dispatch]);

  const disableClicks = () => {
    var elements = document.getElementsByClassName("no-click-element");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.pointerEvents = "none";
    }
  }

  const fileInputRef = useRef();

  const onUpload = event => {
    const fileInput = fileInputRef.current;
    if (fileInput.files.length > 0) {
      setTimeout(() => dispatch(uploadPost(fileInput.files[0], username, caption)), 60000);
    }
  }

  const closeUsernameModal = () => {
    if (username.length < 3) {
      alert("Please enter a username longer than 2 characters.");
      return;
    } else {
      // change opacity back to normal
      var elements = document.getElementsByClassName("opacity-element");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = 1;
      }
      // make elements clickable upon closing username modal
      var set_elements_clickable = document.getElementsByClassName("no-click-element");
      for (var j = 0; j < set_elements_clickable.length; j++) {
        set_elements_clickable[j].style.pointerEvents = "auto";
      }
      setshowUsernameModal(false);
    }
  }

  const closeAndUpload = () => {
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
        onHide={closeUsernameModal}
        keyboard={false}
        disableClose={true}>

        <Modal.Header className="username-modal-header">
          <h1>Welcome to Memory Stack!</h1>
        </Modal.Header>
        <Modal.Body className="username-modal-body">
          <div id="username-modal-description"><p>Where your memories live on and you can enjoy the moment.</p></div>
          <div>
            <span id="username-symbol">&#64;</span>
            <input id="username-modal-input" type="text" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
            </div>
          <div><button id="start-posting-button" onClick={closeUsernameModal}><span id="animation-span">Start Posting</span></button></div>
        </Modal.Body>
      </Modal>

      {/* NEW POST MODAL */}
      <Modal className="new-post-modal"
        animation={false}
        show={showNewPostModal}
        onHide={closeAndUpload}
        keyboard={false}>

        <Modal.Header className="new-post-modal-header">
          <h2 id="new-post-header">{username}'s new post</h2>
        </Modal.Header>
        <Modal.Body className="new-post-modal-body">
          <div id="picture-input"><span id="select-image-file">Select Image File</span><input type="file" accept="image/png, image/jpeg, image/jpg" ref={fileInputRef}/></div>
          <div id="caption-input"><textarea id="caption" type="text" placeholder="Enter caption..." onChange={e => setCaption(e.target.value)}></textarea></div>
          <div><button id="upload-button" className="new-post-button" onClick={closeAndUpload}>
            <span>Upload Post</span>
          </button></div>
          <div><button id="exit-button" className="new-post-button" onClick={closeWithoutUploading}>
            Exit
          </button></div>
        </Modal.Body>
      </Modal>

      <div className="opacity-element top-header no-click-element">
        <button id="new-post" className="link" onClick={newPost}>&#43;  New Post</button>
        <button className="link" >Activity</button>
        <img className="image" src={film} alt="camera"></img>
        <button className="link" >Scheduled Posts</button>
        <button className="link" >Profile</button>
      </div>

      <div className="grid opacity-element no-click-element"> 
         {posts.map(post => <Post key={post.id} post={post} />)} 
      </div> 

    </div>
  );
}

export default App; 
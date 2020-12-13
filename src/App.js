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
  const [showStatusPageModal, setshowStatusPageModal] = useState(false);

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

  const enableClicks = () => {
    var elements = document.getElementsByClassName("no-click-element");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.pointerEvents = "auto";
    }
  }

  const fileInputRef = useRef();

  const onUpload = event => {
    const fileInput = fileInputRef.current;
    if (fileInput.files.length > 0) {
      dispatch(uploadPost(fileInput.files[0], username, caption));
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
      enableClicks();
      setshowUsernameModal(false);
    }
  }

  const closeAndUpload = () => {
    const fileInput = fileInputRef.current;
    if (fileInput.files.length === 0) {
      alert("Please choose a file to upload.");
      return;
    }
    onUpload();
    setNewPostModal(false);
    setshowStatusPageModal(true);
  }

  const closeStatusPageModal = () => {
    var elements = document.getElementsByClassName("opacity-element");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = 1;
    }
    enableClicks();
    setshowStatusPageModal(false);
  }

  const closeWithoutUploading = () => {
    var elements = document.getElementsByClassName("opacity-element");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = 1;
    }
    enableClicks();
    setNewPostModal(false);
  }

  const newPost = () => {
    disableClicks();
    var elements = document.getElementsByClassName("opacity-element");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = .5;
    }
    setNewPostModal(true);
  }

  const menu = () => {
    const mobile = document.getElementById("mobile");

    mobile.classList.toggle('open');

  }

  return (

    <div className="App opacity-element" >

      {/* USERNAME MODAL */}
      <Modal className="username-modal"
        animation={false}
        show={showUsernameModal}
        onHide={closeUsernameModal}
        keyboard={false} >

        <Modal.Header className="username-modal-header">
          <h1>Welcome to Memory Stack!</h1>
        </Modal.Header>
        <Modal.Body className="username-modal-body">
          <div id="username-modal-description"><p>Where your memories live on and you can enjoy the moment.</p></div>
          <div>
            <span id="username-symbol">&#64;</span>
            <input id="username-modal-input" type="text" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
          </div>
          <div><button className="buttons" onClick={closeUsernameModal}><span id="animation-span">Start Posting</span></button></div>
        </Modal.Body>
      </Modal>

      {/* NEW POST MODAL */}
      <Modal className="new-post-modal"
        animation={false}
        show={showNewPostModal}
        keyboard={false}>

        <Modal.Header className="new-post-modal-header">
          <h2 id="new-post-header">{username}'s new post</h2>
        </Modal.Header>
        <Modal.Body className="new-post-modal-body">
          <div id="picture-input"><span id="select-image-file">Select Image File</span><input type="file" accept="image/png, image/jpeg, image/jpg" ref={fileInputRef} /></div>
          <div id="caption-input"><textarea id="caption" type="text" placeholder="Enter caption..." onChange={e => setCaption(e.target.value)}></textarea></div>
          <div><button id="upload-button" className="buttons" onClick={closeAndUpload}>
            <span id="animation-span">Upload Post</span>
          </button></div>
          <div><button id="exit-button-new-post" className="buttons exit-buttons" onClick={closeWithoutUploading}>
            Exit
          </button></div>
        </Modal.Body>
      </Modal>

      {/* STATUS PAGE MODAL */}
      <Modal className="status-page-modal"
        animation={false}
        show={showStatusPageModal}
        keyboard={false}>

        <Modal.Header className="status-page-modal-header">
          <h2 id="status-page-header">Stay Tuned...</h2>
        </Modal.Header>
        <Modal.Body className="status-page-modal-body">
          <div className="sk-circle">
            <div className="sk-circle1 sk-child"></div>
            <div className="sk-circle2 sk-child"></div>
            <div className="sk-circle3 sk-child"></div>
            <div className="sk-circle4 sk-child"></div>
            <div className="sk-circle5 sk-child"></div>
            <div className="sk-circle6 sk-child"></div>
            <div className="sk-circle7 sk-child"></div>
            <div className="sk-circle8 sk-child"></div>
            <div className="sk-circle9 sk-child"></div>
            <div className="sk-circle10 sk-child"></div>
            <div className="sk-circle11 sk-child"></div>
            <div className="sk-circle12 sk-child"></div>
          </div>
          <div className="body-status-page"><p>
             Your picture has been uploaded successfully! Check back in two hours to see your post. :)
            </p></div>
          <div><button className="buttons exit-buttons" onClick={closeStatusPageModal}>
            Exit
          </button></div>

        </Modal.Body>
      </Modal>


        <div id="menu-button" onClick={menu}> 
        <svg viewBox="0 0 100 80" width="30" height="30"> 
        <rect fill="black" width="100" height="15"></rect>
        <rect fill="black" y="30" width="100" height="15"></rect>
        <rect fill="black" y="60" width="100" height="15"></rect>
        </svg>

    
        </div>

        <div id="mobile"> 
        <div id="new-post" onClick={newPost}>&#43;  New Post</div>
        <div> Activity</div>
        <div> Scheduled Posts</div>
        <div> Profile</div>
        </div>


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
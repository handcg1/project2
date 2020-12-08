import React , {useState} from 'react';
import './App.css';
import Modal from 'react-bootstrap/Modal';

const host = "http://proj2-api.callanhand.me:3443";


export function Post(props) {

    const post = props.post;

    const [showNewImageModal, setNewImageModal] = useState(false);

    const closeNewImageModal = () => {
        setNewImageModal(false);
      }

      const handleClick = () => {
        setNewImageModal(true);
      }

    return (
        <div className="post">

        <div id="container">
          <img id="picture" onClick={handleClick} alt={`${post.picture}`} src={`${host}/image/${post.username}/${post.picture}`}></img> 
          
          <div id="text">
          <div id="caption-display">{post.caption}</div>
          <div id="username"> {"By " + post.username}</div>
          </div>
        </div>

       
        {/* LARGE PICTURE MODAL */}
        <Modal className="large-picture-modal"
        animation={false}
        show={showNewImageModal}
        onHide={closeNewImageModal}
        keyboard={false}>

        <Modal.Body className="large-picture-modal-body">
           <div id="large-pic-container"> 
                <img id="large-picture" alt={`${post.picture}`} src={`${host}/image/${post.username}/${post.picture}`}></img> 
            </div>
           <span id="close" onClick={closeNewImageModal} >&times;</span>
          
        </Modal.Body>
      </Modal>
        
        </div> 
    );

}




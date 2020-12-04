import React , {useState} from 'react';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const host = "http://proj2-api.callanhand.me:3443";


function handleClick() {
//     var modal = document.getElementById("myModal");
//     var img = document.getElementById("picture");
//     var modalImg = document.getElementById("img01");
//     var captionText = document.getElementById("caption");
//     modal.style.display = "block";
//     modalImg.src = img.src;

//     var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
//   span.onclick = function() { 
//   modal.style.display = "none";
//   }

    console.log(":)");


}


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
          <div id="username"> {"By," + post.username}</div>
          </div>
        </div>

       
        {/* Englarge Picture Modal */}
        <Modal className="large-picture-modal"
        animation={false}
        show={showNewImageModal}
        onHide={closeNewImageModal}
        keyboard={false}>

        <Modal.Body className="large-image-modal-body">
           <div id="large-pic-container"> 
                <img id="large-picture" alt={`${post.picture}`} src={`${host}/image/${post.username}/${post.picture}`}></img> 
            </div>
           <span id="close" onClick={closeNewImageModal} >&times;</span>
          
        </Modal.Body>
      </Modal>
        
        </div> 
    );

}




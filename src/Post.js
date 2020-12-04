import React from 'react';
import './App.css';

const host = "http://proj2-api.callanhand.me:3443";

export function Post(props) {

    const post = props.post;

    return (
        <div className="post">

        <div id="container">
          <img id="picture" alt={`${post.picture}`} src={`${host}/image/${post.username}/${post.picture}`}></img> 
          
          <div id="text">
          <div id="caption-display">{post.caption}</div>
          <div id="username"> {"By," + post.username}</div>
          </div>
        </div>
        </div> 
    );

}




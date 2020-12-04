import React from 'react';
import './App.css';

const host = "http://proj2-api.callanhand.me:3443";

export function Post(props) {

    const post = props.post;

    return (
        <div className="post">
            {/* <div id="username">{post.username}</div>
            <div id="caption">{post.caption}</div> */}

          <img id="picture" alt={`by user ${post.username} - ${post.caption}`} src={`${host}/image/${post.username}/${post.picture}`}></img> 
           
           
        </div>
    );

}




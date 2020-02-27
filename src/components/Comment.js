import React from 'react';
import '../css/Comment.css';

function Comment({ data }){
    return(
        <div id="comment">
            <img src={data.author.avatar} alt="avatar da pessoa que comentou no post" /> 
            <div id="comment_content">
                <p><strong>{data.author.name}</strong> {data.content}</p>
            </div>
        </div>
        
    );
}

export default Comment;
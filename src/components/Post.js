import React from 'react';
import Comment from './Comment';
import '../css/Post.css'

function Post({ data }){
    return(
       <div id="post">
           <div>
                <img src={data.author.avatar} alt="foto de perfil" />
                <div id="teste">
                    <p className="align"><strong>{data.author.name}</strong></p>
                    <p>{data.date}</p>
                </div>
           </div>
           <p className="content">{data.content}</p>
           <hr />
          {data.comments.map(comment => <Comment key={comment.id} data={comment}/>)}
       </div>
    )
}

export default Post;
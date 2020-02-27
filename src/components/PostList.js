import React, { Component } from 'react';
import Post from './Post';
import '../css/PostList.css';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: "Marcelo Carbono",
                    avatar: "https://avatars0.githubusercontent.com/u/29109580?s=400&v=4"
                },
                date: "27 Fev 2020",
                content: "Essa linha representa o conteúdo do post",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Albino Freitas",
                            avatar: "https://avatars0.githubusercontent.com/u/29109580?s=400&v=4"
                        },
                        content: "conteudo do comentário"
                    },
                    {
                        id: 2,
                        author: {
                            name: "Teste",
                            avatar: "https://avatars0.githubusercontent.com/u/29109580?s=400&v=4"
                        },
                        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
                    }
                ]
            },

            {
                id: 2,
                author: {
                    name: "Marcelo Carbono",
                    avatar: "https://avatars0.githubusercontent.com/u/29109580?s=400&v=4"
                },
                date: "27 Fev 2020",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Albino Freitas",
                            avatar: "https://avatars0.githubusercontent.com/u/29109580?s=400&v=4"
                        },
                        content: "conteudo do comentário"
                    },
                    {
                        id: 2,
                        author: {
                            name: "Teste",
                            avatar: "https://avatars0.githubusercontent.com/u/29109580?s=400&v=4"
                        },
                        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
                    }
                ]
            },


        ]
    }

    render(){
        return(
            <main>
                {this.state.posts.map(post => <Post key={post.id} data={post} /> )}
            </main>
        );
    }
}

export default PostList;

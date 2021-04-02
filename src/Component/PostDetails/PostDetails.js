import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const {id} =useParams();
    const [post, setPost] =useState({});
    const [comments,setComments] =useState([])


    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response =>response.json())
        .then(data =>setPost(data))
    },[]);
     


    useEffect(() =>{
     const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
         fetch(url)
         .then(response => response.json())
         .then(data=>setComments(data))
    }
    ,[])
    console.log(comments)
   
   
   
    return (
        <div>
            <h1>hello i am post details : {id}</h1>
            <p>user Posted  :{post.id}</p>
            <p>title :{post.title}</p>
            <p>body : {post.body}</p>
            <p>comment : {comments.length}</p>
            {
                comments.map(comment=> <Comment comment={comment}></Comment>)
            }

        </div>
    );
};

export default PostDetails;
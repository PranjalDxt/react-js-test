import React, {useState, useEffect} from 'react';
import './App.css';
import { AuthorName } from './Utils.js';

export const PostDesc = (props) => {
	let postId = props.match.params.id;
	let url = "https://jsonplaceholder.typicode.com/posts/"+postId;
	console.log(postId+url);
	const [postdes, setPostdes] = useState([]);
  
	const fetchPostDesc = () => {
		fetch("https://jsonplaceholder.typicode.com/posts/"+postId)
		.then(posts => posts.json())
		.then(data => setPostdes(data))
		.catch(error => console.log(error));
	}

	useEffect(() => {
		fetchPostDesc();
	})

console.log(postdes);
	return (
		<div>
			<div className="Card-CSS">
                <p><b>Title: </b>{postdes.title}</p>            
                <p><b>Description: </b>{postdes.body}</p>
                <AuthorName authorId={postdes.userId}/>           
            </div>
            <div className="Comments-CSS">
            	<h2 style={{marginLeft: '62px'}}> CommentSection </h2>
                <CommentSection postId={postdes.id}/>   
            </div>
   		</div>
	)
}

export const CommentSection = (postId) => {
	console.log(postId);
	const [comments, setComments] = useState([]);

	//authorId needs to be passed in fetch
	const fetchComment =() => {
	    fetch("https://jsonplaceholder.typicode.com/posts/"+postId.postId+"/comments")
	    .then(comments => comments.json())
	    .then(data => setComments(data))
	    .catch(error => console.log(error));
	  }

	useEffect(() => {
		fetchComment();
	})

	return (
		<div>
			{comments.map((comment, index) => (
				<div className="Card-CSS"  key={index}>
				<p><b>Name: </b>{comment.name}</p>
				<p><b>EmailId: </b>{comment.email}</p>
				<p><b>Comment: </b>{comment.body}</p>
				</div>
			))}
		</div>
	)
}
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import './App.css';


export const PostList = () => {
	const [posts, setPosts] = useState([]);
  
	const fetchPosts = () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(posts => posts.json())
		.then(data => setPosts(data))
		.catch(error => console.log(error));
	}

	useEffect(() => {
		fetchPosts();
	})

	return(
	  <div>
		{posts.slice(0, 20).map((post, index) => (
          <Link to={"/postDesc/"+post.id} className="link-CSS">
            <div className="Card-CSS"  key={index}>
                <p><b>Title: </b>{post.title.toUpperCase()}</p>            
                <p><b>Description: </b>{post.body}</p>
                <AuthorName authorId={post.userId}/>           
            </div>
          </Link>
        ))}
      </div>
    )			
}


export const AuthorList = () => {
	const [authors, setAuthors] = useState([]);
  
	const fetchAuthors = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(authors => authors.json())
		.then(data => setAuthors(data))
		.catch(error => console.log(error));
	}

	useEffect(() => {
		fetchAuthors();
	})

	return(
	<div>
		{authors.slice(0, 20).map((author, index) => (
            <div className="Card-CSS"  key={index}>
                <b>Name: </b>{author.name.toUpperCase()}             
                <p><b>Email: </b>{author.email}</p>
                <p><b>Phone Number: </b>{author.phone}</p>
                <p><b>Website: </b>{author.website}</p>
            </div>
        ))}
        </div>
    )			
}



export const AuthorName = (authorId) =>{
	console.log(authorId);
	const [author, setAuthor] = useState([]);

	//authorId needs to be passed in fetch
	const fetchAuthor =() => {
	    fetch("https://jsonplaceholder.typicode.com/users/"+authorId.authorId)
	    .then(author => author.json())
	    .then(data => setAuthor(data))
	    .catch(error => console.log(error));
	  }

	useEffect(() => {
		fetchAuthor();
	})

	return <p><b>Author Name: </b>{author.name}</p>
}


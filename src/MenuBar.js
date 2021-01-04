import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'; 


const MenuBar = () => {
    return (
	    <div className="App">
	    <b style={{fontSize:'30px', marginLeft:'100px', color: 'green'}}> Test Page </b>
	    <button className="Button-CSS">
	      <Link to="/postList" className="link-CSS">
	        Posts
	      </Link>
	      </button>
	      <button className="Button-CSS">
	      <Link to="/authorList" className="link-CSS">
	        Authors
	      </Link>
	      </button>
	      <button className="Button-login">
	      	Login
	      </button>
	      <hr style={{marginBottom: "20px"}}></hr>
  	    </div>
    );
}
export default MenuBar;
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import { PostList, AuthorList } from './Utils.js';
import { PostDesc } from './PostDesc.js'
import MenuBar from './MenuBar.js'


const App = () => {
  
  return (
    <BrowserRouter>
      <MenuBar />
      <Switch>
            <Route path='/postList'
              render={(props) => (
                <PostList {...props}/>
              )}
            />
            <Route
              path='/authorList'
              render={(props) => (
                <AuthorList {...props}/>
              )}
            />
            <Route
              path='/postDesc/:id'
              render={(props) => (
                <PostDesc {...props}/>
              )}
            />
      </Switch>
    </BrowserRouter>

  );  
}

export default App;

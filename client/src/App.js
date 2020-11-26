import React from 'react';
import {Router} from '@reach/router';
import BasicLogin from "./components/basiclogin";
//import UserForm from "./components/UserForm";
import './App.css';
import BasicGalleryList from './components/basicgallerylist';
import BasicGallery from "./components/basicgallery";
import BasicPhotoPage from "./components/basicphotopage";

function App() {
  return (
    <div className="App">
      <Router>
        <BasicLogin path="/"/>
        <BasicGalleryList path="/loggedin"/>
        <BasicGallery path="/gallery/:id" />
        <BasicPhotoPage path="/photos/:id" />
      </Router>
    </div>
  );
}

export default App;

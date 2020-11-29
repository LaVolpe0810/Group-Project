import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import BasicLogin from './basiclogin.js';
import { Router } from "@reach/router";
import BasicGalleryList from './basicgallerylist';
import BasicGallery from "./basicgallery";
import BasicPhotoPage from "./basicphotopage";

const AuthRoutes = props => {
    const { isAuthenticated, isLoading } = useAuth0();
    
    if(isLoading) {
        return (
            <div>Loading . . . </div>
        )
    }

    if(!isAuthenticated) {
        return(
            <div>
                <h1>Not Logged In</h1>
                <p>You must be logged in to perform this action.</p>
                <BasicLogin />
            </div>
        )
    }

    return (
        <>
            <Router>
                <BasicGalleryList path="/loggedin"/>
                <BasicPhotoPage path="/photos/new/:togallery" isnew={true} />
                <BasicPhotoPage path="/photos/:id" isnew={false} />
                <BasicGallery path="/gallery/new" isnew={true} />
                <BasicGallery path="/gallery/:id"  isnew={false} />
            </Router>
        </>
    )
}

export default AuthRoutes;
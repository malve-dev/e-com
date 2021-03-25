import React from 'react';
import './signInPage.styles.scss';
import SignIn from './../../components/signIn/signIn.component';

const SignInPage = (props) => {
    return(
        <div className = 'sign-in-and-sign-up'>
            <SignIn/>
        </div>
    );
}
export default SignInPage;